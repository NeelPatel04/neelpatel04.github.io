const textColumn = document.getElementById('textColumn');
const colorPicker = document.getElementById('colorPicker');
const colorText = document.getElementById('colorText');
const colorCode = document.getElementById('colorCode');
const weatherImage = document.getElementById('weatherImage');

const toggleText = () => {
    textColumn.classList.toggle('show-text');
};

const updateColor = () => {
    const selectedColor = colorPicker.value;
    colorText.style.color = selectedColor;
    colorCode.textContent = `Color code: ${selectedColor}`;
};

const changeImage = () => {
    weatherImage.src = 'images/sunny.jpg';
    weatherImage.alt = 'Sunny Image';
};

textColumn.addEventListener('click', toggleText);
colorPicker.addEventListener('input', updateColor);
weatherImage.addEventListener('click', changeImage);