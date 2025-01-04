// Obtener el modal y los elementos de control
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// Cuando se haga clic en el botón, abrir el modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cuando se haga clic en el botón de cerrar, cerrar el modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Si el usuario hace clic fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
