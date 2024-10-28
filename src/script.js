document.addEventListener("DOMContentLoaded", function () {
    const aside = document.getElementsByTagName('aside')[0];
    const mainContent = document.getElementById('main-content');
    const menuToggle = document.getElementById('menu-toggle');

    menuToggle.addEventListener('click', function () {
        aside.classList.toggle('active');
        mainContent.classList.toggle('active');
    });
});