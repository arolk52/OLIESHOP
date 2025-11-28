// Global State
let products = [];
let cart = [];
let orders = [];
let wishlist = [];
let reviews = [];
let coupons = [];
let notifications = [];
let supportTickets = [];
let referralCodes = [];
let inventory_logs = [];
let marketingEmails = [];
let client_segments = {};
let admin_users = [];
let activity_logs = [];
let app_settings = {};

let currentUser = null;
let currentLanguage = 'fr';
let currentTheme = 'light';
let adminPassword = 'admin123';
let freeShippingThreshold = 20000;
let currentFilter = 'all';
let verificationCode = null;
let tempPhone = null;
let chatMessageCount = 0;
let adminPanelOpen = false;
let ordersSortNewest = true;
let appliedCoupon = null;
let appliedReferral = null;

// Translations
const translations = {
    fr: {
        'search-placeholder': 'Chercher un produit...',
        'search-button': 'Rechercher',
        'search-no-results': 'Aucun produit trouvé',
        'recommended-title': 'Produits recommandés',
        'nav-wishlist': '❤️ Favoris',
        'nav-support': '💬 Support',
        'nav-all': 'Tout',
        'nav-vetements': 'Vêtements',
        'nav-accessoires': 'Accessoires',
        'nav-parfums': 'Parfums',
        'nav-bijoux': 'Bijoux',
        'nav-promotions': 'Promotions',
        'nav-precommandes': 'Précommandes',
        'nav-orders': 'Mes commandes',
        'nav-account': 'Compte',
        'nav-admin': '🔐 Admin',
        'cart-title': 'Mon Panier',
        'cart-checkout': 'Commander',
        'cart-empty': 'Votre panier est vide',
        'cart-subtotal': 'Sous-total',
        'cart-shipping': 'Livraison',
        'cart-free': 'GRATUITE',
        'cart-total': 'Total',
        'checkout-title': 'Finaliser la commande',
        'checkout-name': 'Nom complet *',
        'checkout-phone': 'Téléphone *',
        'checkout-email': 'Email (optionnel)',
        'checkout-address': 'Adresse de livraison *',
        'checkout-payment': 'Mode de paiement *',
        'checkout-confirm': 'Confirmer la commande',
        'payment-cash': 'Espèces à la livraison',
        'btn-cancel': 'Annuler',
        'btn-ok': 'OK',
        'btn-login': 'Se connecter',
        'orders-title': 'Mes Commandes',
        'orders-login': 'Veuillez vous connecter pour voir vos commandes',
        'login-title': 'Connexion',
        'login-phone': 'Numéro de téléphone',
        'login-send-code': 'Envoyer le code',
        'login-code': 'Code de vérification',
        'login-verify': 'Vérifier',
        'login-resend': 'Renvoyer le code',
        'account-title': 'Mon Compte',
        'account-phone': 'Numéro de téléphone',
        'account-logout': 'Déconnexion',
        'admin-title': 'Panneau Administrateur',
        'success-title': '✅ Succès!',
        'chat-title': 'Chat Support',
        'chat-welcome': 'Bonjour! Comment puis-je vous aider?',
        'chat-placeholder': 'Écrivez...',
        'chat-send': 'Envoyer',
        'footer-copyright': '© 2025 OLIESHOP. Tous droits réservés.',
        'product-add': 'Ajouter au panier',
        'product-size': 'Taille',
        'product-quantity': 'Quantité',
        'product-stock': 'En stock',
        'product-out-stock': 'Rupture de stock',
        'product-preorder': 'Précommande',
        'product-exchangeable': 'Échangeable',
        'order-status-pending': 'En attente',
        'order-status-confirmed': 'Confirmée',
        'order-status-preparing': 'En préparation',
        'order-status-ready': 'Prête',
        'order-status-delivered': 'Livrée'
    },
    en: {
        'search-placeholder': 'Search for a product...',
        'search-button': 'Search',
        'search-no-results': 'No products found',
        'recommended-title': 'Recommended products',
        'nav-wishlist': '❤️ Favorites',
        'nav-support': '💬 Support',
        'nav-all': 'All',
        'nav-vetements': 'Clothing',
        'nav-accessoires': 'Accessories',
        'nav-parfums': 'Perfumes',
        'nav-bijoux': 'Jewelry',
        'nav-promotions': 'Promotions',
        'nav-precommandes': 'Pre-orders',
        'nav-orders': 'My Orders',
        'nav-account': 'Account',
        'nav-admin': '🔐 Admin',
        'cart-title': 'My Cart',
        'cart-checkout': 'Checkout',
        'cart-empty': 'Your cart is empty',
        'cart-subtotal': 'Subtotal',
        'cart-shipping': 'Shipping',
        'cart-free': 'FREE',
        'cart-total': 'Total',
        'checkout-title': 'Checkout',
        'checkout-name': 'Full Name *',
        'checkout-phone': 'Phone *',
        'checkout-email': 'Email (optional)',
        'checkout-address': 'Delivery Address *',
        'checkout-payment': 'Payment Method *',
        'checkout-confirm': 'Confirm Order',
        'payment-cash': 'Cash on Delivery',
        'btn-cancel': 'Cancel',
        'btn-ok': 'OK',
        'btn-login': 'Login',
        'orders-title': 'My Orders',
        'orders-login': 'Please login to see your orders',
        'login-title': 'Login',
        'login-phone': 'Phone Number',
        'login-send-code': 'Send Code',
        'login-code': 'Verification Code',
        'login-verify': 'Verify',
        'login-resend': 'Resend Code',
        'account-title': 'My Account',
        'account-phone': 'Phone Number',
        'account-logout': 'Logout',
        'admin-title': 'Admin Panel',
        'success-title': '✅ Success!',
        'chat-title': 'Chat Support',
        'chat-welcome': 'Hello! How can I help you?',
        'chat-placeholder': 'Type...',
        'chat-send': 'Send',
        'footer-copyright': '© 2025 OLIESHOP. All rights reserved.',
        'product-add': 'Add to Cart',
        'product-size': 'Size',
        'product-quantity': 'Quantity',
        'product-stock': 'In Stock',
        'product-out-stock': 'Out of Stock',
        'product-preorder': 'Pre-order',
        'product-exchangeable': 'Exchangeable',
        'order-status-pending': 'Pending',
        'order-status-confirmed': 'Confirmed',
        'order-status-preparing': 'Preparing',
        'order-status-ready': 'Ready',
        'order-status-delivered': 'Delivered'
    }
};

// Initialize
function init() {
    // Load all premium data sets
    loadPremiumData();
    console.log('🚀 Initializing OLIESHOP...');
    loadFromStorage();
    initializeProducts();
    renderProducts();
    updateCartBadge();
    updateAccountButton();
    translatePage();
    console.log('✅ OLIESHOP initialized successfully');
}

// Initialize Products
function initializeProducts() {
    if (products.length === 0) {
        products = [
            {
                id: 1,
                emoji: '👗',
                name_fr: 'Robe élégante',
                name_en: 'Elegant Dress',
                category: 'vetements',
                price: 25000,
                discount: 0,
                stock: 10,
                preorder: false,
                exchangeable: true,
                sizes: ['S', 'M', 'L', 'XL'],
                description_fr: 'Belle robe élégante pour toutes occasions',
                description_en: 'Beautiful elegant dress for all occasions',
                images: [
                    'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
                    'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400',
                    'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400'
                ],
                rating: 4.5,
                review_count: 12,
                colors: [
                    { name: 'Noir', hex: '#000000', available: true },
                    { name: 'Blanc', hex: '#FFFFFF', available: true },
                    { name: 'Rouge', hex: '#E30613', available: false },
                    { name: 'Bleu', hex: '#0066FF', available: true }
                ]
            },
            {
                id: 2,
                emoji: '👔',
                name_fr: 'Chemise homme',
                name_en: "Men's Shirt",
                category: 'vetements',
                price: 15000,
                discount: 20,
                stock: 15,
                preorder: false,
                exchangeable: true,
                sizes: ['M', 'L', 'XL'],
                description_fr: 'Chemise homme de qualité',
                description_en: 'Quality men\'s shirt',
                images: [
                    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400',
                    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400'
                ],
                rating: 4.0,
                review_count: 8,
                colors: [
                    { name: 'Gris', hex: '#808080', available: true },
                    { name: 'Bleu marine', hex: '#000080', available: true },
                    { name: 'Blanc', hex: '#FFFFFF', available: false }
                ]
            },
            {
                id: 3,
                emoji: '🎁',
                name_fr: 'Parfum luxe',
                name_en: 'Luxury Perfume',
                category: 'parfums',
                price: 35000,
                discount: 15,
                stock: 8,
                preorder: false,
                exchangeable: false,
                description_fr: 'Parfum de luxe',
                description_en: 'Luxury perfume',
                images: [
                    'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
                    'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400'
                ],
                rating: 5.0,
                review_count: 15,
                colors: [
                    { name: 'Or', hex: '#FFD700', available: true },
                    { name: 'Argent', hex: '#C0C0C0', available: true }
                ]
            },
            {
                id: 4,
                emoji: '💨',
                name_fr: 'Déodorant',
                name_en: 'Deodorant',
                category: 'parfums',
                price: 3000,
                discount: 0,
                stock: 20,
                preorder: false,
                exchangeable: false,
                description_fr: 'Déodorant fraîcheur',
                description_en: 'Fresh deodorant',
                images: [
                    'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400'
                ],
                rating: 3.5,
                review_count: 5,
                colors: [
                    { name: 'Bleu', hex: '#0066FF', available: true }
                ]
            },
            {
                id: 5,
                emoji: '⌚',
                name_fr: 'Montre classique',
                name_en: 'Classic Watch',
                category: 'accessoires',
                price: 45000,
                discount: 0,
                stock: 5,
                preorder: false,
                exchangeable: true,
                description_fr: 'Montre classique élégante',
                description_en: 'Elegant classic watch',
                images: [
                    'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400',
                    'https://images.unsplash.com/photo-1509941943102-10c232535736?w=400'
                ],
                rating: 4.8,
                review_count: 20,
                colors: [
                    { name: 'Or rose', hex: '#B76E79', available: true },
                    { name: 'Argent', hex: '#C0C0C0', available: true },
                    { name: 'Noir', hex: '#000000', available: true },
                    { name: 'Bronze', hex: '#CD7F32', available: false }
                ]
            },
            {
                id: 6,
                emoji: '📿',
                name_fr: 'Collier doré',
                name_en: 'Golden Necklace',
                category: 'bijoux',
                price: 18000,
                discount: 0,
                stock: 12,
                preorder: false,
                exchangeable: true,
                description_fr: 'Collier doré magnifique',
                description_en: 'Beautiful golden necklace',
                images: [
                    'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400'
                ],
                rating: 4.2,
                review_count: 10,
                colors: [
                    { name: 'Or', hex: '#FFD700', available: true },
                    { name: 'Argent', hex: '#C0C0C0', available: true }
                ]
            },
            {
                id: 7,
                emoji: '💎',
                name_fr: "Boucles d'oreilles",
                name_en: 'Earrings',
                category: 'bijoux',
                price: 12000,
                discount: 0,
                stock: 0,
                preorder: true,
                exchangeable: false,
                description_fr: "Boucles d'oreilles élégantes",
                description_en: 'Elegant earrings',
                images: [
                    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400'
                ],
                rating: 4.6,
                review_count: 18,
                colors: [
                    { name: 'Cristal', hex: '#E6E6FA', available: true },
                    { name: 'Rose', hex: '#FFB6C1', available: false }
                ]
            },
            {
                id: 8,
                emoji: '👜',
                name_fr: 'Sac à main',
                name_en: 'Handbag',
                category: 'accessoires',
                price: 30000,
                discount: 10,
                stock: 6,
                preorder: false,
                exchangeable: true,
                description_fr: 'Sac à main tendance',
                description_en: 'Trendy handbag',
                images: [
                    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400',
                    'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400'
                ],
                rating: 4.3,
                review_count: 14,
                colors: [
                    { name: 'Noir', hex: '#000000', available: true },
                    { name: 'Marron', hex: '#8B4513', available: true },
                    { name: 'Beige', hex: '#F5F5DC', available: false }
                ]
            },
            {
                id: 9,
                emoji: '👟',
                name_fr: 'Chaussures sport',
                name_en: 'Sport Shoes',
                category: 'vetements',
                price: 28000,
                discount: 25,
                stock: 9,
                preorder: false,
                exchangeable: true,
                sizes: ['38', '39', '40', '41', '42'],
                description_fr: 'Chaussures de sport confortables',
                description_en: 'Comfortable sport shoes',
                images: [
                    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
                    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400'
                ],
                rating: 4.7,
                review_count: 22,
                colors: [
                    { name: 'Noir', hex: '#000000', available: true },
                    { name: 'Blanc', hex: '#FFFFFF', available: true },
                    { name: 'Gris', hex: '#808080', available: true },
                    { name: 'Rouge', hex: '#FF0000', available: false }
                ]
            }
        ];
        saveToStorage();
    }
}

