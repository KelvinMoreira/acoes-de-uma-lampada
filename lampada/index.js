var ligar = document.querySelector('#botaoLigar')
var desligar = document.querySelector('#botaoDesligar')
var lampada = document.querySelector('#imageLampada')

function ligarLampada(){
    imageLampada.src = 'img/ligada.jpg'
}

function desligarLampada(){
    imageLampada.src = 'img/desligada.jpg'
}

function quebrarLampada(){
    imageLampada.src = 'img/quebrada.jpg'
}
