document.addEventListener('DOMContentLoaded', () => {
    console.log('Portofolio profesional Milla Hanifa berhasil dimuat.');

    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Simpan preferensi mode di localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        toggleBtn.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});
