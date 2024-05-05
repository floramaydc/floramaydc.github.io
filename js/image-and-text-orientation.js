document.addEventListener('DOMContentLoaded', function () {
    // Select all bb-item elements
    const items = document.querySelectorAll('.bb-item');

    items.forEach(item => {
        const img = item.querySelector('img');
        const textContent = document.createElement('div');
        textContent.className = 'cover-text';

        // Move all child nodes except the img to a new div
        Array.from(item.childNodes).forEach(child => {
            if (child !== img) {
                textContent.appendChild(child);
            }
        });

        // Clear the item and append structured content
        item.innerHTML = '';
        item.appendChild(img);
        item.appendChild(textContent);

        // Apply styles to img and textContent
        img.style.width = '100%'; // Initial setup for img
        img.style.height = 'auto';
        img.style.objectFit = 'cover'; // Covers the height of the container, maintain aspect ratio

        // Set up flex container styles on the .bb-item
        item.style.display = 'flex';
        item.style.flexDirection = 'column';
        item.style.alignItems = 'center';
        item.style.justifyContent = 'center';
        item.style.width = '100%';
        item.style.height = '100vh';

        // Adjust layout for desktop
        if (window.innerWidth > 768) {
            item.style.flexDirection = 'row';
            img.style.width = '50%';
            img.style.height = '100vh';
            img.style.objectFit = 'contain';

            textContent.style.width = '50%';
            textContent.style.display = 'flex';
            textContent.style.alignItems = 'center';
            textContent.style.justifyContent = 'center';
            textContent.style.textAlign = 'left';
        }
    });

    // Listen for resize events to adjust layout dynamically
    window.addEventListener('resize', function () {
        items.forEach(item => {
            if (window.innerWidth > 768) {
                item.style.flexDirection = 'row';
                item.querySelector('img').style.width = '50%';
                item.querySelector('img').style.height = '100vh';
                item.querySelector('img').style.objectFit = 'contain';

                const textContent = item.querySelector('.cover-text');
                textContent.style.width = '50%';
            } else {
                item.style.flexDirection = 'column';
                item.querySelector('img').style.width = '100%';
                item.querySelector('img').style.height = 'auto';
                item.querySelector('img').style.objectFit = 'cover';

                const textContent = item.querySelector('.cover-text');
                textContent.style.width = '100%';
            }
        });
    });
});
