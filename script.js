// Wacht tot de pagina geladen is
document.addEventListener('DOMContentLoaded', () => {
    const desktopMessage = document.getElementById('desktop-message');
    const mobileContent = document.getElementById('mobile-content');
    const chirpAudio = document.getElementById('chirp');
    const bgMusic = document.getElementById('bg-music');

    // Detecteer of het een mobiel device is (Android/iOS)
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 768;

    if (isMobile) {
        desktopMessage.style.display = 'none';
        mobileContent.style.display = 'block';

        // Speel vogel piep elke 5-10 seconden random voor realisme
        function playChirp() {
            chirpAudio.play();
            const randomDelay = Math.floor(Math.random() * 5000) + 5000; // 5-10 sec
            setTimeout(playChirp, randomDelay);
        }

        // Start chirp na 2 sec
        setTimeout(playChirp, 2000);

        // Pauzeer/resume muziek op touch (voor mobile user control, browsers blokkeren soms autoplay)
        document.body.addEventListener('touchstart', () => {
            if (bgMusic.paused) {
                bgMusic.play();
            }
        });
    } else {
        desktopMessage.style.display = 'block';
        mobileContent.style.display = 'none';
    }
});
