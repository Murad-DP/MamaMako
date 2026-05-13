// ============================================
// MAMA MAKO - Premium Mobile-First Website
// Enhanced JavaScript with Touch Gestures
// ============================================

// GitHub Pages base path detection
const basePath = window.location.pathname.split('/').slice(0, -1).join('/') || '';
const getImagePath = (relativePath) => {
    // Remove leading slash if basePath exists
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    return basePath ? `${basePath}/${cleanPath}` : `./${cleanPath}`;
};

// ============================================
// MƏHSUL MƏLUMATLARI
// ============================================
const products = [
    {
        id: 1,
        name: "Brokoli",
        emoji: "🟢",
        color: "#2d8659",
        bgColor: "#e8f5e9",
        tone: "green",
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
        name: "Kök",
        emoji: "🟠",
        color: "#ff6b35",
        bgColor: "#fff3e0",
        tone: "orange",
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
        name: "Çuğundur",
        emoji: "🟣",
        color: "#9c27b0",
        bgColor: "#f3e5f5",
        tone: "purple",
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
        name: "İspanaq",
        emoji: "🟢",
        color: "#388e3c",
        bgColor: "#e8f5e9",
        tone: "green",
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
        name: "Gül Kələm",
        emoji: "⚪",
        color: "#757575",
        bgColor: "#f5f5f5",
        tone: "white",
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
        name: "Kabaçki",
        emoji: "🟡",
        color: "#fbc02d",
        bgColor: "#fffde7",
        tone: "orange",
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
        name: "Qırmızı Kök",
        emoji: "🟠",
        color: "#e64a19",
        bgColor: "#ffebee",
        tone: "orange",
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
        name: "Qırmızı Kələm",
        emoji: "🟣",
        color: "#7b1fa2",
        bgColor: "#f3e5f5",
        tone: "purple",
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
        name: "Balqabaqlı",
        emoji: "🟧",
        color: "#f57c00",
        bgColor: "#fff3e0",
        tone: "orange",
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
// DOM ELEMENTLƏRİ
// ============================================
const productsGrid = document.getElementById('productsGrid');
const productModal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const bottomNavLinks = document.querySelectorAll('.bottom-nav-link');
const filterBar = document.getElementById('filterBar');
const galleryGrid = document.getElementById('galleryGrid');
const imageModal = document.getElementById('imageModal');
const imageModalImg = document.getElementById('imageModalImg');
const imageModalClose = document.getElementById('imageModalClose');
const imageModalPrev = document.getElementById('imageModalPrev');
const imageModalNext = document.getElementById('imageModalNext');
const imageModalCurrent = document.getElementById('imageModalCurrent');
const imageModalTotal = document.getElementById('imageModalTotal');

let activeFilter = 'all';
let touchStartY = 0;
let touchEndY = 0;
let isModalOpen = false;
let galleryImages = [];
let currentImageIndex = 0;

// ============================================
// SAYT YÜKLƏNDİKDƏ
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupTouchGestures();
    setupParallax();
    setupScrollProgress();
});

// ============================================
// SAYTIN İNİTİALİZASİYASI
// ============================================
function initializeWebsite() {
    // Fix image paths for GitHub Pages
    fixImagePaths();
    renderProducts();
    loadGalleryImages();
    setupSmoothScroll();
    setupMobileMenu();
    setupNavbarScroll();
    setupModal();
    setupImageModal();
    setupAnimations();
    setupFilters();
    setupBottomNavActive();
    setupLazyLoading();
}

// ============================================
// ŞƏKİL YOLLARINI DÜZƏLT (GitHub Pages üçün)
// ============================================
function fixImagePaths() {
    // Logo şəkillərini düzəlt
    const logoImages = document.querySelectorAll('img[src*="WhatsApp Image"]');
    logoImages.forEach(img => {
        const currentSrc = img.getAttribute('src');
        img.src = getImagePath(currentSrc);
    });
}

