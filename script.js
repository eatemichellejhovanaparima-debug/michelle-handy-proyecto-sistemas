
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-handy');
    const submitBtn = document.querySelector('.btn-submit');

    if (form) {
        form.addEventListener('submit', (e) => {
            submitBtn.textContent = 'Enviando solicitud...';
            submitBtn.style.backgroundColor = '#718096';
            submitBtn.style.cursor = 'not-allowed';
            
        });
    }
});
