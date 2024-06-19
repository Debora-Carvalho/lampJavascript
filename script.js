const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './images/ligada.png';
        document.body.style.background = '#f0e68c'; // Cor mais clara no fundo
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './images/desligada.png';
        document.body.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'; // gradiente padrão
    }
}

function lampBroken() {
    lamp.src = './images/quebrada.png';
    document.body.style.background = 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'; // gradiente padrão
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);

