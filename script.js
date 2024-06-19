const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const headerText = document.getElementById('headerText');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './images/ligada.png';
        document.body.style.background = 'radial-gradient(circle, #f0e68c 20%, #01112e)'; // Cor mais clara
        headerText.textContent = 'Apague as luzes!';
        headerText.style.color = '#2a5298';
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './images/desligada.png';
        document.body.style.background = 'linear-gradient(135deg, #01112e 0%, #2a5298 100%)'; // gradiente padrão
        headerText.textContent = 'Acenda as luzes!';
        headerText.style.color = '#ffffff';
    }
}

function lampBroken() {
    lamp.src = './images/quebrada.png';
    document.body.style.background = 'linear-gradient(135deg, #01112e 0%, #2a5298 100%)'; // gradiente padrão
    headerText.textContent = 'Oh não... você a quebrou!';
    headerText.style.color = '#ffffff';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken);
