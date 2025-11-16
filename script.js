// ============================================
// MAMA MAKO - Portfolio Website
// JavaScript Funksiyaları
// ============================================

// ============================================
// MƏHSUL MƏLUMATLARI - Bütün əriştə növləri
// ============================================
const products = [
    {
        id: 1,
        name: "Brokolili Əriştə",
        emoji: "🟢",
        color: "#2d8659",
        bgColor: "#e8f5e9",
        vitamins: ["A", "C", "K", "B6", "Folat"],
        minerals: ["Kalsium", "Kalium", "Dəmir", "Maqnezium"],
        benefits: [
            "Güclü antioksidantdır",
            "Uşaqların immunitetini artırır",
            "Həzm sistemini yüngülləşdirir",
            "Sümükləri möhkəmləndirir"
        ]
    },
    {
        id: 2,
        name: "Kök Əriştəsi",
        emoji: "🟠",
        color: "#ff6b35",
        bgColor: "#fff3e0",
        vitamins: ["A", "C", "K", "B qrup"],
        minerals: ["Kalium", "Dəmir", "Kalsium"],
        benefits: [
            "Görməni gücləndirir",
            "İmmuniteti artırır",
            "Dəri üçün faydalıdır",
            "Təbii rəng, təbii şirinlik"
        ]
    },
    {
        id: 3,
        name: "Çuğundur Əriştəsi",
        emoji: "🟣",
        color: "#9c27b0",
        bgColor: "#f3e5f5",
        vitamins: ["A", "C", "B6", "Folat (B9)"],
        minerals: ["Dəmir", "Kalium", "Maqnezium"],
        benefits: [
            "Qanazlığının qarşısını almağa kömək edir",
            "Güclü antioksidantdır (betanin)",
            "Həzmə rahatdır",
            "Təbii parlaq rəng"
        ]
    },
    {
        id: 4,
        name: "İspanaq Əriştəsi",
        emoji: "🟢",
        color: "#388e3c",
        bgColor: "#e8f5e9",
        vitamins: ["A", "C", "K", "B qrup"],
        minerals: ["Dəmir", "Kalsium", "Maqnezium", "Kalium"],
        benefits: [
            "Sümükləri möhkəmləndirir",
            "İmmuniteti gücləndirir",
            "Uşaqlar üçün çox qidalıdır",
            "Təbii yaşıl rəng, təbii dad"
        ]
    },
    {
        id: 5,
        name: "Gül Kələmli Əriştə",
        emoji: "⚪",
        color: "#757575",
        bgColor: "#f5f5f5",
        vitamins: ["C", "K", "B6", "Folat"],
        minerals: ["Kalium", "Manqan", "Fosfor"],
        benefits: [
            "Allergiyası olan uşaqlar üçün uyğundur",
            "Qlüteni olmayan ailələr üçün də yararlıdır",
            "Həzmə çox rahatdır",
            "İltihab əleyhinə təsiri var"
        ]
    },
    {
        id: 6,
        name: "Kababkili (Çuçqalı) Əriştə",
        emoji: "🟡",
        color: "#fbc02d",
        bgColor: "#fffde7",
        vitamins: ["A", "C", "B6"],
        minerals: ["Kalium", "Maqnezium", "Manqan"],
        benefits: [
            "Uşaqlar üçün ən yüngül tərəvəzdir",
            "Şişkinlik yaratmır",
            "Həzm sisteminə kömək edir",
            "Kalorisi azdır, pəhrizə uyğundur"
        ]
    },
    {
        id: 7,
        name: "Qırmızı Köklü Əriştə",
        emoji: "🟠",
        color: "#e64a19",
        bgColor: "#ffebee",
        vitamins: ["A", "K", "C", "B kompleks"],
        minerals: ["Kalium", "Dəmir", "Mis"],
        benefits: [
            "Gözləri möhkəmləndirir",
            "Dərini gözəlləşdirir",
            "İmmuniteti artırır",
            "Uşaqlar üçün təbii şirin dad verir"
        ]
    },
    {
        id: 8,
        name: "Qırmızı Kələmli Əriştə",
        emoji: "🟣",
        color: "#7b1fa2",
        bgColor: "#f3e5f5",
        vitamins: ["C", "K", "B6"],
        minerals: ["Kalium", "Manqan", "Antosianinlər"],
        benefits: [
            "Güclü antioksidantdır",
            "Beyin fəaliyyətini gücləndirir",
            "İltihab əleyhinə təsiri yüksəkdir",
            "Təbii bənövşəyi rəng – uşaqlar üçün maraqlı"
        ]
    },
    {
        id: 9,
        name: "Balqabaqlı Əriştə",
        emoji: "🟧",
        color: "#f57c00",
        bgColor: "#fff3e0",
        vitamins: ["A", "C", "E", "B2", "B6"],
        minerals: ["Kalium", "Mis", "Manqan"],
        benefits: [
            "Gözlər üçün ən faydalı tərəvəz",
            "Mədə üçün yumşaq və rahatdır",
            "Uşaqlar üçün təbii şirin dad",
            "Dərinin və immunitetin dostu"
        ]
    }
];

