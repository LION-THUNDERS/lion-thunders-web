document.querySelectorAll('header nav ul li a[href^="#"], .cta-button[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previene el comportamiento predeterminado del enlace (salto instantáneo)

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Hace que el scroll sea suave
        });

        // Opcional: Para cerrar el menú de navegación en móviles después de hacer clic
        // if (window.innerWidth <= 768) { // Ejemplo para pantallas pequeñas
        //     // Lógica para cerrar el menú, si tienes un menú responsive colapsable
        // }
    });
});