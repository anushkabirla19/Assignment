function updateText() {
    document.getElementById('editable-text').innerText = document.getElementById('input-text').value;
}

function changeFont() {
    document.getElementById('editable-text').style.fontFamily = document.getElementById('font-family').value;
}

function changeSize() {
    document.getElementById('editable-text').style.fontSize = document.getElementById('font-size').value + 'px';
}

function changeColor() {
    document.getElementById('editable-text').style.color = document.getElementById('font-color').value;
}

updateText(); // Call the updateText function to set the initial text
