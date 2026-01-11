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
            colors: ['#D4AF37', '#C9A227', '#8B0000']
        });
    }, 500);
});

// Background blur + overlay on scroll (sharp at top)
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Small threshold for smooth activation
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// Metallic gold shine movement on scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY * 0.08;
    const shinePos = 50 + (scrollPos % 100) - 50;
    document.documentElement.style.setProperty('--shine-position', `${shinePos}%`);
});
