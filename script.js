document.addEventListener('DOMContentLoaded', () => {
    const desktopMessage = document.getElementById('desktop-message');
    const mobileContent = document.getElementById('mobile-content');
    const chirpAudio = document.getElementById('chirp');
    const bgMusic = document.getElementById('bg-music');

    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

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

        // Scroll animaties
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

        // Touch for bird animation on mobile
        document.querySelectorAll('.bird').forEach(bird => {
            bird.addEventListener('touchstart', () => {
                bird.style.transform = 'translateY(-10px)';
                setTimeout(() => bird.style.transform = '', 500);
            });
        });
    } else {
        desktopMessage.style.display = 'block';
        mobileContent.style.display = 'none';
    }
});
