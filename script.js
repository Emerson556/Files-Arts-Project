console.log("Website Loaded");
const images = [
"1913083_orig.jpg",
"images/2015-2.jpg",
"images/2015-3.jpg",
"images/2015-4.jpg",
"images/2015-5.jpg"
];

let currentImage = 0;

function nextImage() {
currentImage++;


if (currentImage >= images.length) {
    currentImage = 0;
}

document.getElementById("gallery-image").src =
    images[currentImage];


}

function previousImage() {
currentImage--;


if (currentImage < 0) {
    currentImage = images.length - 1;
}

document.getElementById("gallery-image").src =
    images[currentImage];


}
