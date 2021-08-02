const disco1 = document.getElementById('1')
const disco2 = document.getElementById('2')
const disco3 = document.getElementById('3')
const disco4 = document.getElementById('4')
const towerOne = document.getElementById('tower-one')
const towerTwo = document.getElementById('tower-two')
const towerThree = document.getElementById('tower-three')
const box2 = document.querySelectorAll('div')
let discos = towerOne.getElementsByClassName('discos')
// precisa saber quais os discos atuais de cada bloco e buscar o menor disco
let validacaoStart = false
let selecionou = false
let id = ""
for(let i = 0; i < box2.length; i++){
    box2[i].addEventListener('click',function(event){
        console.log(id)
        id = event.currentTarget.id
        if(id === "tower-one"){
            validacaoStart = true
        }
        if(validacaoStart === true){
            selecionado()
        }
        mudarBox(id)
        console.log(validacaoStart, selecionou, id)
    })
}

function selecionado(){
    if(selecionou === false){
            selecionou = true
    }
    else{
            selecionou = false
        }
}
// precisa saber quais os discos atuais de cada bloco e buscar o menor disco
function mudarBox(value){
    if(value === 'tower-two' && selecionou === false){
        towerTwo.appendChild(disco1)
    }
    if(value === 'tower-three' && selecionou === false){
        towerThree.appendChild(disco1)
    }
    if(value === 'tower-one' && selecionou === false){
        towerOne.appendChild(disco1)
    }
}