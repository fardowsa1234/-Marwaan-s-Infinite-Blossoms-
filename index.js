// script.js

function addFlower(imageSrc) {
    // Create a new img element
    const img = document.createElement('img');
    img.src = `/images/${imageSrc}`;
    img.alt = 'Bouquet Flower';
    img.className = 'flower';

    // Add the img to the canvas
    const canvas = document.getElementById('canvas');
    canvas.appendChild(img);
}

function saveBouquet() {
    const canvas = document.getElementById('canvas');
    const bouquet = canvas.innerHTML;

    // Here you can implement functionality to save the bouquet
    // For example, you can save it to localStorage, send it to a server, etc.
    localStorage.setItem('bouquet', bouquet);

    alert('Bouquet saved successfully!');
}

function deleteBouquet() {
    var canvas = document.getElementById('canvas');
    canvas.innerHTML = ''; // Clear the canvas
}

// Optionally, load the saved bouquet when the page loads
window.onload = function() {
    const savedBouquet = localStorage.getItem('bouquet');
    if (savedBouquet) {
        document.getElementById('canvas').innerHTML = savedBouquet;
    }
};
