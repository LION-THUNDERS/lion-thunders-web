document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón del menú hamburguesa y la lista de enlaces de navegación
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Verifica que ambos elementos existan antes de añadir el evento
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