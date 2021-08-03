let towerOne = document.getElementById('tower-one')
let towerTwo = document.getElementById('tower-two')
let towerThree = document.getElementById('tower-three')

const box = document.querySelectorAll(".container")


const createDiv = (value) =>{
    for(let i = 0; i < value; i++){
        let newDiv = document.createElement('div')
        newDiv.classList.add('disco')
        towerOne.appendChild(newDiv)

    }
}

let firstClick = ""
let secondClick = ""
let validate = false;
// função para retirar os filhos do bloco