// Render Products
function renderProducts() {
    if (!products || products.length === 0) return;
    const searchValue = document.getElementById('search-input') ? document.getElementById('search-input').value.toLowerCase() : '';

    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    let filteredProducts = products;
    // Search
    if (searchValue) {
        filteredProducts = filteredProducts.filter(p => (p.name_fr + ' ' + p.name_en).toLowerCase().includes(searchValue));
    }

    if (currentFilter === 'promotions') {
        filteredProducts = filteredProducts.filter(p => p.discount > 0);
    } else if (currentFilter === 'precommandes') {
        filteredProducts = filteredProducts.filter(p => p.preorder);
    } else if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(p => p.category === currentFilter);
    }
    // Allow for future advanced filters here

    filteredProducts.forEach(product => {
        const productName = currentLanguage === 'fr' ? product.name_fr : product.name_en;
        const finalPrice = product.price * (1 - product.discount / 100);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let badges = '';
        if (product.discount > 0) {
            badges += `<div class="product-discount">-${product.discount}%</div>`;
        }
        if (product.preorder) {
            badges += `<div class="product-preorder" data-translate="product-preorder">Précommande</div>`;
        }
        
        // Colors HTML
        let colorsHTML = '';
        if (product.colors && product.colors.length > 0) {
            colorsHTML = `<div class="color-bar">
                <div class="colors-available">
                    ${product.colors.map(color => `
                        <span class="color-dot" 
                              style="background: ${color.hex}; ${color.hex === '#FFFFFF' ? 'border-color: #ccc;' : ''}" 
                              data-available="${color.available}"
                              title="${color.name}"></span>
                    `).join('')}
                </div>
            </div>`;
        }
        
        card.innerHTML = `
            ${badges}
            <div class="product-image-container" onclick="showProductDetail(${product.id})">
                <img src="${product.images[0]}" alt="${productName}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22 font-size=%2250%22%3E${product.emoji}%3C/text%3E%3C/svg%3E'">
                <button class="wishlist-heart ${isFavorited(product.id) ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    <svg viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </button>
            </div>
            ${colorsHTML}
            <div class="product-info" onclick="showProductDetail(${product.id})">
                <div class="product-name"><span class="product-emoji">${product.emoji}</span>${productName}</div>
                ${product.rating ? `<div class="product-rating">⭐ ${product.rating} (${product.review_count || 0})</div>` : ''}
                <div class="product-price">${formatPrice(finalPrice)}</div>
                ${product.discount > 0 ? `<div style="text-decoration: line-through; color: #999; font-size: 0.85em;">${formatPrice(product.price)}</div>` : ''}
                <div class="product-stock">${product.stock > 0 ? (currentLanguage === 'fr' ? `${product.stock} en stock` : `${product.stock} in stock`) : (currentLanguage === 'fr' ? 'Rupture de stock' : 'Out of stock')}</div>
            </div>
        `;
        
        grid.appendChild(card);
    });
    
    translatePage();
}

