function updateStyles() {
    const coverImage = document.querySelector('#item0 .cover-image');
    if (coverImage) {
        // On desktop
        if (window.innerWidth > 768) {
            coverImage.style.height = (window.innerHeight * 0.80) + 'px';
            coverImage.style.width = '100%'; // Ensure it covers the width
            coverImage.style.objectFit = 'contain';
            coverImage.style.objectPosition = 'top center'; // Focuses on the top part of the image
        } else { // On mobile
            // Set height to ensure the image covers the area it's supposed to
            coverImage.style.width = '100%'; // Ensure it covers the width
            coverImage.style.height = 'auto';  // Set height auto to maintain aspect ratio
            coverImage.style.objectFit = 'cover';
            coverImage.style.objectPosition = 'top center'; // Keep focus on the top
        }
    }

    // Handling for other items' images
    document.querySelectorAll('.bb-item:not(#item0) img').forEach(img => {
        if (window.innerWidth > 768) {
            img.style.width = '100%';
            img.style.height = (window.innerHeight * 0.75) + 'px';
            img.style.objectFit = 'contain';
            img.style.objectPosition = 'center';
        } else {
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.objectFit = '';
            img.style.objectPosition = '';
        }
    });
}

window.addEventListener('DOMContentLoaded', updateStyles);
window.addEventListener('resize', updateStyles);