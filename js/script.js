document.addEventListener('DOMContentLoaded', function() {
    // Lightboxの設定
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "%1 / %2",
        'fadeDuration': 300,
        'fitImagesInViewport': true,
        'positionFromTop': 50,
        'showImageNumberLabel': true
    });
    
    // スムーススクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // スマホ向けタッチイベント最適化
    if ('ontouchstart' in window) {
        const plantImages = document.querySelectorAll('.plant-img');
        
        plantImages.forEach(img => {
            img.addEventListener('touchstart', function() {
                this.style.transform = 'scale(1.02)';
            });
            
            img.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
    
    // マップのクリック拡大機能
    const mapContainer = document.querySelector('.map-container');
    const mapButton = document.querySelector('.map-button');
    
    if (mapContainer && mapButton) {
        mapButton.addEventListener('click', function() {
            lightbox.start(document.createElement('img'));
            const lightboxImage = document.querySelector('.lb-image');
            if (lightboxImage) {
                lightboxImage.src = 'https://i.ibb.co/F4Wr6XH/sapporo-map.jpg';
                lightboxImage.alt = '札幌の植物探検マップ';
            }
        });
    }
    
    // ゲームカードのアニメーション
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'white';
        });
    });
});