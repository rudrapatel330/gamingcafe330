document.addEventListener('DOMContentLoaded', () => {

    // ============================================
    // DATA
    // ============================================
    const zones = {
        ps5: {
            label: 'PS5 Zone',
            rate: 100,
            stations: [
                { id: 'PS5-01', avail: true }, { id: 'PS5-02', avail: true },
                { id: 'PS5-03', avail: true }, { id: 'PS5-04', avail: true },
                { id: 'PS5-05', avail: true }, { id: 'PS5-06', avail: true },
            ]
        },
        pc: {
            label: 'PC Zone',
            rate: 80,
            stations: [
                { id: 'PC-01', avail: true },
            ]
        }
    };

    // ============================================
    // STATE
    // ============================================
    let selectedZone = null;
    let selectedStation = null;
    let selectedDuration = 0;

    // ============================================
    // DOM REFS
    // ============================================
    const els = {
        name: document.getElementById('field-name'),
        phone: document.getElementById('field-phone'),
        date: document.getElementById('field-date'),
        time: document.getElementById('field-time'),
        duration: document.getElementById('field-duration'),
        zonePs5: document.getElementById('zone-ps5'),
        zonePc: document.getElementById('zone-pc'),
        stationPicker: document.getElementById('station-picker'),
        stationGrid: document.getElementById('station-grid'),
        total: document.getElementById('total-amount'),
        btn: document.getElementById('book-btn'),
        ps5Count: document.getElementById('ps5-count'),
        pcCount: document.getElementById('pc-count'),
    };

    // ============================================
    // SET MIN DATE
    // ============================================
    const today = new Date().toISOString().split('T')[0];
    if (els.date) {
        els.date.setAttribute('min', today);
        els.date.value = today;
    }

    // ============================================
    // LIVE CLOCK
    // ============================================
    function tick() {
        const now = new Date();
        const t = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const d = now.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });
        const el = document.getElementById('live-text');
        if (el) el.textContent = `${d} · ${t} IST`;
    }
    tick();
    setInterval(tick, 1000);

    // ============================================
    // UPDATE AVAILABILITY COUNTS
    // ============================================
    function updateCounts() {
        const ps5a = zones.ps5.stations.filter(s => s.avail).length;
        const pca = zones.pc.stations.filter(s => s.avail).length;
        if (els.ps5Count) els.ps5Count.textContent = `${ps5a}/${zones.ps5.stations.length} available`;
        if (els.pcCount) els.pcCount.textContent = `${pca}/${zones.pc.stations.length} available`;
    }
    updateCounts();

    // ============================================
    // ZONE SELECTION
    // ============================================
    function selectZone(zone) {
        selectedZone = zone;
        selectedStation = null;

        els.zonePs5.classList.toggle('selected-ps5', zone === 'ps5');
        els.zonePc.classList.toggle('selected-pc', zone === 'pc');

        buildStations(zone);
        updateTotal();
    }

    els.zonePs5.addEventListener('click', () => selectZone('ps5'));
    els.zonePc.addEventListener('click', () => selectZone('pc'));

    // ============================================
    // BUILD STATION GRID
    // ============================================
    function buildStations(zone) {
        const data = zones[zone];
        const grid = els.stationGrid;
        grid.innerHTML = '';

        data.stations.forEach((s, i) => {
            const dot = document.createElement('div');
            dot.className = `station-dot ${s.avail ? (zone === 'ps5' ? 'avail' : 'pc-avail') : 'occ'}`;
            dot.textContent = s.id.replace('PS5-', '').replace('PC-', '');
            dot.title = s.id;
            dot.dataset.index = i;

            if (s.avail) {
                dot.addEventListener('click', () => selectStation(i, zone));
            }

            grid.appendChild(dot);
        });

        els.stationPicker.style.display = 'block';
    }

    // ============================================
    // STATION SELECTION
    // ============================================
    function selectStation(index, zone) {
        const dots = els.stationGrid.querySelectorAll('.station-dot');
        dots.forEach(d => d.classList.remove('selected'));

        const dot = dots[index];
        if (dot) {
            dot.classList.add('selected');
            selectedStation = zones[zone].stations[index].id;
        }

        updateTotal();
    }

    // ============================================
    // PRICE CALCULATION
    // ============================================
    function updateTotal() {
        const zone = selectedZone;
        const dur = parseInt(els.duration?.value);
        selectedDuration = dur || 0;

        if (zone && dur > 0 && selectedStation) {
            const total = zones[zone].rate * dur;
            els.total.textContent = `₹${total}`;
            els.total.classList.add('has-value');
            els.btn.disabled = false;
        } else if (zone && dur > 0) {
            const total = zones[zone].rate * dur;
            els.total.textContent = `₹${total}`;
            els.total.classList.add('has-value');
            els.btn.disabled = true;
        } else {
            els.total.textContent = '₹0';
            els.total.classList.remove('has-value');
            els.btn.disabled = true;
        }
    }

    els.duration?.addEventListener('change', updateTotal);

    // ============================================
    // SUBMIT
    // ============================================
    els.btn.addEventListener('click', () => {
        const name = els.name?.value?.trim();
        const phone = els.phone?.value?.trim();
        const date = els.date?.value;
        const time = els.time?.value;
        const dur = parseInt(els.duration?.value);

        if (!name || !phone || !selectedZone || !selectedStation || !date || !time || !dur) return;

        const zone = zones[selectedZone];
        const total = zone.rate * dur;

        const d = new Date(date);
        const fmt = d.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        // Mark station occupied
        const idx = zone.stations.findIndex(s => s.id === selectedStation);
        if (idx > -1) zone.stations[idx].avail = false;
        const dot = els.stationGrid.querySelectorAll('.station-dot')[idx];
        if (dot) {
            dot.className = 'station-dot occ';
            dot.classList.remove('selected', 'avail', 'pc-avail');
            dot.replaceWith(dot.cloneNode(true));
        }
        updateCounts();

        // Show modal
        const modal = document.getElementById('confirm-modal');
        document.getElementById('modal-msg').textContent = `Your ${zone.label} session is locked in!`;
        document.getElementById('modal-receipt').innerHTML = `
            <strong>👤</strong> ${name}<br>
            <strong>📞</strong> ${phone}<br>
            <strong>🎮</strong> ${zone.label}<br>
            <strong>📍</strong> ${selectedStation}<br>
            <strong>📅</strong> ${fmt}<br>
            <strong>🕐</strong> ${time}<br>
            <strong>⏱️</strong> ${dur} hour${dur > 1 ? 's' : ''}<br>
            <strong>💰</strong> ₹${total}
        `;
        modal.style.display = 'flex';

        // Reset form state but keep modal open
        selectedStation = null;
        selectedZone = null;
        els.zonePs5.classList.remove('selected-ps5');
        els.zonePc.classList.remove('selected-pc');
        els.stationPicker.style.display = 'none';
        els.stationGrid.innerHTML = '';
        els.total.textContent = '₹0';
        els.total.classList.remove('has-value');
        els.btn.disabled = true;

        // Reset fields (keep date)
        els.name.value = '';
        els.phone.value = '';
        els.time.value = '';
        els.duration.value = '';
    });

    // Close modal
    document.getElementById('modal-ok')?.addEventListener('click', () => {
        document.getElementById('confirm-modal').style.display = 'none';
    });
    document.getElementById('confirm-modal')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
    });

    // ============================================
    // SIMULATE LIVE STATUS CHANGES
    // ============================================
    setInterval(() => {
        const keys = ['ps5', 'pc'];
        const k = keys[Math.floor(Math.random() * keys.length)];
        const st = zones[k].stations;
        const i = Math.floor(Math.random() * st.length);
        st[i].avail = !st[i].avail;

        // Update visual dots in station picker if this zone is showing
        if (selectedZone === k) {
            const dots = els.stationGrid.querySelectorAll('.station-dot');
            if (dots[i]) {
                dots[i].className = `station-dot ${st[i].avail ? (k === 'ps5' ? 'avail' : 'pc-avail') : 'occ'}`;
                if (st[i].avail) {
                    dots[i].addEventListener('click', () => selectStation(i, k));
                }
                // Flash
                dots[i].style.transition = 'transform 0.3s ease';
                dots[i].style.transform = 'scale(1.15)';
                setTimeout(() => { dots[i].style.transform = 'scale(1)'; }, 300);
            }
        }

        updateCounts();
    }, 8000);

});
