// Zoom preview functionality
const imagesPreview = document.querySelectorAll('.image-previewed');

imagesPreview.forEach((image) => {
    image.addEventListener('click', () => {
        const zoomPreview = document.querySelector('.zoom-preview');
        const zoomedImg = zoomPreview.querySelector('.zoomed-image');
        zoomedImg.src = image.src;
        zoomPreview.classList.add('active');
    });
});

const zoomPreview = document.querySelector('.zoom-preview');
zoomPreview.addEventListener('click', () => {
    zoomPreview.classList.remove('active');
});
