document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = 'Ẩn/Hiện nội dung';
    toggleBtn.className = 'flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04';
    
    const content = document.querySelector('.sec-banner .container');
    
    content.insertBefore(toggleBtn, content.firstChild);

    toggleBtn.addEventListener('click', function() {
        const bannerContent = document.querySelector('.flex-w.flex-c-m');
        
        if(bannerContent.style.display === 'none') {
            bannerContent.style.opacity = '0';
            bannerContent.style.display = 'flex';
            let opacity = 0;
            const fadeIn = setInterval(function() {
                opacity += 0.1;
                bannerContent.style.opacity = opacity;
                if(opacity >= 1) clearInterval(fadeIn);
            }, 50);
        } else {
            let opacity = 1;
            const fadeOut = setInterval(function() {
                opacity -= 0.1;
                bannerContent.style.opacity = opacity;
                if(opacity <= 0) {
                    clearInterval(fadeOut);
                    bannerContent.style.display = 'none';
                }
            }, 50);
        }
    });
});