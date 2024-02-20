// script.js

// Función para activar el menú pegajoso
function activarMenuPegajoso() {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    // Calcula la posición del encabezado
    const headerHeight = header.offsetHeight;

    // Activa el menú pegajoso al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY >= headerHeight) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
}

// Función para el efecto suave de desplazamiento al hacer clic en enlaces internos
function activarDesplazamientoSuave() {
    const enlacesInternos = document.querySelectorAll('nav a[href^="#"]');

    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault();

            const objetivo = document.querySelector(enlace.getAttribute('href'));
            
            window.scrollTo({
                top: objetivo.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
}

// Llama a las funciones cuando la ventana se ha cargado completamente
window.addEventListener('load', () => {
    activarMenuPegajoso();
    activarDesplazamientoSuave();
});
