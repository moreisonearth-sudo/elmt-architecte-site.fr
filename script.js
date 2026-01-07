// Modal functions
function showTerms() {
    document.getElementById('terms-modal').classList.add('show');
}

function showPrivacy() {
    document.getElementById('privacy-modal').classList.add('show');
}

function closeModal(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}

function closeModalManual() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('show');
    });
}

function reportContent() {
    alert('Thank you for your report. Our content review team will examine this shortly.');
    closeModalManual();
}

// Image gallery - click thumbnail to replace main image
document.querySelectorAll('.project-thumbnails img').forEach(thumb => {
    thumb.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const card = this.closest('.project-card');
        const mainImage = card.querySelector('.project-main-image');
        
        // Swap src between main image and thumbnail
        const mainSrc = mainImage.src;
        const mainAlt = mainImage.alt;
        
        mainImage.src = this.src;
        mainImage.alt = this.alt;
        
        this.src = mainSrc;
        this.alt = mainAlt;
        
        // Subtle fade effect
        mainImage.style.opacity = '0.6';
        setTimeout(() => {
            mainImage.style.opacity = '1';
        }, 120);
    });
});

// Image viewer for main images
document.querySelectorAll('.project-main-image').forEach(img => {
    img.addEventListener('click', function() {
        openImageViewer(this.src, this.alt);
    });
});

function openImageViewer(imageSrc, caption) {
    const viewer = document.getElementById('image-viewer');
    const viewerImage = document.getElementById('viewer-image');
    const viewerCaption = document.getElementById('viewer-caption');
    
    viewerImage.src = imageSrc;
    viewerCaption.textContent = caption;
    viewer.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeImageViewer() {
    document.getElementById('image-viewer').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImageViewer();
        closeModalManual();
    }
});

// Close viewer on background click
document.addEventListener('click', function(e) {
    if (e.target.id === 'image-viewer') {
        closeImageViewer();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
