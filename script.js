AOS.init({
    duration: 1000,
    easing: 'ease-out-quart',
    once: false,
    offset: 100
});

const weddingDate = new Date('2026-08-15T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    if (diff < 0) {
        document.getElementById('countdown').innerHTML = 'Vandaag is de grote dag!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('countdown').innerHTML = 
        `${days} dagen, ${hours} uren en ${minutes} minuten`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    setTimeout(() => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#7C0A02', '#8B0000', '#E8D4B0']
        });
    }, 500);
});
