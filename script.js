document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Preloader ---
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');

    // Tiempo máximo que el preloader estará visible (3 segundos en total incluyendo fade-out)
    const maxLoadingTime = 3000;
    // Duración de la transición de opacidad (debe coincidir con el CSS)
    const fadeOutDuration = 500;

    let preloaderHidden = false; // Flag para asegurar que hidePreloader solo se ejecute una vez

    // Función para ocultar el preloader y mostrar el contenido
    function hidePreloader() {
        if (preloaderHidden) return; // Si ya se ocultó, no hagas nada

        if (preloader && content) {
            preloader.style.opacity = '0'; // Inicia la transición de desvanecimiento

            setTimeout(() => {
                preloader.style.display = 'none'; // Finalmente oculta el preloader después del fade-out
                content.style.display = 'block';   // Muestra el contenido principal
                preloaderHidden = true; // Marca que el preloader ya se ocultó
            }, fadeOutDuration); // Espera a que la transición de opacidad termine
        }
    }

    // Opción 1: Ocultar el preloader después de un tiempo máximo garantizado.
    // Esto es crucial para evitar que la página se quede atascada.
    setTimeout(() => {
        hidePreloader();
    }, maxLoadingTime);

    // Opción 2: Ocultar el preloader una vez que todos los recursos de la página hayan cargado.
    // Si la carga es más rápida que maxLoadingTime, esta función lo ocultará antes.
    window.addEventListener('load', () => {
        // Solo ocultamos si aún no se ha ocultado por el temporizador maxLoadingTime
        if (!preloaderHidden) {
            hidePreloader();
        }
    });


    // --- Lógica del Menú Hamburguesa ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Verifica que ambos elementos (hamburguesa y enlaces de navegación) existan
    if (hamburgerMenu && navLinks) {
        // Añade un "event listener" al botón hamburguesa para detectar clics
        hamburgerMenu.addEventListener('click', () => {
            // Alterna la clase 'open' en la lista de enlaces de navegación
            navLinks.classList.toggle('open');
            // Opcional: Alterna la clase 'open' en el propio botón hamburguesa (para animar el icono)
            hamburgerMenu.classList.toggle('open');
        });

        // Opcional: Cerrar el menú si se hace clic en un enlace (para mejorar la UX en móviles)
        const allNavLinks = document.querySelectorAll('.nav-links a');
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Si el menú está abierto, ciérralo
                if (navLinks.classList.contains('open')) {
                    navLinks.classList.remove('open');
                    // También quita la clase 'open' del botón hamburguesa si la tiene
                    if (hamburgerMenu.classList.contains('open')) {
                        hamburgerMenu.classList.remove('open');
                    }
                }
            });
        });
    }
});