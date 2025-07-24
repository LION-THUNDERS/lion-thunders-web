document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');
    const minDisplayTime = 1000; // Mínimo tiempo de visualización del preloader en milisegundos (1 segundo)
    const maxLoadingTime = 3000; // Tiempo máximo que el preloader estará visible (3 segundos)

    let pageLoaded = false;
    let preloaderHidden = false;

    // Función para ocultar el preloader y mostrar el contenido
    function hidePreloader() {
        if (preloaderHidden) return; // Evita que se ejecute múltiples veces

        if (preloader && content) {
            preloader.style.opacity = '0'; // Inicia la transición de desvanecimiento
            preloader.style.transition = 'opacity 0.5s ease-out'; // Transición suave

            setTimeout(() => {
                preloader.style.display = 'none'; // Finalmente oculta el preloader
                content.style.display = 'block';   // Muestra el contenido principal
                preloaderHidden = true;
            }, 500); // Espera a que la transición de opacidad termine (0.5s)
        }
    }

    // Listener para cuando toda la ventana (incluyendo recursos) haya cargado
    window.addEventListener('load', () => {
        pageLoaded = true;
        // Si el tiempo mínimo ya pasó, oculta el preloader inmediatamente
        // Si no, la función hidePreloader() ya será llamada por el setTimeout
        // Aquí no hacemos nada directamente, setTimeout lo manejará
    });

    // Establece un temporizador para ocultar el preloader después de un tiempo máximo
    setTimeout(() => {
        // Asegúrate de que el preloader se oculte, incluso si la página no ha terminado de cargar
        hidePreloader();
    }, maxLoadingTime);


    // --- Lógica del Menú Hamburguesa (sin cambios, solo para referencia del contexto completo) ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            hamburgerMenu.classList.toggle('open');
        });

        const allNavLinks = document.querySelectorAll('.nav-links a');
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    if (hamburgerMenu.classList.contains('open')) {
                        hamburgerMenu.classList.remove('open');
                    }
                }
            });
        });
    }
});