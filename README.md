Random Fox Image Gallery

This project is a simple web application that allows users to:

1. Fetch and display random fox images using the [RandomFox API](https://randomfox.ca/floof/).
2. Upload images from their local device to the gallery.
3. Replace or delete any fetched images directly from the gallery.

Features

- Fetch Random Fox Image: Users can fetch a random fox image from the API and add it to the gallery.
- Upload User Images: Users can also upload their own images from their local device.
- Replace Image: Users can replace the fox image with a new one fetched from the API.
- Delete Image: Each image in the gallery has a delete button, allowing users to remove it from the gallery.

How It Works

- When the "Get Fox Image" button is clicked, a random image of a fox is fetched from the API and displayed in the gallery. A "Replace Image" button and a "Delete" button appear below each image.
- When the "Replace Image" button is clicked, the current image is replaced with a new one fetched from the API.
- The "Delete" button removes the image from the gallery.
- Users can also upload images using the "Upload" button, which adds the selected image to the gallery with a "Delete" button below it.

Project Structure

- HTML: Contains the basic structure of the webpage, including buttons for fetching and uploading images.
- CSS: Basic styling for the gallery images and buttons.
- JavaScript: Handles the fetching, replacing, uploading, and deleting of images, using `fetch()` for API requests and `FileReader()` for user-uploaded images.

