document.addEventListener('DOMContentLoaded', () => {
    // PRELOADER
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');

    if (preloader && content) {
        // Simular un tiempo mínimo de carga para ver el preloader
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                content.style.display = 'block'; // Mostrar el contenido una vez que el preloader desaparezca
            }, 500); // Coincide con la duración de la transición de opacidad del preloader
        }, 2000); // 2 segundos de visualización mínima del preloader
    }

    // MENÚ HAMBURGUESA
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('open');
            navLinks.classList.toggle('open');
        });

        // Cerrar el menú al hacer clic en un enlace (para experiencia móvil)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }
});