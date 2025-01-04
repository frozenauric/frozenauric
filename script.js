// Interacción con las ventanas flotantes
const floatingContainer = document.querySelector('.floating-container');
const popups = document.querySelectorAll('.popup');

// Cuando el mouse se acerca al contenedor
floatingContainer.addEventListener('mouseover', () => {
    popups.forEach(popup => {
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.opacity = '1';
            popup.style.transform = 'translateX(-50%) translateY(10px)';
        }, 100);
    });
});

// Cuando el mouse sale del contenedor
floatingContainer.addEventListener('mouseleave', () => {
    popups.forEach(popup => {
        popup.style.opacity = '0';
        popup.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    });
});
