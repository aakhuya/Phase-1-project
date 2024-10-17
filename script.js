document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("getFoxImageButton");
    const gallery = document.getElementById("gallery");

    async function fetchRandomFoxImage() {
        try {
            const response = await fetch("https://randomfox.ca/floof/");
            const data = await response.json();
            const imageUrl = data.image;

            const newImageItem = document.createElement("li");

            const img = document.createElement("img");
            img.src = imageUrl;
            img.alt = "Random Fox";
            img.style.maxWidth = "300px";
            img.style.margin = "10px";

            const buttonContainer = document.createElement("div");
            buttonContainer.style.display = "flex";
            buttonContainer.style.justifyContent = "center";
            buttonContainer.style.marginTop = "10px";

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.marginRight = "10px";
            deleteButton.addEventListener("click", () => {
                newImageItem.remove();
            });

            const replaceButton = document.createElement("button");
            replaceButton.textContent = "Replace Image";
            replaceButton.style.marginRight = "10px";
            replaceButton.addEventListener("click", async () => {
                const newResponse = await fetch("https://randomfox.ca/floof/");
                const newData = await newResponse.json();
                img.src = newData.image;
            });

            buttonContainer.appendChild(replaceButton);
            buttonContainer.appendChild(deleteButton);

            newImageItem.appendChild(img);
            newImageItem.appendChild(buttonContainer);

            gallery.appendChild(newImageItem);
        } catch (error) {
            console.error("Error fetching fox image:", error);
        }
    }

    button.addEventListener("click", fetchRandomFoxImage);

    function uploadUserImage() {
        const input = document.getElementById('uploadImage');
        const gallery = document.getElementById('gallery');

        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const newImageItem = document.createElement("li");

                const img = document.createElement("img");
                img.src = e.target.result;
                img.alt = 'User-uploaded Image';
                img.style.maxWidth = "300px";
                img.style.margin = "10px";

                const buttonContainer = document.createElement("div");
                buttonContainer.style.display = "flex";
                buttonContainer.style.justifyContent = "center";
                buttonContainer.style.marginTop = "10px";

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.style.marginRight = "10px";
                deleteButton.addEventListener("click", () => {
                    newImageItem.remove();
                });

                buttonContainer.appendChild(deleteButton);

                newImageItem.appendChild(img);
                newImageItem.appendChild(buttonContainer);

                gallery.appendChild(newImageItem);
            };

            reader.readAsDataURL(input.files[0]);
        } else {
            alert("Please select an image file to upload.");
        }
    }

    const uploadButton = document.getElementById('uploadButton');
    uploadButton.addEventListener('click', uploadUserImage);
});



  
