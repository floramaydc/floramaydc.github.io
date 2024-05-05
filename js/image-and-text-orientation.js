function updateDesktopLayout() {
    // Only apply changes if the window width is greater than 768px for desktop
    if (window.innerWidth > 768) {
        const bbItems = document.querySelectorAll('.bb-item');

        bbItems.forEach(item => {
            const img = item.querySelector('img');
            const textContent = item.querySelector('p');

            // Apply desktop styles
            item.style.display = 'flex';
            item.style.flexDirection = 'row'; // Content side-by-side
            item.style.alignItems = 'center';
            item.style.justifyContent = 'flex-start';

            img.style.width = '60%'; // Image takes 60% of the width
            img.style.height = 'auto'; // Auto height to maintain aspect ratio
            img.style.objectFit = 'contain';

            textContent.style.width = '40%'; // Text takes the remaining 40%
            textContent.style.padding = '20px';
            textContent.style.display = 'block';
            textContent.style.textAlign = 'left';
        });
    }
}

window.addEventListener('DOMContentLoaded', updateDesktopLayout);
window.addEventListener('resize', updateDesktopLayout);