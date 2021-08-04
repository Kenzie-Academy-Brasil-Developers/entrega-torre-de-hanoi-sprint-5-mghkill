const section = document.getElementById("section")
// chamar criarBox 3 vezes dentro da section
function criarBox(value){
    const divCounteiner = document.createElement('div')
    const divCounteinerLinha = document.createElement('div')
    const divLinha = document.createElement('div')
    divCounteinerLinha.appendChild(divLinha)
    divCounteiner.appendChild(divCounteinerLinha)
    divCounteiner.id = "c" + value
    divCounteiner.classList.add("container")
    divCounteinerLinha.classList.add("container-linha")
    divLinha.classList.add("linha")
    section.appendChild(divCounteiner)
    
}
for(let i = 1; i <= 3; i++){
     criarBox(i)
}
const tower1 = document.getElementById('c1')
const tower2 = document.getElementById('c2')
const tower3 = document.getElementById('c3')
const towerOne = document.createElement('div')
const towerTwo = document.createElement('div')
const towerThree = document.createElement('div')
towerOne.classList.add('box')
towerTwo.classList.add('box')
towerThree.classList.add('box')
tower1.appendChild(towerOne)
tower2.appendChild(towerTwo)
tower3.appendChild(towerThree)


const box = document.querySelectorAll(".container")


for(let i = 1; i <= 4; i++){
    let newDiv = document.createElement('div')
    newDiv.classList.add('disco')
    newDiv.id = 'd' + i
    towerOne.appendChild(newDiv)

}

const p = document.getElementById('contador')
let firstClick = ""
let secondClick = ""
let validate = false;
let count = 0
p.innerHTML = count
for(let i = 0; i < box.length; i++) {

    box[i].addEventListener("click",function(event) {

        const call = event.currentTarget;
        
        if(validate === false) {

            firstClick = call.querySelector(".box");
            call.classList.add("transformar")
            validate = true;
        }
        else {
            
            secondClick = call.querySelector(".box");

            let arrFirst = tratamentoDeArray(firstClick)
            let arrSecond = tratamentoDeArray(secondClick)
            let condicao = condicaoTroca(arrFirst, arrSecond);
            if(condicao === true) {
                count++
                p.innerHTML = count
                mudarBox(firstClick, secondClick);
            }

            let elementClass = document.querySelector(".transformar")
            elementClass.classList.remove("transformar")

            let towerTwoArr = tratamentoDeArray(box[1])
            let towerThreeArr = tratamentoDeArray(box[2])

            if (verificaVitoria(towerTwoArr) === true || verificaVitoria(towerThreeArr) === true ) {
                modal()
            }

            firstClick = ""
            validate = false;
        }
    });

}



const condicaoTroca = (firstClick, secondClick) => {
    let item = firstClick[firstClick.length - 1]; 
    let lastClick =secondClick[secondClick.length - 1] 
    
    if ( item !== undefined ) {
        
        if ( item > lastClick || lastClick === undefined ) {
            return true
        }
        
    }
    
    return false

}



function tratamentoDeArray(value){
    
    const arr = value.getElementsByClassName('disco')
    let arr2 = []

    
    
    for ( let i = 0; i < 4; i++ ) {
        if(arr[i] === undefined) {
            return arr2;
        }
            let a = arr[i].id;

            arr2.push(Number(a[1]))
    }

    return arr2;
}

const mudarBox = (firstClick, secondClick) => {
    secondClick.appendChild( firstClick.lastElementChild )
}

function verificaVitoria(valorArr){
    const teste = [1, 2, 3, 4]
    if( valorArr.join() === teste.join() ){
        return true
    }
    return false
}

function modal(){
    const modalId = document.getElementById("modal-vitoria")
    const modalText = document.getElementById("modal-text")
    modalText.innerHTML = `Você finalizou com ${count} jogadas!`
    modalId.classList.add('mostrar')
}

const button = document.getElementById("button")

button.addEventListener('click', refresh)

function refresh(){
    window.location.reload();
}

