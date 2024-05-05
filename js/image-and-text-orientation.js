function setupDesktopLayout() {
    const bbItems = document.querySelectorAll('.bb-item');

    bbItems.forEach(item => {
        const img = item.querySelector('img');
        const textContent = item.querySelector('p');

        // Create a container for the text if it doesn't exist to facilitate styling
        if (!textContent.parentElement.classList.contains('text-container')) {
            const textContainer = document.createElement('div');
            textContainer.classList.add('text-container');
            textContainer.appendChild(textContent.cloneNode(true)); // Clone and append to avoid removing the original paragraph
            item.appendChild(textContainer);
            textContent.remove(); // Remove the original paragraph from its initial position
        }

        // Apply styles for desktop
        if (window.innerWidth > 768) {
            item.style.display = 'flex';
            item.style.flexDirection = 'row';
            item.style.alignItems = 'center';
            item.style.justifyContent = 'space-between';

            img.style.width = '50%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';

            const textContainer = item.querySelector('.text-container');
            textContainer.style.width = '50%';
            textContainer.style.display = 'flex';
            textContainer.style.flexDirection = 'column';
            textContainer.style.justifyContent = 'center';
            textContainer.style.padding = '0 20px';
        } else {
            // Ensure mobile layout remains unchanged
            item.style.display = 'block';
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.objectFit = 'cover';

            const textContainer = item.querySelector('.text-container');
            textContainer.style.width = '100%';
            textContainer.style.display = 'block';
            textContainer.style.padding = '0 10px';
        }
    });
}

window.addEventListener('DOMContentLoaded', setupDesktopLayout);
window.addEventListener('resize', setupDesktopLayout);

