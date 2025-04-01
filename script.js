document.getElementById("btn-musica").addEventListener("click", function() {
    let musica = document.getElementById("musica");
    if (musica.paused) {
        musica.play();
        this.textContent = "Pausar Música";
    } else {
        musica.pause();
        this.textContent = "Reproducir Música";
    }
});
