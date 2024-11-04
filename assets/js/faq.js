document.querySelectorAll('.faq-button').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.closest('.faq-item');
        faqItem.classList.toggle('active');
    });
});