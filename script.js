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

// Background blur + overlay on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// Gold shine movement on scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY * 0.08;
    const shinePos = 50 + (scrollPos % 100) - 50;
    document.documentElement.style.setProperty('--shine-position', `${shinePos}%`);
});

// Active nav link highlight
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
