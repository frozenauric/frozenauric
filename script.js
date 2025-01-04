// JavaScript para animar la aparición de ventanas flotantes
const infoBoxes = document.querySelectorAll('.info-box');

// Cuando el mouse se acerca a los recuadros
infoBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.1)';
        box.style.transition = 'all 0.3s ease-in-out';
    });
    
    // Cuando el mouse sale de los recuadros
    box.addEventListener('mouseleave', () => {
        box.style.transform = 'scale(1)';
    });
});
