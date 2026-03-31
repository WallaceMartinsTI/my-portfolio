// ── CAROUSEL ──
const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('carouselDots');
const cards = track.querySelectorAll('.project-card');
const total = cards.length;
let current = 0;
let autoTimer;

// Build dots
cards.forEach((_, i) => {
    const d = document.createElement('button');
    d.classList.add('dot');
    if (i === 0) d.classList.add('active');
    d.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(d);
});

function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsContainer.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
    });
    resetAuto();
}

document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
}
resetAuto();

// Swipe support
let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
});

// ── INTERSECTION OBSERVER ──
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${i * 0.05}s`;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    }
    });
}, { threshold: 0.1 });

fadeEls.forEach(el => observer.observe(el));