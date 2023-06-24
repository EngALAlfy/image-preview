# Image Preview

This project demonstrates a simple image preview feature. When a user clicks on an image, it opens up in a zoomed-in preview for a better view.

## Usage

1. Include the necessary JavaScript and CSS files in your HTML document.

    ```html
    <link rel="stylesheet" href="path/to/image-preview.css">
    <script src="path/to/image-preview.js"></script>
    ```

2. Add the `image-previewed` class to the image elements that you want to enable the preview for.

    ```html
    <img class="image-previewed" src="path/to/image.jpg" alt="Image">
    ```

3. Initialize the image preview feature by calling the `initializeImagePreview()` function.

    ```javascript
    initializeImagePreview();
    ```

4. Run your web page and click on any image with the `image-previewed` class to see the zoomed-in preview.

## Customization

You can customize the appearance and behavior of the image preview feature by modifying the CSS file `image-preview.css`. Feel free to tweak the styles according to your project's needs.

## Compatibility

The image preview feature is compatible with modern web browsers, including Chrome, Firefox, Safari, and Edge.


