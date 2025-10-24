// Sayt yükləndikdə işə düşən funksiyalar
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll funksiyası - menyu linklərinə klik edəndə yumşaq keçid
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Standart link davranışını dayandır
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Yumşaq scroll animasiyası
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA düyməsinə klik edəndə "Haqqımızda" bölməsinə keç
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Navbar scroll effekti - scroll edəndə navbar rəngi dəyişir
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 107, 53, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #ff6b35, #4ecdc4)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Məhsul kartlarına hover effekti
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Portfolio şəkillərinə klik edəndə böyüt
    const portfolioItems = document.querySelectorAll('.portfolio-item img');
    portfolioItems.forEach(img => {
        img.addEventListener('click', function() {
            // Şəkli böyütmək üçün modal yarad
            createImageModal(this.src, this.alt);
        });
    });

    // WhatsApp düyməsinə klik edəndə mesaj göndər
    const whatsappBtn = document.querySelector('.whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // WhatsApp mesajı hazırla
            const message = "Salam! MAMA MAKO məhsulları haqqında məlumat almaq istəyirəm.";
            const phoneNumber = "994707312109";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            
            // Yeni pəncərədə WhatsApp aç
            window.open(whatsappUrl, '_blank');
        });
    }

    // Sayt yüklənmə animasiyası
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Şəkli böyütmək üçün modal yarad
function createImageModal(imageSrc, imageAlt) {
    // Modal div yarad
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;

    // Şəkli modal içində yarad
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = imageAlt;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    `;

    modal.appendChild(img);
    document.body.appendChild(modal);

    // Modal-a klik edəndə bağla
    modal.addEventListener('click', function() {
        document.body.removeChild(modal);
    });

    // ESC düyməsinə basanda bağla
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }
    });
}

// Sayt performansını yaxşılaşdırmaq üçün lazy loading
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Sayt yükləndikdə lazy loading işə sal
document.addEventListener('DOMContentLoaded', lazyLoadImages);
