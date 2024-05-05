function updateStyles() {
    const coverImage = document.querySelector('#item0 .cover-image');
    if (coverImage) {
        // Desktop layout
        if (window.innerWidth > 768) {
            coverImage.style.height = (window.innerHeight * 0.80) + 'px';
            coverImage.style.width = '50%'; // Half the container width for side-by-side layout
            coverImage.style.objectFit = 'contain';
            coverImage.style.objectPosition = 'top center';
        } else { // Mobile layout
            coverImage.style.width = '100%'; // Full width
            coverImage.style.height = 'auto';  // Auto height to maintain aspect ratio
            coverImage.style.objectFit = 'cover';
            coverImage.style.objectPosition = 'top center';
        }
    }

    // Adjust styles for all bb-items on desktop
    document.querySelectorAll('.bb-item').forEach(item => {
        const img = item.querySelector('img');
        const textContent = item.querySelector('p');

        if (window.innerWidth > 768) {
            // Ensure the container is flex to align items side by side
            item.style.display = 'flex';
            item.style.flexDirection = 'row';
            item.style.alignItems = 'center';
            item.style.justifyContent = 'space-between';

            img.style.width = '50%'; // Image takes half the width
            img.style.height = (window.innerHeight * 0.75) + 'px';
            img.style.objectFit = 'contain';
            img.style.objectPosition = 'center';

            textContent.style.width = '50%'; // Text takes the other half
            textContent.style.display = 'block';
            textContent.style.padding = '20px';
            textContent.style.textAlign = 'left';
            textContent.style.overflow = 'auto'; // Ensures text is scrollable if it overflows
        } else {
            // Reset styles for mobile layout
            item.style.display = 'block';

            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.objectFit = 'cover';
            img.style.objectPosition = 'top center';

            textContent.style.width = '100%';
            textContent.style.display = 'block';
            textContent.style.padding = '10px';
            textContent.style.textAlign = 'center';
            textContent.style.overflow = 'hidden'; // Prevent text overflow on mobile
        }
    });
}

window.addEventListener('DOMContentLoaded', updateStyles);
window.addEventListener('resize', updateStyles);
