let imagesArray = ['lake-1681485_1280_1_11zon.jpg', 'lake-8847415_1280_2_11zon.webp', 'mountains-736886_1280_3_11zon.jpg', 'mountains-7777164_1280_4_11zon.webp', 'nature-7736939_1280_5_11zon.webp', 'pagoda-8612554_1280_6_11zon.webp', 'river-7489170_1280_7_11zon.jpg', 'river-8018379_1280_8_11zon.webp', 'river-8279466_1280_9_11zon.webp', 'sunrise-8290940_1280_10_11zon.webp', 'vineyard-428041_1280_11_11zon.jpg', 'waterfall-8363216_1280_12_11zon.jpg'];

function render() {
    renderHTML();
    renderImages();
    
}


function renderHTML() {
    let siteContent = document.getElementById('content');
    siteContent.innerHTML = '';
    siteContent.innerHTML = getHtmlTemplate();
}


function renderImages() {
    let images = document.getElementById('images');
    images.innerHTML = '';
    for (let index = 0; index < imagesArray.length; index++) {
        images.innerHTML += getImagesTemplate(index);
        
    }
}


function getHtmlTemplate() {
    return `   
        <div id="overlay" class="d_none" onclick="toggleOverlay()">
        </div>
        <h1>Your personal photo album</h1>
        <div id="images">
        </div>`
}


function getImagesTemplate(index) {
    return `   
        <img src="./img/photos/${imagesArray[index]}" alt="" onclick="toggleOverlay(); renderDialog(${index});">`
}


function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
}


function renderDialog(index) {
    let overlayRef = document.getElementById('overlay');
    overlayRef.innerHTML = '';
    overlayRef.innerHTML += getDialogTemplate(index);
 }


 function getDialogTemplate(index) {
    return `<div id="dialog" onclick="preventEventBubbling(event)">
            <span id="dialogHeading"><p>${imagesArray[index]}</p><img src="./img/icons8-x-48.png" alt="" onclick="toggleOverlay()"></span>
            <img src="./img/photos/${imagesArray[index]}" alt=""></img>
            <span id="dialogImageSlider"><img src="./img/icons8-arrow-50.png" alt="" onclick="subtractImageCount(${index}, -1)"><span>${index + 1}/12</span><img src="./img/icons8-arrow-50 (1).png" alt="" onclick="addImageCount(${index}, 1)"></span>
        </div>`
 }


 function preventEventBubbling(event) {
    event.stopPropagation();
 }


 function addImageCount(index, operator) {
     if (operator === 1) {
        if (index === imagesArray.length - 1) {
            index = 0; 
        } else {
            index++;
        }
        renderDialog(index);
     }
}


function subtractImageCount(index, operator) {
    if (operator === -1) {
        if (index === 0) {
            index = 11; 
        } else {
            index--;
        }
        renderDialog(index);
     }
}