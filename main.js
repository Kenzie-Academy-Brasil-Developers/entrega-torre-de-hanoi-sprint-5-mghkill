let towerOne = document.getElementById('tower-one')
let towerTwo = document.getElementById('tower-two')
let towerThree = document.getElementById('tower-three')

const box = document.querySelectorAll(".container")

//class transformar

for(let i = 1; i <= 4; i++){
    let newDiv = document.createElement('div')
    newDiv.classList.add('disco')
    newDiv.id = 'd' + i
    towerOne.appendChild(newDiv)

}


let firstClick = ""
let secondClick = ""
let validate = false;
// função para retirar os filhos do bloco
