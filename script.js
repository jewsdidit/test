document.addEventListener('DOMContentLoaded', () => {
    const desktopMessage = document.getElementById('desktop-message');
    const mobileContent = document.getElementById('mobile-content');
    const chirpAudio = document.getElementById('chirp');
    const bgMusic = document.getElementById('bg-music');
    const particlesContainer = document.getElementById('particles');

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth <= 768;

    if (isMobile) {
        desktopMessage.style.display = 'none';
        mobileContent.style.display = 'block';

        // Vogel piep
        function playChirp() {
            chirpAudio.play();
            setTimeout(playChirp, Math.random() * 5000 + 5000);
        }
        setTimeout(playChirp, 2000);

        // Muziek op touch
        document.body.addEventListener('touchstart', () => {
            if (bgMusic.paused) bgMusic.play();
        });

        // Genereer vallende vogels en blaadjes
        const birds = ['bird1.png', 'bird2.png', 'bird3.png', 'bird4.png', 'bird5.png'];
        function createParticle(type) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            if (type === 'bird') {
                particle.classList.add('bird');
                particle.style.backgroundImage = `url(assets/${birds[Math.floor(Math.random() * birds.length)]})`;
            } else {
                particle.style.backgroundImage = `url(assets/petal.png)`;
                particle.style.width = '20px';
                particle.style.height = '20px';
            }
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
            particlesContainer.appendChild(particle);
            setTimeout(() => particle.remove(), 20000); // Verwijder na animatie
        }

        // Creëer particles
        setInterval(() => createParticle('bird'), 2000);
        setInterval(() => createParticle('petal'), 500);

        // Scroll animaties (parallax voor sections)
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            section.style.opacity = 0;
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 1s, transform 1s';
            observer.observe(section);
        });
    } else {
        desktopMessage.style.display = 'block';
        mobileContent.style.display = 'none';
    }
});