// Show Product Detail with Enhanced Modal
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const productName = currentLanguage === 'fr' ? product.name_fr : product.name_en;
    const productDesc = currentLanguage === 'fr' ? (product.description_fr || 'Description non disponible') : (product.description_en || 'Description not available');
    const finalPrice = product.price * (1 - product.discount / 100);
    
    // Get recommended products
    const recommended = getRecommendedProducts(productId);
    
    const detail = document.getElementById('product-detail');
    detail.innerHTML = `
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
            <!-- Left Column: Image Gallery -->
            <div style="flex: 1; min-width: 300px;">
                <div style="position: relative; width: 100%; max-width: 500px; margin: 0 auto;">
                    <img id="main-product-image" src="${product.images && product.images[0] ? product.images[0] : ''}" 
                         style="width: 100%; height: 400px; object-fit: cover; border-radius: 12px; cursor: zoom-in;"
                         onmouseover="this.style.transform='scale(1.05)'"
                         onmouseout="this.style.transform='scale(1)'">
                </div>
                
                ${product.images && product.images.length > 1 ? `
                    <div style="display: flex; gap: 8px; margin-top: 15px; overflow-x: auto; padding: 5px;">
                        ${product.images.map((img, idx) => `
                            <img src="${img}" 
                                 onclick="changeMainImage('${img}', this)"
                                 class="thumbnail-img"
                                 style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; cursor: pointer; border: 3px solid ${idx === 0 ? '#00A651' : '#ddd'}; transition: all 0.2s;"
                                 onmouseover="this.style.borderColor='#00A651'"
                                 onmouseout="if(!this.classList.contains('active')) this.style.borderColor='#ddd'">
                        `).join('')}
                    </div>
                ` : ''}
            </div>
            
            <!-- Right Column: Product Info -->
            <div style="flex: 1; min-width: 300px;">
                <h2 style="margin: 0 0 10px 0;">${product.emoji} ${productName}</h2>
                
                ${product.rating ? `
                    <div style="margin-bottom: 15px; color: #666;">
                        ${'⭐'.repeat(Math.round(product.rating))} ${product.rating} (${product.review_count || 0} ${currentLanguage === 'fr' ? 'avis' : 'reviews'})
                    </div>
                ` : ''}
                
                <!-- Colors -->
                ${product.colors && product.colors.length > 0 ? `
                    <div style="margin-bottom: 20px;">
                        <label style="font-weight: bold; display: block; margin-bottom: 10px;">${currentLanguage === 'fr' ? 'Couleur:' : 'Color:'}</label>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${product.colors.map(color => `
                                <div style="position: relative;">
                                    <div style="width: 40px; height: 40px; background: ${color.hex}; border: 2px solid #ddd; border-radius: 6px; cursor: ${color.available ? 'pointer' : 'not-allowed'}; opacity: ${color.available ? '1' : '0.5'}; ${color.hex === '#FFFFFF' ? 'box-shadow: inset 0 0 0 1px #ccc;' : ''}" title="${color.name}"></div>
                                    ${!color.available ? '<div style="position: absolute; top: 50%; left: 0; right: 0; height: 2px; background: #000; transform: rotate(-45deg);"></div>' : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Sizes -->
                ${product.sizes ? `
                    <div class="form-group" style="margin-bottom: 20px;">
                        <label style="font-weight: bold;" data-translate="product-size">${currentLanguage === 'fr' ? 'Taille:' : 'Size:'}</label>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px;">
                            ${product.sizes.map(size => `
                                <button onclick="selectSize(this, '${size}')" 
                                        class="size-btn"
                                        style="padding: 10px 15px; border: 2px solid #ddd; background: white; border-radius: 6px; cursor: pointer; transition: all 0.2s;"
                                        onmouseover="if(!this.classList.contains('selected')) this.style.borderColor='#00A651'"
                                        onmouseout="if(!this.classList.contains('selected')) this.style.borderColor='#ddd'">
                                    ${size}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Price -->
                <div style="background: #f9f9f9; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    ${product.discount > 0 ? `
                        <div style="text-decoration: line-through; color: #999; font-size: 14px;">UVP ${formatPrice(product.price)}</div>
                        <div style="color: #E30613; font-weight: bold; margin: 5px 0;">-${product.discount}% ${currentLanguage === 'fr' ? 'réduction' : 'discount'}</div>
                    ` : ''}
                    <div style="font-size: 32px; font-weight: bold; color: #E30613;">${formatPrice(finalPrice)}</div>
                    <div style="font-size: 12px; color: #999; margin-top: 5px;">${currentLanguage === 'fr' ? 'TVA incluse' : 'VAT included'}</div>
                </div>
                
                <!-- Stock & Shipping -->
                <div style="margin-bottom: 20px; font-size: 14px; color: #666;">
                    ${product.stock > 0 ? `
                        <div style="margin-bottom: 8px;">✓ ${currentLanguage === 'fr' ? 'Livrée en 1-2 jours' : 'Delivered in 1-2 days'}</div>
                        <div>✓ ${currentLanguage === 'fr' ? 'Livraison gratuite dès ' + formatPrice(freeShippingThreshold) : 'Free shipping from ' + formatPrice(freeShippingThreshold)}</div>
                    ` : `
                        <div style="color: var(--cameroon-red);" data-translate="product-out-stock">${currentLanguage === 'fr' ? 'Rupture de stock' : 'Out of stock'}</div>
                    `}
                    ${product.preorder ? `<div style="color: var(--cameroon-yellow); margin-top: 8px;" data-translate="product-preorder">${currentLanguage === 'fr' ? 'Précommande disponible' : 'Pre-order available'}</div>` : ''}
                </div>
                
                <!-- Quantity -->
                <div class="form-group" style="margin-bottom: 15px;">
                    <label style="font-weight: bold;" data-translate="product-quantity">${currentLanguage === 'fr' ? 'Quantité:' : 'Quantity:'}</label>
                    <input type="number" id="product-quantity" class="form-control" value="1" min="1" max="${product.stock || 999}" style="width: 100px; margin-top: 8px;">
                </div>
                
                <!-- Action Buttons -->
                <button class="btn" onclick="addToCart(${product.id})" 
                        ${product.stock === 0 && !product.preorder ? 'disabled' : ''}
                        style="width: 100%; padding: 15px; font-size: 16px; margin-bottom: 10px;">
                    🛒 ${currentLanguage === 'fr' ? 'AJOUTER AU PANIER' : 'ADD TO CART'}
                </button>
                <button class="btn btn-secondary" onclick="toggleWishlistFromModal(${product.id})" 
                        style="width: 100%; padding: 15px; font-size: 16px;">
                    ${isFavorited(product.id) ? '❤️' : '🤍'} ${currentLanguage === 'fr' ? 'AJOUTER AUX FAVORIS' : 'ADD TO FAVORITES'}
                </button>
                
                <!-- Description -->
                ${productDesc ? `
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                        <h3 style="font-size: 18px; margin-bottom: 10px;">${currentLanguage === 'fr' ? 'Description' : 'Description'}</h3>
                        <p style="color: #666; line-height: 1.6;">${productDesc}</p>
                    </div>
                ` : ''}
            </div>
        </div>
        
        <!-- Recommended Products Section -->
        ${recommended.length > 0 ? `
            <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #eee;">
                <h3 style="margin-bottom: 20px;" data-translate="recommended-title">${currentLanguage === 'fr' ? 'Produits recommandés' : 'Recommended products'}</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 20px;">
                    ${recommended.map(rec => {
                        const recName = currentLanguage === 'fr' ? rec.name_fr : rec.name_en;
                        const recFinalPrice = rec.price * (1 - rec.discount / 100);
                        return `
                            <div onclick="showProductDetail(${rec.id})" style="cursor: pointer; background: white; border: 1px solid #eee; border-radius: 12px; overflow: hidden; transition: transform 0.2s;"
                                 onmouseover="this.style.transform='translateY(-5px)'"
                                 onmouseout="this.style.transform='translateY(0)'">
                                <div style="position: relative; width: 100%; height: 200px; background: #f5f5f5;">
                                    <img src="${rec.images && rec.images[0] ? rec.images[0] : ''}" 
                                         style="width: 100%; height: 100%; object-fit: cover;">
                                    ${rec.discount > 0 ? `<div style="position: absolute; top: 10px; right: 10px; background: var(--cameroon-red); color: white; padding: 5px 10px; border-radius: 8px; font-size: 12px;">-${rec.discount}%</div>` : ''}
                                </div>
                                <div style="padding: 15px;">
                                    <div style="font-weight: bold; margin-bottom: 5px;">${rec.emoji} ${recName}</div>
                                    ${rec.rating ? `<div style="font-size: 12px; color: #666; margin-bottom: 5px;">⭐ ${rec.rating} (${rec.review_count || 0})</div>` : ''}
                                    <div style="font-weight: bold; color: var(--cameroon-green);">
                                        ${formatPrice(recFinalPrice)}
                                        ${rec.discount > 0 ? `<span style="text-decoration: line-through; color: #999; font-size: 0.8em; margin-left: 5px;">${formatPrice(rec.price)}</span>` : ''}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    // Auto-select first size if available
    if (product.sizes && product.sizes.length > 0) {
        setTimeout(() => {
            const firstSizeBtn = document.querySelector('.size-btn');
            if (firstSizeBtn) selectSize(firstSizeBtn, product.sizes[0]);
        }, 100);
    }
    
    // Set first thumbnail as active
    setTimeout(() => {
        const firstThumb = document.querySelector('.thumbnail-img');
        if (firstThumb) firstThumb.classList.add('active');
    }, 100);
    
    document.getElementById('product-modal').style.display = 'block';
    translatePage();
}

// Helper function to change main image
function changeMainImage(imgSrc, thumbnailElement) {
    const mainImg = document.getElementById('main-product-image');
    if (mainImg) {
        mainImg.src = imgSrc;
    }
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail-img').forEach(thumb => {
        thumb.style.borderColor = '#ddd';
        thumb.classList.remove('active');
    });
    if (thumbnailElement) {
        thumbnailElement.style.borderColor = '#00A651';
        thumbnailElement.classList.add('active');
    }
}

// Helper function to select size
function selectSize(buttonElement, size) {
    // Store selected size in hidden input or data attribute
    const sizeInput = document.getElementById('product-size');
    if (sizeInput) {
        sizeInput.value = size;
    } else {
        // Create hidden input if doesn't exist
        const input = document.createElement('input');
        input.type = 'hidden';
        input.id = 'product-size';
        input.value = size;
        document.getElementById('product-detail').appendChild(input);
    }
    
    // Update button styles
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.style.borderColor = '#ddd';
        btn.style.background = 'white';
        btn.classList.remove('selected');
    });
    if (buttonElement) {
        buttonElement.style.borderColor = '#00A651';
        buttonElement.style.background = '#f0f9f4';
        buttonElement.classList.add('selected');
    }
}

// Get recommended products
function getRecommendedProducts(currentProductId) {
    const current = products.find(p => p.id === currentProductId);
    if (!current) return [];
    
    // Get products from same category or with high ratings
    let recommended = products.filter(p => 
        p.id !== currentProductId && 
        (p.category === current.category || (p.rating && p.rating >= 4))
    );
    
    // Sort by rating and limit to 4
    return recommended
        .sort((a, b) => (b.rating || 0) - (a.rating || 0))
        .slice(0, 4);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const quantity = parseInt(document.getElementById('product-quantity').value) || 1;
    
    // Check stock availability
    if (!product.preorder && product.stock < quantity) {
        alert(currentLanguage === 'fr' ? `Stock insuffisant! Seulement ${product.stock} disponible(s).` : `Insufficient stock! Only ${product.stock} available.`);
        return;
    }
    
    let size = null;
    if (product.sizes) {
        size = document.getElementById('product-size').value;
    }
    
    const existingItem = cart.find(item => item.productId === productId && item.size === size);
    
    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (!product.preorder && product.stock < newQuantity) {
            alert(currentLanguage === 'fr' ? `Stock insuffisant! Maximum ${product.stock} disponible(s).` : `Insufficient stock! Maximum ${product.stock} available.`);
            return;
        }
        existingItem.quantity = newQuantity;
    } else {
        cart.push({
            productId: productId,
            quantity: quantity,
            size: size
        });
    }
    
    saveToStorage();
    updateCartBadge();
    closeModal('product-modal');
    
    // Show cart panel after adding product (it will stay open)
    showCart();
    
    // Show brief success message
    console.log('✅ Product added to cart');
    setTimeout(() => {
        const successMsg = currentLanguage === 'fr' ? 'Produit ajouté ✓' : 'Product added ✓';
        console.log(successMsg);
    }, 100);
}

// Show Cart
function showCart() {
    const cartItems = document.getElementById('cart-items');
    const cartSummary = document.getElementById('cart-summary');
    
    // Cart stays open until user closes it manually
    if (cart.length === 0) {
        cartItems.innerHTML = `<p data-translate="cart-empty">Votre panier est vide</p>`;
        cartSummary.innerHTML = '';
    } else {
        let html = '';
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            const product = products.find(p => p.id === item.productId);
            if (product) {
                const productName = currentLanguage === 'fr' ? product.name_fr : product.name_en;
                const finalPrice = product.price * (1 - product.discount / 100);
                const itemTotal = finalPrice * item.quantity;
                subtotal += itemTotal;
                
                html += `
                    <div class="cart-item">
                        <div class="cart-item-emoji">${product.emoji}</div>
                        <div class="cart-item-details">
                            <div><strong>${productName}</strong></div>
                            ${item.size ? `<div style="font-size: 0.9em; color: #666;">${currentLanguage === 'fr' ? 'Taille' : 'Size'}: ${item.size}</div>` : ''}
                            <div style="font-size: 0.9em; color: #666;">${currentLanguage === 'fr' ? 'Quantité' : 'Quantity'}: ${item.quantity}</div>
                            <div style="font-weight: bold; color: var(--cameroon-green);">${formatPrice(itemTotal)}</div>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart(${index})">✕</button>
                    </div>
                `;
            }
        });
        
        cartItems.innerHTML = html;
        
        const shipping = subtotal >= freeShippingThreshold ? 0 : 2000;
        const total = subtotal + shipping;
        
        cartSummary.innerHTML = `
            <div style="padding: 15px; background-color: var(--bg-color); border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span data-translate="cart-subtotal">Sous-total:</span>
                    <strong>${formatPrice(subtotal)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span data-translate="cart-shipping">Livraison:</span>
                    <strong>${shipping === 0 ? `<span style="color: var(--cameroon-green);" data-translate="cart-free">GRATUITE</span>` : formatPrice(shipping)}</strong>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 1.2em; padding-top: 10px; border-top: 2px solid var(--border-color);">
                    <span data-translate="cart-total">Total:</span>
                    <strong style="color: var(--cameroon-green);">${formatPrice(total)}</strong>
                </div>
                ${shipping > 0 ? `<div style="margin-top: 10px; font-size: 0.85em; color: #666; text-align: center;">${currentLanguage === 'fr' ? `Livraison gratuite dès ${formatPrice(freeShippingThreshold)}` : `Free shipping from ${formatPrice(freeShippingThreshold)}`}</div>` : ''}
            </div>
        `;
    }
    
    openPanel('cart-panel');
    translatePage();
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveToStorage();
    updateCartBadge();
    showCart();
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        alert(currentLanguage === 'fr' ? 'Votre panier est vide!' : 'Your cart is empty!');
        return;
    }
    
    if (!currentUser) {
        closePanel('cart-panel');
        showLogin();
        return;
    }
    
    document.getElementById('checkout-phone').value = currentUser.phone;
    closePanel('cart-panel');
    openPanel('checkout-panel');
}

// Submit Order
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('checkout-name').value;
    const phone = document.getElementById('checkout-phone').value;
    const email = document.getElementById('checkout-email').value;
    const address = document.getElementById('checkout-address').value;
    const payment = document.getElementById('checkout-payment').value;
    
    // Calculate total
    let subtotal = 0;
    const orderItems = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        const finalPrice = product.price * (1 - product.discount / 100);
        subtotal += finalPrice * item.quantity;
        return {
            productId: item.productId,
            productName: currentLanguage === 'fr' ? product.name_fr : product.name_en,
            productEmoji: product.emoji,
            quantity: item.quantity,
            size: item.size,
            price: finalPrice
        };
    });
    
    const shipping = subtotal >= freeShippingThreshold ? 0 : 2000;
    const total = subtotal + shipping;
    
    // Create order
    const order = {
        id: Date.now(),
        customerName: name,
        customerPhone: phone,
        customerEmail: email,
        deliveryAddress: address,
        paymentMethod: payment,
        items: orderItems,
        subtotal: subtotal,
        shipping: shipping,
        total: total,
        status: 'pending',
        date: new Date().toISOString(),
        timeline: [
            { status: 'pending', date: new Date().toISOString(), active: true },
            { status: 'confirmed', active: false },
            { status: 'preparing', active: false },
            { status: 'ready', active: false },
            { status: 'delivered', active: false }
        ]
    };
    
    orders.push(order);
    
    // Update stock
    cart.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product && !product.preorder) {
            product.stock -= item.quantity;
        }
    });
    
    // Clear cart
    cart = [];
    
    saveToStorage();
    updateCartBadge();
    closePanel('checkout-panel');
    showSuccess(currentLanguage === 'fr' ? `Commande confirmée! Numéro: ${order.id}` : `Order confirmed! Number: ${order.id}`);
    
    // Reset form
    document.getElementById('checkout-form').reset();
});

// Show Orders
function showOrders() {
    if (!currentUser) {
        const ordersContent = document.getElementById('orders-content');
        ordersContent.innerHTML = `
            <p data-translate="orders-login">Veuillez vous connecter pour voir vos commandes</p>
            <button class="btn" onclick="showLogin()" data-translate="btn-login">Se connecter</button>
        `;
        openPanel('orders-panel');
        translatePage();
        return;
    }
    
    const userOrders = orders.filter(o => o.customerPhone === currentUser.phone);
    const ordersContent = document.getElementById('orders-content');
    
    if (userOrders.length === 0) {
        ordersContent.innerHTML = `<p>${currentLanguage === 'fr' ? 'Aucune commande' : 'No orders'}</p>`;
    } else {
        let html = '';
        userOrders.reverse().forEach(order => {
            const statusLabels = {
                pending: currentLanguage === 'fr' ? 'En attente' : 'Pending',
                confirmed: currentLanguage === 'fr' ? 'Confirmée' : 'Confirmed',
                preparing: currentLanguage === 'fr' ? 'En préparation' : 'Preparing',
                ready: currentLanguage === 'fr' ? 'Prête' : 'Ready',
                delivered: currentLanguage === 'fr' ? 'Livrée' : 'Delivered'
            };
            
            html += `
                <div class="admin-product" style="margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <strong>${currentLanguage === 'fr' ? 'Commande' : 'Order'} #${order.id}</strong>
                        <span style="background-color: var(--cameroon-green); color: white; padding: 5px 10px; border-radius: 5px; font-size: 0.85em;">${statusLabels[order.status]}</span>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <div style="font-size: 0.9em; color: #666;">${new Date(order.date).toLocaleDateString()}</div>
                        <div style="font-weight: bold; color: var(--cameroon-green); margin-top: 5px;">${currentLanguage === 'fr' ? 'Total' : 'Total'}: ${formatPrice(order.total)}</div>
                    </div>
                    <div style="margin: 15px 0;">
                        ${order.items.map(item => `
                            <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 5px;">
                                <span style="font-size: 1.5em;">${item.productEmoji}</span>
                                <span>${item.productName} ${item.size ? `(${item.size})` : ''} × ${item.quantity}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div class="timeline" style="margin: 15px 0;">
                        ${order.timeline.map(t => `
                            <div class="timeline-item ${t.active ? 'active' : ''}">
                                <strong>${statusLabels[t.status]}</strong>
                                ${t.date ? `<div style="font-size: 0.8em; color: #666;">${new Date(t.date).toLocaleString()}</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                    ${order.status === 'pending' ? `
                        <button class="btn btn-danger" onclick="cancelOrder(${order.id})">${currentLanguage === 'fr' ? 'Annuler la commande' : 'Cancel Order'}</button>
                    ` : ''}
                </div>
            `;
        });
        ordersContent.innerHTML = html;
    }
    
    openPanel('orders-panel');
}

// Cancel Order
function cancelOrder(orderId) {
    if (!confirm(currentLanguage === 'fr' ? 'Voulez-vous vraiment annuler cette commande?' : 'Do you really want to cancel this order?')) {
        return;
    }
    
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex !== -1) {
        const order = orders[orderIndex];
        
        // Restore stock
        order.items.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            if (product) {
                product.stock += item.quantity;
            }
        });
        
        orders.splice(orderIndex, 1);
        saveToStorage();
        showOrders();
        showSuccess(currentLanguage === 'fr' ? 'Commande annulée' : 'Order cancelled');
    }
}

// Login Functions
function showLogin() {
    document.getElementById('login-step1').classList.remove('hidden');
    document.getElementById('login-step2').classList.add('hidden');
    openPanel('login-panel');
}

function sendVerificationCode() {
    const phone = document.getElementById('login-phone').value;
    if (!phone) {
        alert(currentLanguage === 'fr' ? 'Veuillez entrer votre numéro' : 'Please enter your phone number');
        return;
    }
    
    tempPhone = phone;
    verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
    
    console.log('📱 Code de vérification:', verificationCode);
    alert(currentLanguage === 'fr' ? `Code de vérification: ${verificationCode}` : `Verification code: ${verificationCode}`);
    
    document.getElementById('login-step1').classList.add('hidden');
    document.getElementById('login-step2').classList.remove('hidden');
}

function resendCode() {
    sendVerificationCode();
}

function verifyCode() {
    const code = document.getElementById('verification-code').value;
    
    if (code === verificationCode) {
        currentUser = { phone: tempPhone };
        saveToStorage();
        updateAccountButton();
        closePanel('login-panel');
        showSuccess(currentLanguage === 'fr' ? 'Connexion réussie!' : 'Login successful!');
        
        // Reset
        document.getElementById('login-phone').value = '';
        document.getElementById('verification-code').value = '';
        verificationCode = null;
        tempPhone = null;
    } else {
        alert(currentLanguage === 'fr' ? 'Code incorrect' : 'Incorrect code');
    }
}

// Account Functions
function showAccount() {
    if (!currentUser) {
        showLogin();
        return;
    }
    
    document.getElementById('account-phone').value = currentUser.phone;
    openPanel('account-panel');
}

function logout() {
    if (confirm(currentLanguage === 'fr' ? 'Voulez-vous vraiment vous déconnecter?' : 'Do you really want to logout?')) {
        currentUser = null;
        saveToStorage();
        updateAccountButton();
        closePanel('account-panel');
        showSuccess(currentLanguage === 'fr' ? 'Déconnexion réussie' : 'Logout successful');
    }
}

function updateAccountButton() {
    const accountBtn = document.getElementById('account-btn');
    if (currentUser) {
        accountBtn.style.display = 'block';
    } else {
        accountBtn.style.display = 'none';
    }
}

// Admin Panel
function showAdminPanel() {
    console.log('🔐 Admin clicked');
    
    const password = prompt(currentLanguage === 'fr' ? 'Mot de passe administrateur:' : 'Admin password:');
    console.log('🔑 Password prompt shown');
    
    if (password === null) {
        console.log('❌ Admin access cancelled');
        return;
    }
    
    if (password !== adminPassword) {
        console.log('❌ Password incorrect');
        alert(currentLanguage === 'fr' ? 'Mot de passe incorrect!' : 'Incorrect password!');
        return;
    }
    
    console.log('✅ Password correct - Admin panel will stay open');
    console.log('🎨 Admin panel rendering...');
    
    adminPanelOpen = true;
    renderAdminPanel();
    
    console.log('📂 Opening admin panel...');
    openPanel('admin-panel');
    console.log('✅ Admin panel displayed and will persist');
    console.log('Admin panel should stay open');
}

function renderAdminPanel() {
    console.log('Admin panel rendering...');
    const adminContent = document.getElementById('admin-content');
    
    // Calculate analytics
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    const totalOrders = orders.length;
    const totalClients = [...new Set(orders.map(o => o.customerPhone))].length;
    const totalProducts = products.length;
    const productsInStock = products.filter(p => p.stock > 0).length;
    const productsOutOfStock = products.filter(p => p.stock === 0 && !p.preorder).length;
    
    // Client segmentation
    segmentClients();
    
    // Top products
    const productSales = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            productSales[item.productId] = (productSales[item.productId] || 0) + item.quantity;
        });
    });
    const topProducts = Object.entries(productSales)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([id, qty]) => {
            const prod = products.find(p => p.id == id);
            return prod ? { name: prod.name_fr, qty } : null;
        })
        .filter(Boolean);
    
    // Revenue by payment method
    const revenueByPayment = {};
    orders.forEach(o => {
        revenueByPayment[o.paymentMethod] = (revenueByPayment[o.paymentMethod] || 0) + o.total;
    });
    
    // Revenue by category
    const revenueByCategory = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            const prod = products.find(p => p.id === item.productId);
            if (prod) {
                revenueByCategory[prod.category] = (revenueByCategory[prod.category] || 0) + (item.price * item.quantity);
            }
        });
    });
    
    // Sort orders
    let sortedOrders = [...orders];
    sortedOrders.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return ordersSortNewest ? dateB - dateA : dateA - dateB;
    });
    
    let html = `
        <!-- Dashboard Analytics -->
        <div class="admin-section" style="background-color: var(--color-bg-1);">
            <h3>📊 DASHBOARD ANALYTICS</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2em;">💰</div>
                    <div style="font-size: 1.5em; font-weight: bold; color: var(--cameroon-green);">${formatPrice(totalRevenue)}</div>
                    <div>${currentLanguage === 'fr' ? 'Revenus totaux' : 'Total Revenue'}</div>
                </div>
                <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2em;">📦</div>
                    <div style="font-size: 1.5em; font-weight: bold; color: var(--cameroon-green);">${totalOrders}</div>
                    <div>${currentLanguage === 'fr' ? 'Commandes' : 'Orders'}</div>
                </div>
                <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2em;">👥</div>
                    <div style="font-size: 1.5em; font-weight: bold; color: var(--cameroon-green);">${totalClients}</div>
                    <div>${currentLanguage === 'fr' ? 'Clients' : 'Clients'}</div>
                </div>
                <div style="background: white; padding: 20px; border-radius: 8px; text-align: center;">
                    <div style="font-size: 2em;">📊</div>
                    <div style="font-size: 1.5em; font-weight: bold; color: var(--cameroon-green);">${totalProducts}</div>
                    <div>${currentLanguage === 'fr' ? 'Produits' : 'Products'}</div>
                    <div style="font-size: 0.85em; color: #666; margin-top: 5px;">${currentLanguage === 'fr' ? 'En stock' : 'In stock'}: ${productsInStock}</div>
                </div>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 20px;">
                <div style="background: white; padding: 15px; border-radius: 8px;">
                    <h4>🏆 ${currentLanguage === 'fr' ? 'Top 5 Produits' : 'Top 5 Products'}</h4>
                    ${topProducts.map((p, i) => `<div style="margin: 5px 0;">${i + 1}. ${p.name} (${p.qty} ${currentLanguage === 'fr' ? 'ventes' : 'sales'})</div>`).join('')}
                </div>
                <div style="background: white; padding: 15px; border-radius: 8px;">
                    <h4>⚠️ ${currentLanguage === 'fr' ? 'Produits en rupture' : 'Out of stock'}</h4>
                    ${productsOutOfStock === 0 ? '<p>Aucun</p>' : products.filter(p => p.stock === 0 && !p.preorder).map(p => `<div>• ${p.name_fr}</div>`).join('')}
                </div>
            </div>
        </div>
        
        <!-- Financial Reports -->
        <div class="admin-section" style="background-color: var(--color-bg-2);">
            <h3>💰 ${currentLanguage === 'fr' ? 'RAPPORTS FINANCIERS' : 'FINANCIAL REPORTS'}</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px;">
                <h4>${currentLanguage === 'fr' ? 'Revenus par mode de paiement' : 'Revenue by payment method'}</h4>
                ${Object.entries(revenueByPayment).map(([method, amount]) => {
                    const percent = totalRevenue > 0 ? ((amount / totalRevenue) * 100).toFixed(1) : 0;
                    return `<div style="margin: 8px 0; display: flex; justify-content: space-between;">
                        <span>${method === 'momo' ? 'MTN MoMo' : method === 'orange' ? 'Orange Money' : (currentLanguage === 'fr' ? 'Espèces' : 'Cash')}</span>
                        <strong>${formatPrice(amount)} (${percent}%)</strong>
                    </div>`;
                }).join('')}
            </div>
            <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px;">
                <h4>${currentLanguage === 'fr' ? 'Revenus par catégorie' : 'Revenue by category'}</h4>
                ${Object.entries(revenueByCategory).map(([cat, amount]) => {
                    const percent = totalRevenue > 0 ? ((amount / totalRevenue) * 100).toFixed(1) : 0;
                    const catName = currentLanguage === 'fr' ? 
                        (cat === 'vetements' ? 'Vêtements' : cat === 'accessoires' ? 'Accessoires' : cat === 'parfums' ? 'Parfums' : 'Bijoux') :
                        (cat === 'vetements' ? 'Clothing' : cat === 'accessoires' ? 'Accessories' : cat === 'parfums' ? 'Perfumes' : 'Jewelry');
                    return `<div style="margin: 8px 0; display: flex; justify-content: space-between;">
                        <span>${catName}</span>
                        <strong>${formatPrice(amount)} (${percent}%)</strong>
                    </div>`;
                }).join('')}
                <div style="margin-top: 10px; padding-top: 10px; border-top: 2px solid #ddd; display: flex; justify-content: space-between; font-size: 1.1em;">
                    <span><strong>${currentLanguage === 'fr' ? 'TOTAL' : 'TOTAL'}</strong></span>
                    <strong style="color: var(--cameroon-green);">${formatPrice(totalRevenue)}</strong>
                </div>
            </div>
        </div>
        
        <!-- Client Segmentation -->
        <div class="admin-section" style="background-color: var(--color-bg-3);">
            <h3>👥 ${currentLanguage === 'fr' ? 'SEGMENTATION CLIENTS' : 'CLIENT SEGMENTATION'}</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-top: 10px;">
                ${Object.entries(client_segments).map(([segment, clients]) => {
                    const labels = {
                        vip: { fr: 'VIP 👑', en: 'VIP 👑' },
                        regulars: { fr: 'Réguliers', en: 'Regulars' },
                        new: { fr: 'Nouveaux', en: 'New' },
                        dormant: { fr: 'Dormants', en: 'Dormant' },
                        at_risk: { fr: 'À risque', en: 'At Risk' },
                        inactive: { fr: 'Inactifs', en: 'Inactive' }
                    };
                    const label = labels[segment] ? labels[segment][currentLanguage] : segment;
                    return `<div style="background: white; padding: 15px; border-radius: 8px; text-align: center;">
                        <div style="font-size: 1.3em; font-weight: bold;">${clients.length}</div>
                        <div>${label}</div>
                    </div>`;
                }).join('')}
            </div>
        </div>
        
        <!-- Coupon Management -->
        <div class="admin-section" style="background-color: var(--color-bg-4);">
            <h3>🎫 ${currentLanguage === 'fr' ? 'GESTION DES CODES PROMO' : 'COUPON MANAGEMENT'}</h3>
            <button class="btn" onclick="showCreateCouponForm()" style="margin-bottom: 10px;">➕ ${currentLanguage === 'fr' ? 'Créer un code promo' : 'Create coupon'}</button>
            <div id="coupon-form-area"></div>
            <div>
                ${coupons.map(c => `<div style="background: white; padding: 10px; border-radius: 8px; margin: 5px 0; display: flex; justify-content: space-between; align-items: center;">
                    <div><strong>${c.code}</strong> - ${c.type === '%' ? c.value + '%' : formatPrice(c.value)} off | ${currentLanguage === 'fr' ? 'Utilisé' : 'Used'}: ${c.currentUses || 0}/${c.maxUses || '∞'} | ${c.active ? '✅ Actif' : '❌ Inactif'}</div>
                    <button class="btn btn-danger" onclick="deleteCoupon('${c.code}')" style="padding: 5px 10px; margin: 0;">✕</button>
                </div>`).join('')}
            </div>
        </div>
        
        <!-- Support Tickets -->
        <div class="admin-section" style="background-color: var(--color-bg-5);">
            <h3>💬 ${currentLanguage === 'fr' ? 'GESTION DES TICKETS SUPPORT' : 'SUPPORT TICKETS MANAGEMENT'}</h3>
            ${supportTickets.length === 0 ? '<p>Aucun ticket</p>' : supportTickets.map(ticket => `
                <div style="background: white; padding: 10px; border-radius: 8px; margin: 5px 0;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <strong>#${ticket.id} - ${ticket.subject}</strong>
                        <span style="background: ${ticket.status === 'open' ? 'var(--cameroon-red)' : 'var(--cameroon-green)'}; color: white; padding: 3px 8px; border-radius: 5px; font-size: 0.85em;">${ticket.status}</span>
                    </div>
                    <div style="font-size: 0.9em; color: #666;">${ticket.clientPhone} | ${new Date(ticket.createdDate).toLocaleString()}</div>
                    <div style="margin: 8px 0;">${ticket.message}</div>
                    <button class="btn btn-secondary" onclick="resolveTicket(${ticket.id})" style="padding: 5px 10px; margin: 0;">${currentLanguage === 'fr' ? 'Marquer résolu' : 'Mark resolved'}</button>
                </div>
            `).join('')}
        </div>
        
        <!-- Inventory Management -->
        <div class="admin-section" style="background-color: var(--color-bg-6);">
            <h3>📦 ${currentLanguage === 'fr' ? 'GESTION D\'INVENTAIRE AVANCÉE' : 'ADVANCED INVENTORY'}</h3>
            <table style="width: 100%; background: white; border-radius: 8px; overflow: hidden;">
                <thead style="background: var(--cameroon-green); color: white;">
                    <tr>
                        <th style="padding: 10px; text-align: left;">${currentLanguage === 'fr' ? 'Produit' : 'Product'}</th>
                        <th style="padding: 10px; text-align: center;">${currentLanguage === 'fr' ? 'Stock' : 'Stock'}</th>
                        <th style="padding: 10px; text-align: center;">${currentLanguage === 'fr' ? 'Vendus ce mois' : 'Sold this month'}</th>
                        <th style="padding: 10px; text-align: center;">${currentLanguage === 'fr' ? 'Statut' : 'Status'}</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(p => {
                        const sold = Object.entries(productSales).find(([id]) => id == p.id)?.[1] || 0;
                        const status = p.stock === 0 ? '🔴 Rupture' : p.stock < 5 ? '🟡 Stock bas' : '🟢 OK';
                        return `<tr style="border-bottom: 1px solid #eee;">
                            <td style="padding: 10px;">${p.emoji} ${p.name_fr}</td>
                            <td style="padding: 10px; text-align: center;">${p.stock}</td>
                            <td style="padding: 10px; text-align: center;">${sold}</td>
                            <td style="padding: 10px; text-align: center;">${status}</td>
                        </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
        
        <!-- Products Management -->
        <div class="admin-section">
            <h3>${currentLanguage === 'fr' ? '📦 Gestion des Produits' : '📦 Products Management'}</h3>
            <div id="admin-products-list">
                ${products.map(p => `
                    <div class="admin-product" data-product-id="${p.id}">
                        <div class="admin-product-header">
                            <div>
                                <span style="font-size: 1.5em;">${p.emoji}</span>
                                <strong>${currentLanguage === 'fr' ? p.name_fr : p.name_en}</strong>
                            </div>
                            <button class="btn btn-danger" style="padding: 5px 10px; margin: 0;" onclick="deleteProduct(${p.id})">${currentLanguage === 'fr' ? 'Supprimer' : 'Delete'}</button>
                        </div>
                        <div class="admin-product-fields">
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Icône/Emoji' : 'Icon/Emoji'}</label>
                                <input type="text" value="${p.emoji}" maxlength="2" onchange="updateProduct(${p.id}, 'emoji', this.value)">
                            </div>
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Nom FR' : 'Name FR'}</label>
                                <input type="text" value="${p.name_fr}" onchange="updateProduct(${p.id}, 'name_fr', this.value)">
                            </div>
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Nom EN' : 'Name EN'}</label>
                                <input type="text" value="${p.name_en}" onchange="updateProduct(${p.id}, 'name_en', this.value)">
                            </div>
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Catégorie' : 'Category'}</label>
                                <select onchange="updateProduct(${p.id}, 'category', this.value)">
                                    <option value="vetements" ${p.category === 'vetements' ? 'selected' : ''}>${currentLanguage === 'fr' ? 'Vêtements' : 'Clothing'}</option>
                                    <option value="accessoires" ${p.category === 'accessoires' ? 'selected' : ''}>${currentLanguage === 'fr' ? 'Accessoires' : 'Accessories'}</option>
                                    <option value="parfums" ${p.category === 'parfums' ? 'selected' : ''}>${currentLanguage === 'fr' ? 'Parfums' : 'Perfumes'}</option>
                                    <option value="bijoux" ${p.category === 'bijoux' ? 'selected' : ''}>${currentLanguage === 'fr' ? 'Bijoux' : 'Jewelry'}</option>
                                </select>
                            </div>
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Prix (FCFA)' : 'Price (FCFA)'}</label>
                                <input type="number" value="${p.price}" onchange="updateProduct(${p.id}, 'price', this.value)">
                            </div>
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Réduction (%)' : 'Discount (%)'}</label>
                                <input type="number" value="${p.discount}" min="0" max="100" onchange="updateProduct(${p.id}, 'discount', this.value)">
                            </div>
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Stock' : 'Stock'}</label>
                                <input type="number" value="${p.stock}" min="0" onchange="updateProduct(${p.id}, 'stock', this.value)">
                            </div>
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Précommande' : 'Pre-order'}</label>
                                <select onchange="updateProduct(${p.id}, 'preorder', this.value === 'true')">
                                    <option value="false" ${!p.preorder ? 'selected' : ''}>${currentLanguage === 'fr' ? 'Non' : 'No'}</option>
                                    <option value="true" ${p.preorder ? 'selected' : ''}>${currentLanguage === 'fr' ? 'Oui' : 'Yes'}</option>
                                </select>
                            </div>
                            <div>
                                <label>${currentLanguage === 'fr' ? 'Échangeable' : 'Exchangeable'}</label>
                                <select onchange="updateProduct(${p.id}, 'exchangeable', this.value === 'true')">
                                    <option value="false" ${!p.exchangeable ? 'selected' : ''}>${currentLanguage === 'fr' ? 'Non' : 'No'}</option>
                                    <option value="true" ${p.exchangeable ? 'selected' : ''}>${currentLanguage === 'fr' ? 'Oui' : 'Yes'}</option>
                                </select>
                            </div>
                        </div>
                        
                        <!-- Description Fields -->
                        <div style="margin-top: 15px;">
                            <div class="form-group">
                                <label>${currentLanguage === 'fr' ? 'Description FR' : 'Description FR'}</label>
                                <textarea rows="2" style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 5px;" onchange="updateProduct(${p.id}, 'description_fr', this.value)">${p.description_fr || ''}</textarea>
                            </div>
                            <div class="form-group">
                                <label>${currentLanguage === 'fr' ? 'Description EN' : 'Description EN'}</label>
                                <textarea rows="2" style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 5px;" onchange="updateProduct(${p.id}, 'description_en', this.value)">${p.description_en || ''}</textarea>
                            </div>
                        </div>
                        
                        <!-- Photo Gallery -->
                        <div style="margin-top: 15px;">
                            <label style="font-weight: bold; display: block; margin-bottom: 8px;">${currentLanguage === 'fr' ? '📷 Photos:' : '📷 Photos:'}</label>
                            <div class="photo-gallery">
                                ${(p.images || []).map((img, index) => `
                                    <div class="photo-thumbnail" data-photo-index="${p.id}-${index}">
                                        <img src="${img}" alt="Photo ${index + 1}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Crect fill=%22%23ddd%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3E?%3C/text%3E%3C/svg%3E'">
                                        <button class="photo-remove" onclick="removeProductPhoto(${p.id}, ${index})" title="${currentLanguage === 'fr' ? 'Supprimer' : 'Delete'}">&times;</button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Add Photo Section -->
                        <div class="add-photo-section">
                            <label style="font-weight: bold; display: block; margin-bottom: 12px;">${currentLanguage === 'fr' ? 'Ajouter une photo:' : 'Add photo:'}</label>
                            
                            <!-- Upload from device -->
                            <div class="upload-method">
                                <label>📱 ${currentLanguage === 'fr' ? 'Télécharger depuis appareil:' : 'Upload from device:'}</label>
                                <div class="file-input-wrapper">
                                    <input type="file" id="photo-file-${p.id}" accept="image/*" />
                                    <button class="add-photo-btn" onclick="handleImageUpload(${p.id})">
                                        ↑ ${currentLanguage === 'fr' ? 'Télécharger' : 'Upload'}
                                    </button>
                                </div>
                            </div>
                            
                            <div class="upload-divider">OU</div>
                            
                            <!-- Add via URL -->
                            <div class="upload-method">
                                <label>🔗 ${currentLanguage === 'fr' ? 'Ajouter via URL:' : 'Add via URL:'}</label>
                                <div class="add-photo-input">
                                    <input type="text" id="photo-url-${p.id}" placeholder="${currentLanguage === 'fr' ? 'URL de la nouvelle photo' : 'New photo URL'}" />
                                    <button class="add-photo-btn" onclick="addProductPhotoURL(${p.id})">
                                        + ${currentLanguage === 'fr' ? 'Ajouter' : 'Add'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- Add New Product Section -->
        <div class="admin-section" style="background-color: var(--color-bg-1); border: 2px solid var(--cameroon-green);">
            <h3 style="text-align: center; margin-bottom: 20px;">${currentLanguage === 'fr' ? '➕ AJOUTER UN NOUVEAU PRODUIT' : '➕ ADD NEW PRODUCT'}</h3>
            
            <div class="admin-product-fields">
                <div>
                    <label>${currentLanguage === 'fr' ? 'Emoji/Icône (1 caractère)' : 'Emoji/Icon (1 char)'}</label>
                    <input type="text" id="newProductEmoji" maxlength="2" placeholder="😊" value="🆕">
                </div>
                <div>
                    <label>${currentLanguage === 'fr' ? 'Nom en Français *' : 'Name in French *'}</label>
                    <input type="text" id="newProductNameFr" placeholder="${currentLanguage === 'fr' ? 'Nouveau produit' : 'New product'}">
                </div>
                <div>
                    <label>${currentLanguage === 'fr' ? 'Nom en Anglais *' : 'Name in English *'}</label>
                    <input type="text" id="newProductNameEn" placeholder="New product">
                </div>
                <div>
                    <label>${currentLanguage === 'fr' ? 'Catégorie *' : 'Category *'}</label>
                    <select id="newProductCategory">
                        <option value="vetements">${currentLanguage === 'fr' ? 'Vêtements' : 'Clothing'}</option>
                        <option value="accessoires">${currentLanguage === 'fr' ? 'Accessoires' : 'Accessories'}</option>
                        <option value="parfums">${currentLanguage === 'fr' ? 'Parfums' : 'Perfumes'}</option>
                        <option value="bijoux">${currentLanguage === 'fr' ? 'Bijoux' : 'Jewelry'}</option>
                    </select>
                </div>
                <div>
                    <label>${currentLanguage === 'fr' ? 'Prix (FCFA)' : 'Price (FCFA)'}</label>
                    <input type="number" id="newProductPrice" value="10000" min="0">
                </div>
                <div>
                    <label>${currentLanguage === 'fr' ? 'Réduction (%)' : 'Discount (%)'}</label>
                    <input type="number" id="newProductDiscount" value="0" min="0" max="100">
                </div>
                <div>
                    <label>${currentLanguage === 'fr' ? 'Stock' : 'Stock'}</label>
                    <input type="number" id="newProductStock" value="10" min="0">
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                    <label style="margin-bottom: 5px;">${currentLanguage === 'fr' ? 'Options' : 'Options'}</label>
                    <label style="display: flex; align-items: center; gap: 8px; font-weight: normal;">
                        <input type="checkbox" id="newProductExchangeable" checked>
                        <span>${currentLanguage === 'fr' ? 'Échangeable' : 'Exchangeable'}</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 8px; font-weight: normal;">
                        <input type="checkbox" id="newProductPreorder">
                        <span>${currentLanguage === 'fr' ? 'Précommande' : 'Pre-order'}</span>
                    </label>
                </div>
            </div>
            
            <div style="margin-top: 15px;">
                <div class="form-group">
                    <label>${currentLanguage === 'fr' ? 'Description FR (optionnel)' : 'Description FR (optional)'}</label>
                    <textarea id="newProductDescFr" rows="2" style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 5px;" placeholder="${currentLanguage === 'fr' ? 'Description en français...' : 'Description in French...'}"></textarea>
                </div>
                <div class="form-group">
                    <label>${currentLanguage === 'fr' ? 'Description EN (optionnel)' : 'Description EN (optional)'}</label>
                    <textarea id="newProductDescEn" rows="2" style="width: 100%; padding: 8px; border: 1px solid var(--border-color); border-radius: 5px;" placeholder="Description in English..."></textarea>
                </div>
            </div>
            
            <div style="margin-top: 15px;">
                <label style="font-weight: bold; display: block; margin-bottom: 10px;">${currentLanguage === 'fr' ? 'Tailles disponibles (optionnel)' : 'Available sizes (optional)'}</label>
                <div id="newProductSizesContainer">
                    <div style="margin-bottom: 10px;">
                        <strong>${currentLanguage === 'fr' ? 'Vêtements:' : 'Clothing:'}</strong><br>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="S"> S</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="M"> M</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="L"> L</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="XL"> XL</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px;"><input type="checkbox" class="new-product-sizes" value="XXL"> XXL</label>
                    </div>
                    <div>
                        <strong>${currentLanguage === 'fr' ? 'Chaussures:' : 'Shoes:'}</strong><br>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="38"> 38</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="39"> 39</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="40"> 40</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="41"> 41</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px; margin-right: 15px;"><input type="checkbox" class="new-product-sizes" value="42"> 42</label>
                        <label style="display: inline-flex; align-items: center; gap: 5px;"><input type="checkbox" class="new-product-sizes" value="43"> 43</label>
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 15px;">
                <label style="font-weight: bold; display: block; margin-bottom: 10px;">${currentLanguage === 'fr' ? 'Photo (URL):' : 'Photo (URL):'}</label>
                <input type="text" id="newProductPhotoURL" placeholder="https://example.com/image.jpg" style="width: 100%; padding: 10px; border: 1px solid var(--border-color); border-radius: 5px;">
            </div>
            
            <div style="margin-top: 20px; display: flex; gap: 10px;">
                <button class="btn" onclick="createNewProduct()" style="flex: 1;">
                    ✓ ${currentLanguage === 'fr' ? 'Créer le produit' : 'Create Product'}
                </button>
                <button class="btn btn-secondary" onclick="resetNewProductForm()" style="flex: 1;">
                    ✗ ${currentLanguage === 'fr' ? 'Réinitialiser' : 'Reset'}
                </button>
            </div>
        </div>
        
        <!-- Orders Management -->
        <div class="admin-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="margin: 0;">${currentLanguage === 'fr' ? '📋 Gestion des Commandes' : '📋 Orders Management'} (${orders.length})</h3>
                <button class="btn" style="padding: 8px 16px; margin: 0; width: auto;" onclick="toggleOrderSort()">
                    ${ordersSortNewest ? '⬇️' : '⬆️'} ${currentLanguage === 'fr' ? (ordersSortNewest ? 'Plus récent d\'abord' : 'Plus ancien d\'abord') : (ordersSortNewest ? 'Newest first' : 'Oldest first')}
                </button>
            </div>
            ${orders.length === 0 ? `<p>${currentLanguage === 'fr' ? 'Aucune commande' : 'No orders'}</p>` : sortedOrders.map(order => {
                const statusLabels = {
                    pending: currentLanguage === 'fr' ? 'En attente' : 'Pending',
                    confirmed: currentLanguage === 'fr' ? 'Confirmée' : 'Confirmed',
                    preparing: currentLanguage === 'fr' ? 'En préparation' : 'Preparing',
                    ready: currentLanguage === 'fr' ? 'Prête' : 'Ready',
                    delivered: currentLanguage === 'fr' ? 'Livrée' : 'Delivered'
                };
                
                return `
                    <div class="admin-product" style="margin-bottom: 20px;">
                        <div class="admin-product-header">
                            <div>
                                <strong>${currentLanguage === 'fr' ? 'Commande' : 'Order'} #${order.id}</strong>
                                <div style="font-size: 0.9em; color: #666; margin-top: 3px;">
                                    📅 ${new Date(order.date).toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <div style="margin: 15px 0; padding: 10px; background-color: var(--bg-color); border-radius: 8px;">
                            <div style="margin-bottom: 8px;"><strong>👤 ${currentLanguage === 'fr' ? 'Client' : 'Customer'}:</strong> ${order.customerName}</div>
                            <div style="margin-bottom: 8px;"><strong>📞 ${currentLanguage === 'fr' ? 'Téléphone' : 'Phone'}:</strong> ${order.customerPhone}</div>
                            ${order.customerEmail ? `<div style="margin-bottom: 8px;"><strong>📧 Email:</strong> ${order.customerEmail}</div>` : ''}
                            <div style="margin-bottom: 8px;"><strong>📍 ${currentLanguage === 'fr' ? 'Adresse' : 'Address'}:</strong> ${order.deliveryAddress}</div>
                            <div style="margin-bottom: 8px;"><strong>💳 ${currentLanguage === 'fr' ? 'Paiement' : 'Payment'}:</strong> ${order.paymentMethod === 'momo' ? 'MTN MoMo' : order.paymentMethod === 'orange' ? 'Orange Money' : (currentLanguage === 'fr' ? 'Espèces' : 'Cash')}</div>
                        </div>
                        <div style="margin: 15px 0;">
                            <strong>${currentLanguage === 'fr' ? 'Articles commandés:' : 'Ordered items:'}</strong>
                            ${order.items.map(item => `
                                <div style="display: flex; gap: 10px; align-items: center; margin: 8px 0; padding: 8px; background-color: white; border-radius: 5px;">
                                    <span style="font-size: 1.5em;">${item.productEmoji}</span>
                                    <div style="flex: 1;">
                                        <div>${item.productName} ${item.size ? `(${item.size})` : ''}</div>
                                        <div style="font-size: 0.9em; color: #666;">${currentLanguage === 'fr' ? 'Qté' : 'Qty'}: ${item.quantity} × ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)}</div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div style="margin: 15px 0; padding: 10px; background-color: var(--cameroon-green); color: white; border-radius: 8px; text-align: center;">
                            <div style="font-size: 0.9em;">${currentLanguage === 'fr' ? 'Sous-total' : 'Subtotal'}: ${formatPrice(order.subtotal)}</div>
                            <div style="font-size: 0.9em;">${currentLanguage === 'fr' ? 'Livraison' : 'Shipping'}: ${order.shipping === 0 ? (currentLanguage === 'fr' ? 'GRATUITE' : 'FREE') : formatPrice(order.shipping)}</div>
                            <div style="font-size: 1.3em; font-weight: bold; margin-top: 5px;">${currentLanguage === 'fr' ? 'TOTAL' : 'TOTAL'}: ${formatPrice(order.total)}</div>
                        </div>
                        <div class="form-group">
                            <label style="font-weight: bold;">${currentLanguage === 'fr' ? '🔄 Statut de la commande' : '🔄 Order Status'}</label>
                            <select onchange="updateOrderStatus(${order.id}, this.value)" style="font-size: 1em; padding: 10px;">
                                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>${statusLabels.pending}</option>
                                <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>${statusLabels.confirmed}</option>
                                <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>${statusLabels.preparing}</option>
                                <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>${statusLabels.ready}</option>
                                <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>${statusLabels.delivered}</option>
                            </select>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
        
        <!-- Reviews Moderation -->
        <div class="admin-section" style="background-color: var(--color-bg-7);">
            <h3>⭐ ${currentLanguage === 'fr' ? 'MODÉRATION DES AVIS' : 'REVIEWS MODERATION'}</h3>
            ${reviews.length === 0 ? '<p>Aucun avis</p>' : reviews.map(r => {
                const prod = products.find(p => p.id === r.productId);
                return `<div style="background: white; padding: 10px; border-radius: 8px; margin: 5px 0;">
                    <div><strong>${prod ? prod.name_fr : 'Produit'}</strong> | ${'⭐'.repeat(r.rating)} | ${r.clientName}</div>
                    <div style="margin: 5px 0;">${r.text}</div>
                    <div style="font-size: 0.85em; color: #666;">${new Date(r.date).toLocaleString()} | ${r.approved ? '✅ Approuvé' : '⏳ En attente'}</div>
                    ${!r.approved ? `<button class="btn" onclick="approveReview(${r.id})" style="padding: 5px 10px; margin-top: 5px;">${currentLanguage === 'fr' ? 'Approuver' : 'Approve'}</button>` : ''}
                    <button class="btn btn-danger" onclick="deleteReview(${r.id})" style="padding: 5px 10px; margin-top: 5px; margin-left: 5px;">${currentLanguage === 'fr' ? 'Supprimer' : 'Delete'}</button>
                </div>`;
            }).join('')}
        </div>
        
        <!-- Settings -->
        <div class="admin-section">
            <h3>${currentLanguage === 'fr' ? '⚙️ Paramètres' : '⚙️ Settings'}</h3>
            <div class="form-group">
                <label>${currentLanguage === 'fr' ? 'Seuil livraison gratuite (FCFA)' : 'Free shipping threshold (FCFA)'}</label>
                <input type="number" id="free-shipping-input" value="${freeShippingThreshold}">
            </div>
            <div class="form-group">
                <label>${currentLanguage === 'fr' ? 'Nouveau mot de passe admin' : 'New admin password'}</label>
                <input type="password" id="new-admin-password">
            </div>
            <button class="btn" onclick="saveAdminSettings()">${currentLanguage === 'fr' ? 'Enregistrer les paramètres' : 'Save Settings'}</button>
        </div>
        
        <!-- Exit Button -->
        <div class="admin-section" style="text-align: center;">
            <button class="btn btn-secondary" onclick="closeAdminPanel()" style="font-size: 1.1em; padding: 15px 30px;">
                ← ${currentLanguage === 'fr' ? 'Retour à la boutique' : 'Back to Shop'}
            </button>
        </div>
    `;
    
    adminContent.innerHTML = html;
    console.log('Admin panel fully rendered');
}

function updateProduct(productId, field, value) {
    const product = products.find(p => p.id === productId);
    if (product) {
        if (field === 'price' || field === 'discount' || field === 'stock') {
            product[field] = parseInt(value) || 0;
        } else {
            product[field] = value;
        }
        saveToStorage();
        renderProducts();
        console.log(`✅ Product ${productId} updated: ${field} = ${value}`);
    }
}

function handleImageUpload(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('❌ Product not found:', productId);
        return;
    }
    
    const fileInput = document.getElementById(`photo-file-${productId}`);
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        alert(currentLanguage === 'fr' ? 'Veuillez sélectionner une image' : 'Please select an image');
        return;
    }
    
    const file = fileInput.files[0];
    
    // Validation: file type
    if (!file.type.startsWith('image/')) {
        alert(currentLanguage === 'fr' ? 'Erreur: Veuillez sélectionner une image valide (JPG, PNG, GIF, WebP, etc.)' : 'Error: Please select a valid image (JPG, PNG, GIF, WebP, etc.)');
        return;
    }
    
    // Validation: file size (max 2MB)
    const maxSize = 2 * 1024 * 1024; // 2MB in bytes
    if (file.size > maxSize) {
        alert(currentLanguage === 'fr' ? 'Erreur: L\'image doit faire moins de 2MB' : 'Error: Image must be less than 2MB');
        return;
    }
    
    // Convert to base64
    const reader = new FileReader();
    reader.onload = function(e) {
        const base64Image = e.target.result;
        
        if (!product.images) {
            product.images = [];
        }
        
        product.images.push(base64Image);
        saveToStorage();
        renderProducts();
        
        // Clear file input
        fileInput.value = '';
        
        // Re-render admin panel to show new photo
        renderAdminPanel();
        
        console.log(`✅ Image uploaded and converted to base64 for product ${productId}`);
        alert(currentLanguage === 'fr' ? 'Image téléchargée avec succès!' : 'Image uploaded successfully!');
    };
    
    reader.onerror = function(error) {
        console.error('❌ Error reading file:', error);
        alert(currentLanguage === 'fr' ? 'Erreur lors de la lecture du fichier' : 'Error reading file');
    };
    
    reader.readAsDataURL(file);
}

function addProductPhotoURL(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('❌ Product not found:', productId);
        return;
    }
    
    const input = document.getElementById(`photo-url-${productId}`);
    if (!input) {
        console.error('❌ Input not found for product:', productId);
        return;
    }
    
    const url = input.value.trim();
    
    if (!url) {
        alert(currentLanguage === 'fr' ? 'Veuillez entrer une URL' : 'Please enter a URL');
        return;
    }
    
    // Allow data URLs (base64) or http/https URLs
    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:image/')) {
        alert(currentLanguage === 'fr' ? 'URL invalide (doit commencer par http://, https:// ou être une image base64)' : 'Invalid URL (must start with http://, https:// or be a base64 image)');  
        return;
    }
    
    if (!product.images) {
        product.images = [];
    }
    
    product.images.push(url);
    saveToStorage();
    renderProducts();
    input.value = '';
    
    // Re-render admin panel to show new photo
    renderAdminPanel();
    
    console.log(`✅ Photo added to product ${productId}:`, url);
    alert(currentLanguage === 'fr' ? 'Photo ajoutée avec succès!' : 'Photo added successfully!');
}

function removeProductPhoto(productId, photoIndex) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.images) {
        console.error('❌ Product or images not found');
        return;
    }
    
    if (product.images.length <= 1) {
        alert(currentLanguage === 'fr' ? 'Au moins une photo est requise!' : 'At least one photo is required!');
        return;
    }
    
    if (!confirm(currentLanguage === 'fr' ? 'Supprimer cette photo?' : 'Delete this photo?')) {
        return;
    }
    
    // Add fade out animation
    const thumbnail = document.querySelector(`[data-photo-index="${productId}-${photoIndex}"]`);
    if (thumbnail) {
        thumbnail.classList.add('removing');
        setTimeout(() => {
            product.images.splice(photoIndex, 1);
            saveToStorage();
            renderProducts();
            renderAdminPanel();
            console.log(`✅ Photo ${photoIndex} removed from product ${productId}`);
        }, 300);
    } else {
        product.images.splice(photoIndex, 1);
        saveToStorage();
        renderProducts();
        renderAdminPanel();
        console.log(`✅ Photo ${photoIndex} removed from product ${productId}`);
    }
}

function deleteProduct(productId) {
    if (confirm(currentLanguage === 'fr' ? 'Voulez-vous vraiment supprimer ce produit?' : 'Do you really want to delete this product?')) {
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products.splice(index, 1);
            saveToStorage();
            renderProducts();
            if (adminPanelOpen) {
                renderAdminPanel();
            }
            console.log(`✅ Product ${productId} deleted`);
        }
    }
}

function createNewProduct() {
    // Get form values
    const emoji = document.getElementById('newProductEmoji').value.trim();
    const nameFr = document.getElementById('newProductNameFr').value.trim();
    const nameEn = document.getElementById('newProductNameEn').value.trim();
    const category = document.getElementById('newProductCategory').value;
    const price = parseInt(document.getElementById('newProductPrice').value) || 0;
    const discount = parseInt(document.getElementById('newProductDiscount').value) || 0;
    const stock = parseInt(document.getElementById('newProductStock').value) || 0;
    const exchangeable = document.getElementById('newProductExchangeable').checked;
    const preorder = document.getElementById('newProductPreorder').checked;
    const descFr = document.getElementById('newProductDescFr').value.trim();
    const descEn = document.getElementById('newProductDescEn').value.trim();
    const photoURL = document.getElementById('newProductPhotoURL').value.trim();
    
    // Validation
    if (!emoji || !nameFr || !nameEn) {
        alert(currentLanguage === 'fr' ? 'Veuillez remplir tous les champs obligatoires (Emoji, Nom FR, Nom EN)' : 'Please fill all required fields (Emoji, Name FR, Name EN)');
        return;
    }
    
    // Get selected sizes
    const sizes = [];
    document.querySelectorAll('.new-product-sizes:checked').forEach(checkbox => {
        sizes.push(checkbox.value);
    });
    
    // Create new product
    const newProduct = {
        id: Date.now(),
        emoji: emoji,
        name_fr: nameFr,
        name_en: nameEn,
        category: category,
        price: price,
        discount: discount,
        stock: stock,
        preorder: preorder,
        exchangeable: exchangeable,
        description_fr: descFr || '',
        description_en: descEn || '',
        images: photoURL ? [photoURL] : ['https://via.placeholder.com/400?text=' + encodeURIComponent(nameFr)]
    };
    
    // Add sizes if any selected
    if (sizes.length > 0) {
        newProduct.sizes = sizes;
    }
    
    // Add to products
    products.push(newProduct);
    saveToStorage();
    renderProducts();
    
    // Reset form
    resetNewProductForm();
    
    // Re-render admin panel
    if (adminPanelOpen) {
        renderAdminPanel();
    }
    
    alert(currentLanguage === 'fr' ? 'Produit créé avec succès!' : 'Product created successfully!');
    console.log('✅ New product created:', newProduct);
}

function resetNewProductForm() {
    document.getElementById('newProductEmoji').value = '🆕';
    document.getElementById('newProductNameFr').value = '';
    document.getElementById('newProductNameEn').value = '';
    document.getElementById('newProductCategory').value = 'vetements';
    document.getElementById('newProductPrice').value = '10000';
    document.getElementById('newProductDiscount').value = '0';
    document.getElementById('newProductStock').value = '10';
    document.getElementById('newProductExchangeable').checked = true;
    document.getElementById('newProductPreorder').checked = false;
    document.getElementById('newProductDescFr').value = '';
    document.getElementById('newProductDescEn').value = '';
    document.getElementById('newProductPhotoURL').value = '';
    document.querySelectorAll('.new-product-sizes').forEach(cb => cb.checked = false);
    console.log('📝 New product form reset');
}

function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        const oldStatus = order.status;
        order.status = newStatus;
        
        // Update timeline
        const statusIndex = order.timeline.findIndex(t => t.status === newStatus);
        if (statusIndex !== -1) {
            for (let i = 0; i <= statusIndex; i++) {
                order.timeline[i].active = true;
                if (!order.timeline[i].date && i === statusIndex) {
                    order.timeline[i].date = new Date().toISOString();
                }
            }
            for (let i = statusIndex + 1; i < order.timeline.length; i++) {
                order.timeline[i].active = false;
            }
        }
        
        saveToStorage();
        console.log(`✅ Order ${orderId} status updated: ${oldStatus} → ${newStatus} (auto-saved)`);
        
        // Auto-save complete - status persisted
    }
}

function toggleOrderSort() {
    ordersSortNewest = !ordersSortNewest;
    console.log(`🔄 Order sort toggled: ${ordersSortNewest ? 'Newest first ⬇️' : 'Oldest first ⬆️'}`);
    renderAdminPanel();
}

function closeAdminPanel() {
    adminPanelOpen = false;
    closePanel('admin-panel');
    console.log('Admin panel closed by user');
}

function saveAdminSettings() {
    const newThreshold = parseInt(document.getElementById('free-shipping-input').value);
    const newPassword = document.getElementById('new-admin-password').value;
    
    if (newThreshold > 0) {
        freeShippingThreshold = newThreshold;
    }
    
    if (newPassword) {
        adminPassword = newPassword;
        document.getElementById('new-admin-password').value = '';
    }
    
    saveToStorage();
    showSuccess(currentLanguage === 'fr' ? 'Paramètres enregistrés!' : 'Settings saved!');
    console.log('✅ Admin settings saved');
}

// Filter Products
function filterProducts(filter) {
    currentFilter = filter;
    renderProducts();
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Chat Functions
function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('active');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    const messagesContainer = document.getElementById('chat-messages');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = message;
    messagesContainer.appendChild(userMsg);
    
    input.value = '';
    chatMessageCount++;
    
    // Bot response
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';
        
        if (chatMessageCount === 1) {
            botMsg.textContent = currentLanguage === 'fr' 
                ? 'Merci pour votre message! Un agent va vous répondre bientôt.'
                : 'Thank you for your message! An agent will respond soon.';
        } else {
            botMsg.textContent = currentLanguage === 'fr'
                ? 'Notre équipe vous répondra dans les plus brefs délais.'
                : 'Our team will respond as soon as possible.';
        }
        
        messagesContainer.appendChild(botMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 500);
}

// Language Functions
function switchLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    document.getElementById('current-lang').textContent = currentLanguage.toUpperCase();
    
    // Update search input placeholder
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = '🔍 ' + translate('search-placeholder');
    }
    
    translatePage();
    renderProducts();
    saveToStorage();
}

function translate(key) {
    return translations[currentLanguage][key] || key;
}

function translatePage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[currentLanguage][key]) {
            element.placeholder = translations[currentLanguage][key];
        }
    });
}

// Wishlist Functions
function toggleWishlist(productId) {
    if (!currentUser) { showLogin(); return; }
    
    const wasInWishlist = isFavorited(productId);
    
    if (wasInWishlist) {
        wishlist = wishlist.filter(item => item.productId !== productId || item.clientPhone !== currentUser.phone);
        addNotification('wishlist', currentLanguage === 'fr' ? 'Retiré des favoris' : 'Removed from wishlist', true);
    } else {
        wishlist.push({ clientPhone: currentUser.phone, productId, addedDate: new Date().toISOString() });
        addNotification('wishlist', currentLanguage === 'fr' ? 'Ajouté aux favoris' : 'Added to wishlist', true);
    }
    
    saveToStorage();
    
    // Animate the heart button
    const heartBtn = event.target.closest('.wishlist-heart');
    if (heartBtn) {
        heartBtn.style.transform = 'scale(1.2)';
        setTimeout(() => {
            heartBtn.style.transform = 'scale(1)';
        }, 150);
    }
    
    renderProducts();
}
function isFavorited(productId) {
    if (!currentUser) return false;
    return wishlist.some(item => item.productId === productId && item.clientPhone === currentUser.phone);
}
function showWishlist() {
    if (!currentUser) return showLogin();
    let html = '<h3>'+(currentLanguage==='fr'?'Mes Favoris':'My Wishlist')+'</h3>';
    const items = wishlist.filter(w=>w.clientPhone===currentUser.phone);
    if(items.length===0){ html+='<p>'+(currentLanguage==='fr'?'Aucun favori':'No favorites')+'</p>'; } else {
        html+='<div>';
        items.forEach(w=>{
            const prod = products.find(p=>p.id===w.productId);
            if(prod) { html+=`<div style='display:flex;gap:10px;align-items:center;margin:10px 0;'><span style='font-size:2em;'>${prod.emoji}</span><span><strong>${prod.name_fr}</strong></span><button class='btn' onclick='addToCart(${prod.id})' style='margin-left:10px;'>🛒 '+(currentLanguage==='fr' ? 'Ajouter au panier' : 'Add to Cart')+'</button><button class='btn btn-danger' onclick='toggleWishlist(${prod.id})' style='margin-left:10px;'>✕</button></div>`}
        });
        html+='</div>';
    }
    document.getElementById('wishlist-content').innerHTML=html;
    openPanel('wishlist-panel');
}
function toggleWishlistFromModal(productId) {
    toggleWishlist(productId);
    showProductDetail(productId);
}

// Notification functions
function showNotifications() {
    if (!currentUser) return showLogin();
    let html = '<div>';
    const userNotifications = notifications.filter(n=>!n.archived && (!n.clientPhone || n.clientPhone===currentUser.phone));
    if(userNotifications.length===0) html+='<p>'+(currentLanguage==='fr'?'Aucune notification':'No notifications')+'</p>';
    else {
        userNotifications.forEach(n=>{
            html+=`<div style='margin-bottom:10px;'><strong>${n.type}</strong> - ${n.message} <span style='font-size:0.9em;color:#888;'>${new Date(n.date).toLocaleString()}</span> <button class='btn btn-secondary' style='padding:4px 10px;' onclick='markNotifRead(${n.id})'>${n.read ? (currentLanguage==='fr'?'Archivé':'Archived'):(currentLanguage==='fr'?'Lu':'Read')}</button></div>`
        });
    }
    html+='</div>';
    document.getElementById('notifications-content').innerHTML=html;
    openPanel('notifications-panel');
    updateNotifBadge();
}
function addNotification(type, message, silent) {
    if (!currentUser) return;
    notifications.push({ id:Date.now(), type, message, date:new Date().toISOString(), read:false, clientPhone:currentUser.phone });
    saveToStorage();
    if(!silent) updateNotifBadge();
}
function markNotifRead(id) {
    const notif = notifications.find(n=>n.id===id);
    if(notif) notif.read=true;
    saveToStorage();
    showNotifications();
}
function updateNotifBadge() {
    if(!document.getElementById('notif-badge')) return;
    const unread = notifications.filter(n=>!n.read && (!n.clientPhone || currentUser&&n.clientPhone===currentUser.phone)).length;
    document.getElementById('notif-badge').textContent = unread;
    document.getElementById('notif-badge').style.display = unread>0 ? '' : 'none';
}

// Reviews (avis)
function renderReviews(productId) {
    let html = '<h4>'+ (currentLanguage==='fr'?'Avis & Commentaires':'Reviews') +'</h4>';
    const prodReviews = reviews.filter(r=>r.productId===productId&&r.approved);
    const average = prodReviews.length ? (prodReviews.reduce((s,r)=>s+r.rating,0)/prodReviews.length).toFixed(1):'-';
    html += `<div>${prodReviews.length} ${currentLanguage==='fr'?'avis':'reviews'} | ${average} ⭐</div>`;
    prodReviews.forEach(r=>{
        html+=`<div style='background:#fafafc;border-radius:6px;padding:10px;margin:10px 0;'><span style='font-weight:bold;'>${r.clientName}</span> <span>${'⭐'.repeat(r.rating)}</span> <span style='color:#888'>${new Date(r.date).toLocaleDateString()}</span><br>${r.text}</div>`;
    });
    html += `<form onsubmit='submitReview(event,${productId});' style='margin-top:10px;'>
        <div><label>${currentLanguage==='fr'?'Votre note':'Your rating'}</label> <select id='review-rating'>${[1,2,3,4,5].map(i=>`<option>${i}</option>`)}</select></div>
        <div><textarea id='review-text' rows='3' maxlength='500' minlength='10' placeholder='${currentLanguage==='fr'?'Votre avis (min 10 caractères)':'Your review (min 10 chars)'}' required></textarea></div>
        <button class='btn' type='submit'>${currentLanguage==='fr'?'Publier mon avis':'Submit review'}</button>
    </form>`;
    document.getElementById('reviews-area').innerHTML=html;
}
function submitReview(evt,productId) {
    evt.preventDefault();
    if(!currentUser) return showLogin();
    const txt = document.getElementById('review-text').value.trim();
    const rating = parseInt(document.getElementById('review-rating').value)||5;
    if(txt.length<10){alert('10 caractères min.');return;}
    reviews.push({id:Date.now(), productId, clientName:currentUser.phone, rating, text:txt, date:new Date().toISOString(), approved:true});
    saveToStorage();
    renderReviews(productId);
}

// Gallery (images)
function renderGallery(product) {
    const area = document.getElementById('gallery-area');
    if(!product.images ||!area)return;
    let current=0;
    area.innerHTML=`<div style='display:flex;flex-direction:column;align-items:center;'><div id='big-image-box'></div><div style='display:flex;gap:5px;overflow-x:auto;margin:10px 0;'>$${product.images.map((img,i)=>`<img src='${img}' onclick='showGalleryImage(${i})' style='height:60px;width:60px;object-fit:cover;cursor:pointer;border-radius:5px;border:2px solid #ccc;'>`).join('')}</div><div id='gallery-counter'>1/${product.images.length}</div></div>`;
    showGalleryImage(0,product.images,area);
}
function showGalleryImage(index,images=null,area=null){
    if(!area) area=document.getElementById('gallery-area');
    if(!images) images = area.querySelectorAll('img');
    const src = images[index] ? (images[index].src||images[index].getAttribute('src')) : '';
    const big = area.querySelector('#big-image-box');
    big.innerHTML=`<img src='${src}' style='width:340px;height:340px;object-fit:cover;border-radius:8px;' onmouseover='this.style.transform="scale(1.15)";' onmouseout='this.style.transform="scale(1)";'>`;
    area.querySelector('#gallery-counter').textContent = (index+1)+'/'+images.length;
}

// Support (tickets)
function showSupport() {
    if (!currentUser) return showLogin();
    let html = `<h3>${currentLanguage==='fr'?'Support client':'Customer support'}</h3>
        <form onsubmit='submitSupportTicket(event);'>
        <div><label>Sujet:</label><select id='support-subject'><option>Commande</option><option>Produit</option><option>Livraison</option><option>Autre</option></select></div>
        <div><textarea id='support-msg' required maxlength='500'></textarea></div>
        <button class='btn' type='submit'>${currentLanguage==='fr'?'Envoyer':'Send'}</button></form>`;
    html+='<div><h4>'+ (currentLanguage==='fr'?'Historique tickets':'Support history')+'</h4>';
    const userTickets = supportTickets.filter(t=>t.clientPhone===currentUser.phone);
    userTickets.forEach(ticket=>{
        html+=`<div style='margin:10px 0;padding:8px;background:#f6f6f8;border-radius:8px;'><strong>${ticket.subject}</strong>:${ticket.message}<br><span style='color:#888'>${ticket.status}</span> <span style='font-size:0.8em'>${new Date(ticket.createdDate).toLocaleString()}</span></div>`;
    });
    html+='</div>';
    document.getElementById('support-content').innerHTML=html;
    openPanel('support-panel');
}
function submitSupportTicket(evt) {
    evt.preventDefault();
    const subject=document.getElementById('support-subject').value,msg=document.getElementById('support-msg').value.trim();
    supportTickets.push({id:Date.now(),clientPhone:currentUser.phone,subject,message:msg,status:'open',createdDate:new Date().toISOString(),messages:[]});
    saveToStorage();
    showSupport();
}

// Coupons
function applyCoupon() {
    const v=document.getElementById('checkout-coupon').value.trim();
    if(!v){document.getElementById('coupon-message').textContent='';return;}
    // Simple test for demo
    let coupon = coupons.find(c=>c.code&&c.code.toUpperCase()===v.toUpperCase()&&c.active);
    if(coupon){
        appliedCoupon=coupon;
        document.getElementById('coupon-message').textContent= currentLanguage==='fr'?'Code appliqué: ':'Coupon applied: '+coupon.code;
    }else{
        document.getElementById('coupon-message').textContent= currentLanguage==='fr'?'Code invalide':'Invalid code';
    }
}

// Referral system
document.getElementById('checkout-referral').oninput=function(){appliedReferral = this.value.trim();};

// Theme
function toggleTheme() {
    currentTheme = (currentTheme==="dark")?"light":"dark";
    document.documentElement.setAttribute('data-color-scheme',currentTheme);
    saveToStorage();
}

// Advanced load
function loadPremiumData() {
    // Example review data
    reviews = [
      { id: 1, productId: 1, clientName: "Jean D.", rating: 5, text: "Très bien!", date: "2025-11-28", approved: true },
      { id: 2, productId: 1, clientName: "Marie L.", rating: 4, text: "Bon produit", date: "2025-11-27", approved: true }
    ];
    // Coupons
    coupons = [
      { code: "BLACK20", type: "%", value: 20, expiryDate: "2025-12-31", maxUses: 100, currentUses: 45, active: true },
      { code: "NOEL2025", type: "fixed", value: 5000, expiryDate: "2025-12-25", active: true }
    ];
    // Notifications example
    notifications = [
      { id: 1, type: "order_status", message: "Votre commande est confirmée", date: "2025-11-28", read: false },
      { id: 2, type: "restock", message: "Le Collier doré est de nouveau en stock!", date: "2025-11-27", read: true }
    ];
}

// Utility Functions
function formatPrice(price) {
    return `${Math.round(price).toLocaleString()} FCFA`;
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
}

function openPanel(panelId) {
    // Close other panels except the one being opened
    document.querySelectorAll('.panel').forEach(panel => {
        if (panel.id !== panelId) {
            panel.classList.remove('active');
        }
    });
    
    // Open the requested panel
    const panel = document.getElementById(panelId);
    panel.classList.add('active');
    panel.style.display = 'block';
    
    if (panelId === 'admin-panel') {
        adminPanelOpen = true;
        console.log('✅ Admin panel opened and will stay open until manual close');
    } else if (panelId === 'cart-panel') {
        console.log('✅ Cart panel opened and will stay open until manual close');
    }
}

function closeAllPanelsExceptAdmin() {
    document.querySelectorAll('.panel').forEach(panel => {
        if (panel.id !== 'admin-panel' || !adminPanelOpen) {
            panel.classList.remove('active');
            setTimeout(() => {
                panel.style.display = 'none';
            }, 300);
        }
    });
}

function closePanel(panelId) {
    if (panelId === 'admin-panel') {
        adminPanelOpen = false;
        console.log('❌ Admin panel closed manually');
    }
    const panel = document.getElementById(panelId);
    panel.classList.remove('active');
    setTimeout(() => {
        if (!panel.classList.contains('active')) {
            panel.style.display = 'none';
        }
    }, 300);
}

function closeAllPanels() {
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
        setTimeout(() => {
            panel.style.display = 'none';
        }, 300);
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showSuccess(message) {
    document.getElementById('success-message').textContent = message;
    openPanel('success-panel');
}

// Client Segmentation
function segmentClients() {
    const clientData = {};
    orders.forEach(order => {
        if (!clientData[order.customerPhone]) {
            clientData[order.customerPhone] = { phone: order.customerPhone, totalSpent: 0, orderCount: 0, lastOrder: null };
        }
        clientData[order.customerPhone].totalSpent += order.total;
        clientData[order.customerPhone].orderCount += 1;
        if (!clientData[order.customerPhone].lastOrder || new Date(order.date) > new Date(clientData[order.customerPhone].lastOrder)) {
            clientData[order.customerPhone].lastOrder = order.date;
        }
    });
    
    client_segments = { vip: [], regulars: [], new: [], dormant: [], at_risk: [], inactive: [] };
    
    Object.values(clientData).forEach(client => {
        if (client.totalSpent > 500000 || client.orderCount > 10) {
            client_segments.vip.push(client);
        } else if (client.totalSpent >= 100000 && client.totalSpent <= 500000) {
            client_segments.regulars.push(client);
        } else if (client.orderCount === 1) {
            client_segments.new.push(client);
        }
        // Add more sophisticated segmentation logic here
    });
}

// Coupon functions
function showCreateCouponForm() {
    const area = document.getElementById('coupon-form-area');
    area.innerHTML = `<div style="background: white; padding: 15px; border-radius: 8px; margin: 10px 0;">
        <h4>${currentLanguage === 'fr' ? 'Nouveau code promo' : 'New coupon'}</h4>
        <div><label>Code:</label> <input type="text" id="new-coupon-code" placeholder="BLACK20"></div>
        <div><label>Type:</label> <select id="new-coupon-type"><option value="%">%</option><option value="fixed">Montant fixe</option></select></div>
        <div><label>Valeur:</label> <input type="number" id="new-coupon-value" value="20"></div>
        <div><label>Max utilisations:</label> <input type="number" id="new-coupon-max" value="100"></div>
        <button class="btn" onclick="createCoupon()" style="margin-top: 10px;">${currentLanguage === 'fr' ? 'Créer' : 'Create'}</button>
        <button class="btn btn-secondary" onclick="document.getElementById('coupon-form-area').innerHTML=''" style="margin-top: 10px;">${currentLanguage === 'fr' ? 'Annuler' : 'Cancel'}</button>
    </div>`;
}

function createCoupon() {
    const code = document.getElementById('new-coupon-code').value.trim().toUpperCase();
    const type = document.getElementById('new-coupon-type').value;
    const value = parseInt(document.getElementById('new-coupon-value').value) || 0;
    const maxUses = parseInt(document.getElementById('new-coupon-max').value) || 100;
    if (!code || value <= 0) { alert('Code et valeur requis'); return; }
    coupons.push({ code, type, value, expiryDate: '2026-12-31', maxUses, currentUses: 0, active: true });
    saveToStorage();
    renderAdminPanel();
}

function deleteCoupon(code) {
    if (confirm(currentLanguage === 'fr' ? 'Supprimer ce code?' : 'Delete this coupon?')) {
        coupons = coupons.filter(c => c.code !== code);
        saveToStorage();
        renderAdminPanel();
    }
}

// Ticket functions
function resolveTicket(id) {
    const ticket = supportTickets.find(t => t.id === id);
    if (ticket) ticket.status = 'resolved';
    saveToStorage();
    renderAdminPanel();
}

// Review moderation
function approveReview(id) {
    const review = reviews.find(r => r.id === id);
    if (review) review.approved = true;
    saveToStorage();
    renderAdminPanel();
}

function deleteReview(id) {
    if (confirm(currentLanguage === 'fr' ? 'Supprimer cet avis?' : 'Delete this review?')) {
        reviews = reviews.filter(r => r.id !== id);
        saveToStorage();
        renderAdminPanel();
    }
}

// Search
function searchProducts() {
    renderProducts();
}

// Storage Functions (in-memory state management)
function saveToStorage() {
    // State is managed in-memory via global variables
    // Products, cart, orders, currentUser, etc. persist in memory during session
    console.log('💾 State saved in memory');
}

function loadFromStorage() {
    // State loads from global variables
    console.log('📂 State loaded from memory');
}

// Initialize app on load
window.addEventListener('DOMContentLoaded', init);

// Allow Enter key in chat
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});