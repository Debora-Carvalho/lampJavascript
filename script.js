const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn (){
    if (!isLampBroken()){
        lamp.src = './images/ligada.png'
    }  
}

function lampOff (){
    if (!isLampBroken()){
    lamp.src = './images/desligada.png'
    }
}

function lampBroken (){
    lamp.src = './images/quebrada.png'
}

turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lampOff.addEventListener ('dblclick', lampBroken);