// ============================================
// MƏHSULLARI RENDER ETMƏK
// ============================================
function renderProducts(filter = activeFilter) {
    if (!productsGrid) {
        console.error('Products grid not found');
        return;
    }
    
    productsGrid.innerHTML = '';

    const filtered = products.filter(product => {
        if (filter === 'all') return true;
        return product.tone === filter;
    });

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem;">
                <p style="font-size: 1.2rem; color: var(--text-light); margin-bottom: 1rem;">
                    Bu kateqoriyada məhsul tapılmadı.
                </p>
                <button class="filter-chip active" onclick="document.querySelector('[data-filter=\\'all\\']').click()">
                    Hamısını göstər
                </button>
            </div>
        `;
        return;
    }

    filtered.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.style.animationDelay = `${index * 0.1}s`;
        productsGrid.appendChild(productCard);
    });
    
    // Animasiyaları yenidən aktivləşdir
    setTimeout(() => {
        setupAnimations();
    }, 100);
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
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProductModal(product);
    });
    
    // Karta klik edəndə də modal aç (mobil üçün)
    card.addEventListener('click', (e) => {
        if (e.target !== btn && !btn.contains(e.target)) {
            openProductModal(product);
        }
    });
    
    return card;
}

// ============================================
// MƏHSUL MODAL PƏNCƏRƏSİNİ AÇMAQ
// ============================================
function openProductModal(product) {
    if (!modalBody || !productModal) return;
    
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
    
    modalBody.innerHTML = `
        <div class="modal-product-header" style="background: linear-gradient(135deg, ${product.color}, ${product.bgColor});">
            <div class="modal-handle"></div>
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
    
    // Haptic feedback (mobil üçün)
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// ============================================
// MODAL PƏNCƏRƏSİNİ BAĞLAMAQ
// ============================================
function closeProductModal() {
    if (!productModal) return;
    isModalOpen = false;
    productModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
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
        
        // Modal content üçün swipe down gesture
        const modalContent = productModal.querySelector('.modal-content');
        if (modalContent) {
            let startY = 0;
            let currentY = 0;
            let isDragging = false;
            
            modalContent.addEventListener('touchstart', (e) => {
                startY = e.touches[0].clientY;
                isDragging = true;
            });
            
            modalContent.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                currentY = e.touches[0].clientY;
                const diff = currentY - startY;
                
                if (diff > 0) {
                    modalContent.style.transform = `translateY(${diff}px)`;
                }
            });
            
            modalContent.addEventListener('touchend', () => {
                if (currentY - startY > 100) {
                    closeProductModal();
                }
                modalContent.style.transform = '';
                isDragging = false;
                startY = 0;
                currentY = 0;
            });
        }
    }
}

// ============================================
// SMOOTH SCROLL FUNKSİYASI
// ============================================
function setupSmoothScroll() {
    const allLinks = [...navLinks, ...bottomNavLinks];

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Mobil üçün navbar + təxmini boşluq
                if (navMenu) {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
                
                // Smooth scroll
                const offset = 88;
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Bottom nav aktivliyini yenilə
                updateBottomNavActive(targetId);
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
                const offset = 88;
                const targetPosition = productsSection.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
}

// ============================================
// FİLTR ÇİPLƏRİ
// ============================================
function setupFilters() {
    if (!filterBar) {
        console.warn('Filter bar not found');
        return;
    }

    filterBar.addEventListener('click', function(e) {
        const chip = e.target.closest('.filter-chip');
        
        if (!chip) return;
        
        e.preventDefault();
        e.stopPropagation();
        
        const selected = chip.dataset.filter || 'all';
        activeFilter = selected;

        // Aktiv vəziyyəti yenilə
        const allChips = document.querySelectorAll('.filter-chip');
        allChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(20);
        }

        // Məhsulları yenidən göstər
        renderProducts(activeFilter);
        
        // Scroll to products
        const productsSection = document.querySelector('#products');
        if (productsSection) {
            const offset = 100;
            const targetPosition = productsSection.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// ============================================
// MOBİL MENYU FUNKSİYALARI
// ============================================
function setupMobileMenu() {
    if (!mobileMenuBtn || !navMenu) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        
        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(30);
        }
    });
    
    // Menyu linklərinə klik edəndə menyunu bağla
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Arxa plana klik edəndə bağla
    navMenu.addEventListener('click', function(e) {
        if (e.target === navMenu) {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// NAVBAR SCROLL EFFEKTİ
// ============================================
function setupNavbarScroll() {
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Animasiya üçün elementləri izlə
    const animateElements = document.querySelectorAll('.product-card, .benefit-card, .step-card, .contact-card, .ingredient-item, .gallery-item, .storage-step-card');
    animateElements.forEach(el => {
        if (!el.classList.contains('animate-in')) {
            observer.observe(el);
        }
    });
}

// ============================================
// BOTTOM NAV ACTIVE STATE
// ============================================
function setupBottomNavActive() {
    updateBottomNavActive();
    // Scroll zamanı yeniləmə optimizedScrollHandler (throttle) ilə edilir
}

function updateBottomNavActive(targetId = null) {
    if (!targetId) {
        const sections = ['#products', '#gallery', '#usage', '#contact'];
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(sectionId => {
            const section = document.querySelector(sectionId);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    targetId = sectionId;
                }
            }
        });
    }
    
    bottomNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// ============================================
// TOUCH GESTURES
// ============================================
function setupTouchGestures() {
    // Filter bar swipe
    if (filterBar) {
        let isDown = false;
        let startX;
        let scrollLeft;

        filterBar.addEventListener('mousedown', (e) => {
            isDown = true;
            filterBar.style.cursor = 'grabbing';
            startX = e.pageX - filterBar.offsetLeft;
            scrollLeft = filterBar.scrollLeft;
        });

        filterBar.addEventListener('mouseleave', () => {
            isDown = false;
            filterBar.style.cursor = 'grab';
        });

        filterBar.addEventListener('mouseup', () => {
            isDown = false;
            filterBar.style.cursor = 'grab';
        });

        filterBar.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - filterBar.offsetLeft;
            const walk = (x - startX) * 2;
            filterBar.scrollLeft = scrollLeft - walk;
        });
    }
}

// ============================================
// PARALLAX EFFECT
// ============================================
function setupParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }, { passive: true });
}

