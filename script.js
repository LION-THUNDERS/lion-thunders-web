document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Preloader ---
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');

    // Función para ocultar el preloader y mostrar el contenido
    function hidePreloader() {
        if (preloader && content) {
            preloader.style.display = 'none'; // Oculta el preloader
            content.style.display = 'block';   // Muestra el contenido principal
        }
    }

    // Espera a que la ventana (incluyendo todos los recursos como imágenes, etc.) cargue completamente
    // Antes de ocultar el preloader.
    window.addEventListener('load', hidePreloader);

    // --- Lógica del Menú Hamburguesa ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Verifica que ambos elementos (hamburguesa y enlaces de navegación) existan
    if (hamburgerMenu && navLinks) {
        // Añade un "event listener" al botón hamburguesa para detectar clics
        hamburgerMenu.addEventListener('click', () => {
            // Alterna la clase 'open' en la lista de enlaces de navegación
            // Si la tiene, la quita (oculta el menú). Si no la tiene, la añade (muestra el menú).
            navLinks.classList.toggle('open');
            // Opcional: Alterna la clase 'open' en el propio botón hamburguesa
            // Esto se puede usar para animar el icono (por ejemplo, convertirlo en una 'X')
            hamburgerMenu.classList.toggle('open');
        });

        // Opcional: Cerrar el menú si se hace clic en un enlace (para mejorar la UX en móviles)
        // Selecciona todos los enlaces dentro del menú de navegación
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