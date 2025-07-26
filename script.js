document.addEventListener('DOMContentLoaded', () => {
    // PRELOADER
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');

    // Función para ocultar el preloader y mostrar el contenido
    const hidePreloader = () => {
        if (preloader && content) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                content.style.display = 'block'; // Mostrar el contenido
                // Opcional: Remover la propiedad display: none después de un breve retraso
                // para permitir animaciones de CSS en el contenido si las hubiera.
                // setTimeout(() => { content.style.display = ''; }, 50);
            }, 500); // Coincide con la duración de la transición de opacidad del preloader
        }
    };

    // Escuchar el evento 'load' de la ventana, que indica que todos los recursos (imágenes, etc.) han sido cargados.
    // Esto asegura que el contenido está listo antes de que el preloader desaparezca.
    window.addEventListener('load', () => {
        // Establecer un tiempo mínimo para el preloader, incluso si la página carga rápido.
        // Esto mejora la experiencia de usuario, dándoles tiempo a ver la animación.
        setTimeout(hidePreloader, 2000); // 2 segundos de visualización mínima del preloader
    });

    // En caso de que la página se cargue extremadamente rápido y 'load' ya haya disparado,
    // o para asegurar que el preloader desaparezca si hay algún problema con 'load'
    // (aunque 'load' es el evento más confiable para recursos externos).
    // Esta parte puede ser opcional si confías plenamente en el 'window.load'.
    // Si la página ya está cargada (readyState === 'complete'), ejecutar la función inmediatamente.
    if (document.readyState === 'complete') {
        // Añadir un pequeño retraso para que el usuario pueda ver el preloader si la carga fue casi instantánea.
        setTimeout(hidePreloader, 500);
    }


    // MENÚ HAMBURGUESA
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('open');
            navLinks.classList.toggle('open');
            // Opcional: Añadir/quitar overflow: hidden al body para evitar scroll en el contenido cuando el menú está abierto
            // document.body.classList.toggle('no-scroll');
        });

        // Cerrar el menú al hacer clic en un enlace (para experiencia móvil y desktop con menú hamburguesa)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('open');
                navLinks.classList.remove('open');
                // document.body.classList.remove('no-scroll'); // Restaurar scroll
            });
        });
    }

    // SCROLL SUAVE PARA ENLACES DE NAVEGACIÓN
    // Ya está activado por scroll-behavior: smooth en el CSS de html.
});