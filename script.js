document.addEventListener('DOMContentLoaded', () => {

    // 1. LENIS FOR SMOOTH SCROLL
    const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. CUSTOM CURSOR
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const imagePreview = document.querySelector('.project-image-preview');

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });
    gsap.set(imagePreview, { xPercent: -50, yPercent: -50 });

    window.addEventListener('mousemove', e => {
        gsap.to(cursor, { duration: 0.2, x: e.clientX, y: e.clientY });
        gsap.to(follower, { duration: 0.6, x: e.clientX, y: e.clientY, ease: 'power2.out' });
        gsap.to(imagePreview, { duration: 1.2, x: e.clientX, y: e.clientY, ease: 'power2.out' });
    });

    // 3. TEXT SPLITTING & ANIMATIONS
    const heroLines = new SplitType('.hero-title', { types: 'lines' });
    gsap.from(heroLines.lines, { y: '110%', stagger: 0.1, delay: 0.2, duration: 1.2, ease: 'power3.out' });
    gsap.utils.toArray('.split-lines').forEach(section => {
        const lines = new SplitType(section, { types: 'lines' });
        gsap.from(lines.lines, { y: '100%', stagger: 0.1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' } });
    });
    const animatedChars = new SplitType('.split-chars', { types: 'chars' });
    gsap.from(animatedChars.chars, { y: '100%', stagger: 0.02, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: '.split-chars', start: 'top 85%' } });

    // 4. PROJECT HOVER IMAGE REVEAL
    gsap.utils.toArray('.project-item').forEach(item => {
        const imgSrc = item.getAttribute('data-img');
        item.addEventListener('mouseenter', () => {
            imagePreview.style.backgroundImage = `url(${imgSrc})`;
            gsap.to(imagePreview, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' });
            gsap.to(follower, { scale: 1.5, background: 'rgba(255,255,255,0.2)' });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(imagePreview, { opacity: 0, scale: 0.8, duration: 0.4, ease: 'power2.out' });
            gsap.to(follower, { scale: 1, background: 'transparent' });
        });
    });

    // 5. MARQUEE SCROLLING TEXT ANIMATION
    const marqueeTrack = document.querySelector('.marquee-track');
    marqueeTrack.innerHTML += marqueeTrack.innerHTML;
    gsap.to(marqueeTrack, { xPercent: -50, repeat: -1, duration: 20, ease: 'linear' }).totalProgress(0.5);

    // 6. INTERACTIVE PARTICLE NETWORK BACKGROUND
    const canvas = document.getElementById('particle-network');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    let particlesArray;
    const mouse = { x: null, y: null, radius: (canvas.height / 120) * (canvas.width / 120) };
    window.addEventListener('mousemove', (event) => { mouse.x = event.x; mouse.y = event.y; });
    class Particle {
        constructor(x, y, directionX, directionY, size, color) { this.x = x; this.y = y; this.directionX = directionX; this.directionY = directionY; this.size = size; this.color = color; }
        draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false); ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; ctx.fill(); }
        update() { if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX; if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY; let dx = mouse.x - this.x; let dy = mouse.y - this.y; let distance = Math.sqrt(dx * dx + dy * dy); if (distance < mouse.radius + this.size) { if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 5; if (mouse.x > this.x && this.x > this.size * 10) this.x -= 5; if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 5; if (mouse.y > this.y && this.y > this.size * 10) this.y -= 5; } this.x += this.directionX; this.y += this.directionY; this.draw(); }
    }
    function initParticles() { particlesArray = []; let numberOfParticles = (canvas.height * canvas.width) / 9000; for (let i = 0; i < numberOfParticles; i++) { let size = (Math.random() * 2) + 1; let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2); let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2); let directionX = (Math.random() * 0.4) - 0.2; let directionY = (Math.random() * 0.4) - 0.2; particlesArray.push(new Particle(x, y, directionX, directionY, size, '#fff')); } }
    function animateParticles() { requestAnimationFrame(animateParticles); ctx.clearRect(0, 0, innerWidth, innerHeight); for (let i = 0; i < particlesArray.length; i++) particlesArray[i].update(); connect(); }
    function connect() { let opacityValue = 1; for (let a = 0; a < particlesArray.length; a++) { for (let b = a; b < particlesArray.length; b++) { let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y)); if (distance < (canvas.width / 7) * (canvas.height / 7)) { opacityValue = 1 - (distance / 20000); ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particlesArray[a].x, particlesArray[a].y); ctx.lineTo(particlesArray[b].x, particlesArray[b].y); ctx.stroke(); } } } }
    window.addEventListener('resize', () => { canvas.width = innerWidth; canvas.height = innerHeight; mouse.radius = (canvas.height / 120) * (canvas.width / 120); initParticles(); });
    window.addEventListener('mouseout', () => { mouse.x = undefined; mouse.y = undefined; });
    initParticles(); animateParticles();

    // 7. QUICK NAV PANEL ANIMATION
    const quickNav = document.getElementById('quick-nav');
    const navLinksContainer = quickNav.querySelector('.nav-links');
    const navLinkItems = gsap.utils.toArray('.nav-link');
    const navIcon = quickNav.querySelector('.nav-icon');
    const navTimeline = gsap.timeline({ paused: true });
    navTimeline.to(navIcon, { opacity: 0, duration: 0.2 })
        .to(quickNav, { width: '60px', duration: 0.3, ease: 'power2.inOut' }, '<')
        .to(quickNav, { rotate: 180, duration: 0.4, ease: 'power3.inOut' })
        .to(navLinksContainer, { rotate: -180, duration: 0 }, '<')
        .to(quickNav, { width: '380px', duration: 0.4, ease: 'power3.out' })
        .to(navLinksContainer, { opacity: 1, duration: 0.1 })
        .to(navLinkItems, { opacity: 1, pointerEvents: 'all', stagger: 0.07, duration: 0.3 }, '-=0.2');
    quickNav.addEventListener('mouseenter', () => navTimeline.play());
    quickNav.addEventListener('mouseleave', () => navTimeline.reverse());
    navLinkItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); const target = e.target.getAttribute('href'); lenis.scrollTo(target); navTimeline.reverse();
        });
    });

    // 8. PLAYGROUND REVEAL & 3D ANIMATION
    const threeCanvas = document.getElementById('three-canvas');
    const scene = new THREE.Scene();
    const textureLoader = new THREE.TextureLoader();
    const spiralTexture = textureLoader.load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABoSURBVHja7cEBDQAAAMKg909tDwcUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACESAD4sWAITrQo6AAAAAElFTkSuQmCC');
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshStandardMaterial({ metalness: 0.95, roughness: 0.05, map: spiralTexture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(2, 2, 5);
    scene.add(directionalLight);
    const sizes = { width: threeCanvas.parentElement.clientWidth, height: threeCanvas.parentElement.clientHeight };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
    camera.position.z = 2.5;
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer({ canvas: threeCanvas, antialias: true, alpha: true });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    let baseRotationSpeed = 0.002;
    let scrollDrivenRotationSpeed = 0;
    const tick = () => { sphere.rotation.y += baseRotationSpeed + scrollDrivenRotationSpeed; renderer.render(scene, camera); window.requestAnimationFrame(tick); };
    tick();
    window.addEventListener('resize', () => {
        sizes.width = threeCanvas.parentElement.clientWidth; sizes.height = threeCanvas.parentElement.clientHeight;
        camera.aspect = sizes.width / sizes.height; camera.updateProjectionMatrix();
        renderer.setSize(sizes.width, sizes.height); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const contactTrigger = document.querySelector('.email-link');
    const revealLine = document.querySelector('.playground-reveal-line');
    const playgroundSection = document.getElementById('playground');

    contactTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        const revealTl = gsap.timeline();
        revealTl
            .to(revealLine, { scaleX: 1, duration: 0.5, ease: 'power2.inOut' })
            .to(playgroundSection, { height: 'auto', visibility: 'visible', duration: 1, ease: 'power2.inOut' })
            .call(() => {
                ScrollTrigger.refresh();
                lenis.scrollTo('#playground', { duration: 1.5 });
            });
    });

    const textElements = gsap.utils.toArray('.playground-text');
    const wrapper = document.querySelector('.playground-content-wrapper');
    gsap.timeline({
        scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: 'bottom bottom',
            pin: '.three-canvas-container',
            scrub: 1,
            onUpdate: (self) => {
                const maxSpeed = 0.1;
                scrollDrivenRotationSpeed = Math.min(maxSpeed, self.progress * self.progress * maxSpeed * 5);
                const sectionProgress = Math.floor(self.progress * (textElements.length));
                textElements.forEach((el, index) => {
                    if (index === sectionProgress) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                });
            }
        }
    });

    // New Animated Sections
    function initNewSections() {
        // Dynamic Showcase Animations
        gsap.utils.toArray('.showcase-item').forEach((item, i) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 1,
                delay: i * 0.2,
                ease: 'power3.out'
            });
        });

        // Text Scroll Animation
        const scrollTrack = document.querySelector('.scroll-track');
        if (scrollTrack) {
            const scrollTexts = gsap.utils.toArray('.scroll-text');
            scrollTexts.forEach(text => {
                scrollTrack.appendChild(text.cloneNode(true));
            });
        }

        // Stats Counter Animation
        gsap.utils.toArray('.stat-item').forEach(item => {
            const number = item.querySelector('.stat-number');
            const value = parseInt(item.getAttribute('data-value'));
            const progress = item.querySelector('.stat-progress');

            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 80%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                onComplete: () => {
                    gsap.to(number, {
                        innerText: value,
                        duration: 2,
                        snap: { innerText: 1 },
                        ease: 'power2.out'
                    });
                    gsap.to(progress, {
                        scaleX: 1,
                        duration: 2,
                        ease: 'power2.out'
                    });
                }
            });
        });
    }

    // Initialize new sections
    initNewSections();

    // Contact Modal Logic
    const contactModal = document.getElementById('contact-modal');
    const openModalLinks = document.querySelectorAll('.email-link');
    const closeModalBtn = document.querySelector('.modal-close');

    function openModal() {
        contactModal.style.display = 'flex';
        setTimeout(() => { contactModal.style.opacity = '1'; }, 10);
        document.body.style.overflow = 'hidden';
    }
    function closeModal() {
        contactModal.style.opacity = '0';
        setTimeout(() => { contactModal.style.display = 'none'; }, 300);
        document.body.style.overflow = '';
    }

    openModalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });
    closeModalBtn.addEventListener('click', closeModal);
    contactModal.addEventListener('mousedown', function(e) {
        if (e.target === contactModal) closeModal();
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && contactModal.style.display === 'flex') closeModal();
    });
});