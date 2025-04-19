// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function(){
    document.getElementById('textContent').textContent = "The text has been changed!";
});

// Modify CSS styles via Javascript
document.getElementById('changeStyleButton').addEventListener('click', function(){
    document.getElementById('textContent').style.color = "blue";
    document.getElementById('textContent').style.fontSize = "20px";
});

// Add or remove an element when a button is clicked
document.getElementById('toggleElementBtn').addEventListener('click', function(){
    let dynamicElement = document.getElementById('dynamicElement');
    if (dynamicElement.style.display === "none") {
        dynamicElement.style.display = "block";
    } else {
        dynamicElement.style.display = "none";
    }
});