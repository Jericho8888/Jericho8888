// Get all elements with the class 'toggleWord'
var toggleWords = document.querySelectorAll(".toggleWord");
var imageContainer = document.getElementById("imageContainer");
var courseraImage = document.getElementById("courseraImage");
var accessImage = document.getElementById("accessImage");
var tesdaImage = document.getElementById("tesdaImage"); // Corrected variable name

// Variable to keep track of the currently displayed image
var currentlyDisplayedImage = null;

// Add click event listeners to each toggle word
toggleWords.forEach(function (toggleWord) {
    toggleWord.addEventListener("click", function () {
        // Show the image container
        imageContainer.classList.remove("hidden");

        // Determine which image to show based on the clicked word
        if (this.textContent === "COURSERA CERTIFICATE") {
            if (currentlyDisplayedImage === "coursera") {
                courseraImage.style.display = "none";
                currentlyDisplayedImage = null;
            } else {
                courseraImage.style.display = "block";
                accessImage.style.display = "none";
                tesdaImage.style.display = "none";
                currentlyDisplayedImage = "coursera";
            }
        } else if (this.textContent === "ACCESS CERTIFICATE") {
            if (currentlyDisplayedImage === "access") {
                accessImage.style.display = "none";
                currentlyDisplayedImage = null;
            } else {
                accessImage.style.display = "block";
                courseraImage.style.display = "none";
                tesdaImage.style.display = "none";
                currentlyDisplayedImage = "access";
            }
        } else if (this.textContent === "TESDA CERTIFICATE") {
            if (currentlyDisplayedImage === "tesda") {
                tesdaImage.style.display = "none";
                currentlyDisplayedImage = null;
            } else {
                tesdaImage.style.display = "block";
                courseraImage.style.display = "none";
                accessImage.style.display = "none";
                currentlyDisplayedImage = "tesda";
            }
        }
    });
}); 

// Print button functionality
document.getElementById('print-btn').addEventListener('click', function () {
    window.print();
});