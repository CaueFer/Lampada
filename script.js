
const turnOn = document.querySelector('[data-lamp-on]');
const turnOff = document.querySelector('[data-lamp-off]');
const lampImg = document.querySelector('[data-lamp-img]');
const lampText = document.querySelector('[data-lamp-text]');

function lampOn () {
    lampImg.src = "SRC/lamp-on.png";
    lampText.innerText = `Ligado`
}

function lampOff () {
    lampImg.src = "SRC/lamp-off.png";
    lampText.innerText = `Desligado`
}

function ConectLamp () {
    lampImg.src = "SRC/lamp-off.png";
    lampText.innerText = `Desligado`
    var element = document.querySelector('[data-button-div]');
    if (element.style.display = "none") {
        element.style.display = "block"
    } return
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lampImg.addEventListener('click', ConectLamp);
