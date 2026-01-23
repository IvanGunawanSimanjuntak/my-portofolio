// ======================================
// 1. HAMBURGER MENU (Mobile Navigation)
// ======================================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

// Toggle menu saat hamburger diklik
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Ubah icon hamburger menjadi 'X' dan sebaliknya
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Tutup menu saat salah satu link diklik
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// ======================================
// 2. SCROLL ANIMATION (Fade In Effect)
// ======================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe semua elemen dengan class 'hidden'
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// ======================================
// 3. SCROLL TO TOP BUTTON
// ======================================
const scrollTopBtn = document.getElementById('scrollTop');

// Tampilkan tombol saat scroll > 300px
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Scroll ke atas saat tombol diklik
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ======================================
// 4. SMOOTH SCROLL FOR NAVIGATION LINKS
// ======================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ======================================
// 5. ACTIVE LINK ON SCROLL (Scroll Spy)
// Agar menu navigasi berubah warna saat di-scroll
// ======================================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Logika: Jika scroll sudah masuk 1/3 dari section
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(a => {
        a.classList.remove('active-link'); // Hapus class lama
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active-link'); // Tambah class ke menu yang aktif
        }
    });
});

// ======================================
// 6. DYNAMIC YEAR (Otomatis Ganti Tahun)
// ======================================
const yearSpan = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
yearSpan.innerHTML = `&copy; ${currentYear} Ivan Gunawan Simanjuntak. All Rights Reserved.`;