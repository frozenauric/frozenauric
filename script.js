// Si deseas agregar interacciones más complejas con JavaScript
const floatingContainer = document.querySelector('.floating-container');
const popup = document.querySelector('.popup');

// Al pasar el mouse sobre el contenedor
floatingContainer.addEventListener('mouseover', () => {
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.opacity = '1';
        popup.style.transform = 'translateX(-50%) translateY(10px)';
    }, 100); // Retraso para la animación
});

// Al quitar el mouse del contenedor
floatingContainer.addEventListener('mouseleave', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(-50%) translateY(0)';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300); // Esperar hasta que la animación termine antes de ocultarlo
});