// ============================================
// SCROLL PROGRESS
// ============================================
function setupScrollProgress() {
    // Optional: Add scroll progress indicator if needed
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        // You can use this for a progress bar if needed
        // document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`);
    }, { passive: true });
}

// ============================================
// LAZY LOADING
// ============================================
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttled bottom-nav yeniləməsi (navbar üçün ayrıca listener setupNavbarScroll-da)
const optimizedScrollHandler = throttle(() => {
    updateBottomNavActive();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// ============================================
// PREVENT DOUBLE TAP ZOOM ON MOBILE
// ============================================
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ============================================
// GALLERY FUNCTIONS - Qalereya funksiyaları
// ============================================
function loadGalleryImages() {
    if (!galleryGrid) return;
    
    // img qovluğundakı şəkillərin siyahısı
    galleryImages = [
        'img/New1.jpeg',
        'img/New2.jpeg',
        'img/IMG-20251208-WA0022.jpg',
        'img/IMG-20251208-WA0024.jpg',
        'img/IMG-20251209-WA0003.jpg',
        'img/IMG-20251209-WA0004.jpg',
        'img/IMG-20251209-WA0005.jpg',
        'img/IMG-20251209-WA0006.jpg',
        'img/IMG-20251209-WA0007.jpg',
        'img/IMG-20251209-WA0008.jpg',
        'img/IMG-20251209-WA0009.jpg',
        'img/IMG-20251209-WA0019.jpg',
        'img/IMG-20251209-WA0020.jpg',
        'img/IMG-20251209-WA0021.jpg',
        'img/IMG-20251209-WA0023.jpg',
        'img/IMG-20251209-WA0024.jpg',
        'img/IMG-20251209-WA0026.jpg'
    ].map(path => getImagePath(path));
    
    galleryGrid.innerHTML = '';
    
    galleryImages.forEach((imageSrc, index) => {
        const galleryItem = createGalleryItem(imageSrc, index);
        galleryGrid.appendChild(galleryItem);
    });
    
    // Total sayını güncəllə
    if (imageModalTotal) {
        imageModalTotal.textContent = galleryImages.length;
    }
    
    // Animasiyaları yenidən aktivləşdir
    setTimeout(() => {
        setupAnimations();
    }, 100);
}

function createGalleryItem(imageSrc, index) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.animationDelay = `${index * 0.05}s`;
    
    item.innerHTML = `
        <img src="${imageSrc}" alt="MAMA MAKO məhsul şəkli ${index + 1}" loading="lazy" draggable="false">
        <div class="gallery-item-overlay">
            <div class="gallery-item-overlay-icon">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `;
    
    // Sürüşmə ilə toxunuşu ayır: yalnız demək olar ki, hərəkətsiz "tap" modal açsın
    const MOVE_THRESHOLD_PX = 14;
    const TAP_MAX_MS = 550;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;
    let touchMoved = false;
    let suppressNextClick = false;

    item.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
        touchMoved = false;
    }, { passive: true });

    item.addEventListener('touchmove', (e) => {
        if (touchMoved || !e.touches.length) return;
        const dx = Math.abs(e.touches[0].clientX - touchStartX);
        const dy = Math.abs(e.touches[0].clientY - touchStartY);
        if (dx > MOVE_THRESHOLD_PX || dy > MOVE_THRESHOLD_PX) {
            touchMoved = true;
        }
    }, { passive: true });

    item.addEventListener('touchend', () => {
        if (touchMoved) {
            suppressNextClick = true;
            return;
        }
        if (Date.now() - touchStartTime > TAP_MAX_MS) {
            suppressNextClick = true;
            return;
        }
        suppressNextClick = true;
        openImageModal(index);
    }, { passive: true });

    item.addEventListener('click', (e) => {
        if (suppressNextClick) {
            e.preventDefault();
            e.stopPropagation();
            suppressNextClick = false;
            return;
        }
        openImageModal(index);
    });
    
    return item;
}

