function updateLayout() {
    const bbItems = document.querySelectorAll('.bb-item');

    bbItems.forEach(item => {
        const img = item.querySelector('img');
        const paragraphs = item.querySelectorAll('p');

        if (window.innerWidth > 768) { // Desktop layout
            item.style.display = 'flex';
            item.style.flexDirection = 'row';  // Ensure content is side-by-side
            item.style.alignItems = 'center';
            item.style.justifyContent = 'center';

            img.style.width = '50%';  // Half the width for the image
            img.style.height = '100vh';  // Full viewport height
            img.style.objectFit = 'contain';  // Maintain aspect ratio without cropping

            // Wrap all paragraphs in a container if not already wrapped
            let textContainer = item.querySelector('.text-container');
            if (!textContainer) {
                textContainer = document.createElement('div');
                textContainer.className = 'text-container';
                paragraphs.forEach(p => {
                    textContainer.appendChild(p);
                });
                item.appendChild(textContainer);
            }

            textContainer.style.width = '50%';  // Half the width for the text
            textContainer.style.display = 'flex';
            textContainer.style.flexDirection = 'column';
            textContainer.style.justifyContent = 'center';
            textContainer.style.alignItems = 'flex-start';  // Align text to the start
            textContainer.style.padding = '0 20px';  // Padding for readability
            textContainer.style.boxSizing = 'border-box';

        } else { // Mobile layout
            item.style.display = 'block';

            img.style.width = '100%';  // Full width for the image
            img.style.height = 'auto';  // Height auto for natural aspect ratio
            img.style.objectFit = 'cover';  // Cover the container

            // Adjust paragraphs back to default if resized to mobile
            paragraphs.forEach(p => {
                p.style.width = '100%';  // Full width for paragraphs
                p.style.padding = '0 10px';  // Padding adjusted for mobile
                p.style.boxSizing = 'border-box';
            });

            if (item.querySelector('.text-container')) {
                // Move paragraphs back out if resized to mobile
                const textContainer = item.querySelector('.text-container');
                while (textContainer.firstChild) {
                    item.appendChild(textContainer.firstChild);
                }
                textContainer.remove();
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', updateLayout);
window.addEventListener('resize', updateLayout);