function updateStyles() {
    const bbItems = document.querySelectorAll('.bb-item');

    bbItems.forEach(item => {
        const img = item.querySelector('img');
        const textContent = item.querySelector('p');

        // Desktop Layout
        if (window.innerWidth > 768) {
            item.style.display = 'flex';
            item.style.flexDirection = 'row';  // Ensure content is side-by-side
            item.style.alignItems = 'center';
            item.style.justifyContent = 'flex-start'; // Aligns items to the start of the container

            img.style.width = '60%';  // Gives image 60% width of the container
            img.style.height = 'auto';  // Maintain aspect ratio
            img.style.objectFit = 'contain';  // Ensures the entire image is visible without cropping

            textContent.style.width = '40%';  // Gives text 40% width of the container
            textContent.style.padding = '20px';  // Padding for text for better readability
            textContent.style.display = 'block';
            textContent.style.textAlign = 'left';  // Align text to the left
        } else { // Mobile Layout
            // Resets to stack vertically
            item.style.display = 'block';
            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.objectFit = 'contain';

            textContent.style.width = '100%';
            textContent.style.padding = '10px';
            textContent.style.display = 'block';
            textContent.style.textAlign = 'center';
        }
    });
}

window.addEventListener('DOMContentLoaded', updateStyles);
window.addEventListener('resize', updateStyles);