function openImageModal(index) {
    if (!imageModal || !imageModalImg) return;
    
    currentImageIndex = index;
    isModalOpen = true;
    document.body.style.overflow = 'hidden';
    
    // Şəkli yüklə
    imageModalImg.src = galleryImages[index];
    imageModalImg.alt = `MAMA MAKO məhsul şəkli ${index + 1}`;
    
    // Counter güncəllə
    if (imageModalCurrent) {
        imageModalCurrent.textContent = index + 1;
    }
    
    // Modal aç
    imageModal.classList.add('active');
    
    // Haptic feedback (mobil üçün)
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    // Preload növbəti və əvvəlki şəkillər
    preloadAdjacentImages(index);
}

function closeImageModal() {
    if (!imageModal) return;
    
    isModalOpen = false;
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

function showNextImage() {
    if (galleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateImageModal();
}

function showPrevImage() {
    if (galleryImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateImageModal();
}

function updateImageModal() {
    if (!imageModalImg || galleryImages.length === 0) return;
    
    // Fade out
    imageModalImg.style.opacity = '0';
    
    setTimeout(() => {
        imageModalImg.src = galleryImages[currentImageIndex];
        imageModalImg.alt = `MAMA MAKO məhsul şəkli ${currentImageIndex + 1}`;
        
        if (imageModalCurrent) {
            imageModalCurrent.textContent = currentImageIndex + 1;
        }
        
        // Fade in
        imageModalImg.style.opacity = '1';
        
        // Preload
        preloadAdjacentImages(currentImageIndex);
        
        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(20);
        }
    }, 150);
}

function preloadAdjacentImages(index) {
    // Növbəti və əvvəlki şəkilləri preload et
    const nextIndex = (index + 1) % galleryImages.length;
    const prevIndex = (index - 1 + galleryImages.length) % galleryImages.length;
    
    const nextImg = new Image();
    nextImg.src = galleryImages[nextIndex];
    
    const prevImg = new Image();
    prevImg.src = galleryImages[prevIndex];
}

function setupImageModal() {
    if (!imageModal) return;
    
    // Bağlama düyməsi
    if (imageModalClose) {
        imageModalClose.addEventListener('click', closeImageModal);
    }
    
    // Növbəti düyməsi
    if (imageModalNext) {
        imageModalNext.addEventListener('click', (e) => {
            e.stopPropagation();
            showNextImage();
        });
    }
    
    // Əvvəlki düyməsi
    if (imageModalPrev) {
        imageModalPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            showPrevImage();
        });
    }
    
    // Modal arxa planına klik edəndə bağla
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            closeImageModal();
        }
    });
    
    // ESC düyməsinə basanda bağla
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            closeImageModal();
        }
        if (e.key === 'ArrowLeft' && imageModal.classList.contains('active')) {
            showPrevImage();
        }
        if (e.key === 'ArrowRight' && imageModal.classList.contains('active')) {
            showNextImage();
        }
    });
    
    // Mobil üçün swipe gesture
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    
    if (imageModalImg) {
        imageModalImg.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        imageModalImg.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            touchEndY = e.changedTouches[0].clientY;
            
            const deltaX = touchEndX - touchStartX;
            const deltaY = touchEndY - touchStartY;
            
            // Yalnız üfüqi swipe olsa
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    // Sağa swipe - əvvəlki şəkil
                    showPrevImage();
                } else {
                    // Sola swipe - növbəti şəkil
                    showNextImage();
                }
            }
            
            // Aşağı swipe - modal bağla
            if (deltaY > 100 && Math.abs(deltaX) < 50) {
                closeImageModal();
            }
        }, { passive: true });
    }
    
    // Şəkil yüklənmə xətası
    if (imageModalImg) {
        imageModalImg.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="sans-serif" font-size="18"%3EŞəkil yüklənmədi%3C/text%3E%3C/svg%3E';
        });
    }
}

// ============================================
// ADD LOADING STATE
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Remove any loading spinners if present
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }
});
