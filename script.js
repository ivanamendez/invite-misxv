// Fecha del evento
const fechaEvento = new Date("June 15, 2025 19:00:00").getTime();

// Actualizar cuenta regresiva
const actualizarTiempo = setInterval(function() {
    let ahora = new Date().getTime();
    let tiempoRestante = fechaEvento - ahora;

    let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    let horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    if (tiempoRestante < 0) {
        clearInterval(actualizarTiempo);
        document.querySelector(".timer").innerText = "¡Es hoy! 🎉";
    }
}, 1000);

// Mostrar detalles del evento
document.getElementById("btn-detalles").addEventListener("click", function() {
    let detalles = document.getElementById("detalles");
    if (detalles.style.display === "none" || detalles.style.display === "") {
        detalles.style.display = "block";
        this.textContent = "Ocultar Detalles";
    } else {
        detalles.style.display = "none";
        this.textContent = "Ver Detalles";
    }
});

// Control de música
document.getElementById("btn-musica").addEventListener("click", function() {
    let musica = document.getElementById("musica");
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});



// Botón de confirmación
document.getElementById("btn-confirmar").addEventListener("click", function() {
    alert("¡Gracias por confirmar tu asistencia! 🎉");
});

// Control de música
document.getElementById("btn-musica").addEventListener("click", function() {
    let musica = document.getElementById("musica");
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});
