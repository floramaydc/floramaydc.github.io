function updateLayout() {
    const bbItems = document.querySelectorAll('.bb-item');

    bbItems.forEach(item => {
        const img = item.querySelector('img');
        const paragraphs = item.querySelectorAll('p');

        if (window.innerWidth > 768) { // Desktop layout
            item.style.display = 'flex';
            item.style.flexDirection = 'row';
            item.style.alignItems = 'center';
            item.style.justifyContent = 'center';

            img.style.width = '50%';
            img.style.height = '100%';
            img.style.objectFit = 'contain';

            paragraphs.forEach(p => {
                p.style.width = '50%';
                p.style.padding = '0 20px';
                p.style.boxSizing = 'border-box';
            });
        } else { // Mobile layout
            item.style.display = 'block';

            img.style.width = '100%';
            img.style.height = 'auto';
            img.style.objectFit = 'cover';

            paragraphs.forEach(p => {
                p.style.width = '100%';
                p.style.padding = '0 10px';
                p.style.boxSizing = 'border-box';
            });
        }
    });
}

window.addEventListener('DOMContentLoaded', updateLayout);
window.addEventListener('resize', updateLayout);