// ============================================
// DOM ELEMENTLƏRİ - HTML elementlərinə çıxış
// ============================================
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

// ============================================
// SAYT YÜKLƏNDİKDƏ İŞƏ DÜŞƏN FUNKSİYALAR
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// ============================================
// SAYTIN İNİTİALİZASİYASI
// ============================================
function initializeWebsite() {
    renderProducts();           // Məhsulları göstər
    setupSmoothScroll();        // Smooth scroll funksiyası
    setupMobileMenu();          // Mobil menyu
    setupNavbarScroll();        // Navbar scroll effekti
    setupModal();               // Modal pəncərə
    setupAnimations();          // Animasiyalar
}

// ============================================
// MƏHSULLARI RENDER ETMƏK
// ============================================
function renderProducts() {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// ============================================
// MƏHSUL KARTI YARATMAQ
// ============================================
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.setProperty('--product-color', product.color);
    card.style.setProperty('--product-bg', product.bgColor);
    
    card.innerHTML = `
        <div class="product-emoji">${product.emoji}</div>
        <div class="product-color-circle" style="background-color: ${product.bgColor}; border-color: ${product.color};">
            <div class="product-inner-circle" style="background-color: ${product.color};"></div>
        </div>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-preview">${product.benefits[0]}</p>
        <button class="product-btn" data-product-id="${product.id}">
            Ətraflı məlumat
            <i class="fas fa-arrow-right"></i>
        </button>
    `;
    
    // Karta klik edəndə modal aç
    const btn = card.querySelector('.product-btn');
    btn.addEventListener('click', () => openProductModal(product));
    
    return card;
}

// ============================================
// MƏHSUL MODAL PƏNCƏRƏSİNİ AÇMAQ
// ============================================
function openProductModal(product) {
    if (!modalBody || !productModal) return;
    
    modalBody.innerHTML = `
        <div class="modal-product-header" style="background: linear-gradient(135deg, ${product.color}, ${product.bgColor});">
            <div class="modal-emoji">${product.emoji}</div>
            <h2 class="modal-product-name">${product.name}</h2>
        </div>
        <div class="modal-product-content">
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-pills"></i> Vitaminlər
                </h3>
                <div class="modal-tags">
                    ${product.vitamins.map(v => `<span class="tag">${v}</span>`).join('')}
                </div>
            </div>
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-gem"></i> Minerallar
                </h3>
                <div class="modal-tags">
                    ${product.minerals.map(m => `<span class="tag">${m}</span>`).join('')}
                </div>
            </div>
            <div class="modal-section">
                <h3 class="modal-section-title">
                    <i class="fas fa-heart"></i> Faydalar
                </h3>
                <ul class="modal-benefits-list">
                    ${product.benefits.map(b => `<li><i class="fas fa-check"></i> ${b}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Scroll-u blokla
}

// ============================================
// MODAL PƏNCƏRƏSİNİ BAĞLAMAQ
// ============================================
function closeProductModal() {
    if (!productModal) return;
    productModal.classList.remove('active');
    document.body.style.overflow = ''; // Scroll-u aktivləşdir
}

// ============================================
// MODAL FUNKSİYALARINI QUraşdırmaq
// ============================================
function setupModal() {
    if (modalClose) {
        modalClose.addEventListener('click', closeProductModal);
    }
    
    if (productModal) {
        // Modal arxa planına klik edəndə bağla
        productModal.addEventListener('click', function(e) {
            if (e.target === productModal) {
                closeProductModal();
            }
        });
        
        // ESC düyməsinə basanda bağla
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && productModal.classList.contains('active')) {
                closeProductModal();
            }
        });
    }
}

// ============================================
// SMOOTH SCROLL FUNKSİYASI
// ============================================
function setupSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Mobil menyunu bağla
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
                
                // Smooth scroll
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // CTA düyməsi
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const productsSection = document.querySelector('#products');
            if (productsSection) {
                productsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// ============================================
// MOBİL MENYU FUNKSİYALARI
// ============================================
function setupMobileMenu() {
    if (!mobileMenuBtn || !navMenu) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Menyu linklərinə klik edəndə menyunu bağla
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// ============================================
// NAVBAR SCROLL EFFEKTİ
// ============================================
function setupNavbarScroll() {
    if (!navbar) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// ANİMASİYALAR - Intersection Observer
// ============================================
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Animasiya üçün elementləri izlə
    const animateElements = document.querySelectorAll('.product-card, .benefit-card, .step-card, .contact-card');
    animateElements.forEach(el => observer.observe(el));
}