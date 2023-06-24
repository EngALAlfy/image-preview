document.addEventListener("DOMContentLoaded", function() {
    const imagePreview = document.getElementById("image-preview");
    const zoomPreview = document.querySelector(".zoom-preview");
    const zoomedImg = zoomPreview.querySelector(".zoomed-image");

    imagePreview.addEventListener("click", function() {
        const src = this.getAttribute("src");
        zoomedImg.setAttribute("src", src);
        zoomPreview.classList.add("active");
    });

    zoomPreview.addEventListener("click", function() {
        zoomPreview.classList.remove("active");
    });
});
