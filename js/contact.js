/* ============================================
   ACE PLAYZ — CONTACT PAGE JAVASCRIPT
   Form handling, modal, animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // === CONTACT FORM ===
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('contact-modal');
    const modalClose = document.getElementById('contact-modal-close');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const message = document.getElementById('contact-message').value;

            if (!name || !email || !message) return;

            // Show success modal
            if (modal) {
                modal.style.display = 'flex';
            }

            // Reset form
            form.reset();
        });
    }

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // === CONTACT FORM FOCUS EFFECTS ===
    document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea').forEach(el => {
        el.addEventListener('focus', () => {
            el.parentElement.style.borderColor = 'rgba(56, 189, 248, 0.3)';
        });
        el.addEventListener('blur', () => {
            el.parentElement.style.borderColor = '';
        });
    });
});
