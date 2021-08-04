const towerHanoi = document.getElementById("tower-hanoi")
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
    towerHanoi.appendChild(divCounteiner)
    
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

// CODIGO DA TORRE DE HANOI HTML PELO DOM ALDENIVAN
// const towerHanoi = document.getElementById("torre-hanoi");

// const newTowerOne = document.createElement("div");
// const newTowerTwo = document.createElement("div");
// const newTowerThree = document.createElement("div");
// newTowerOne.id = "tower-one";
// newTowerTwo.id = "tower-two";
// newTowerThree.id = "tower-three";
// newTowerOne.classList.add("box");
// newTowerTwo.classList.add("box");
// newTowerThree.classList.add("box");

// function createStick() {
    
//     const newContainerStick = document.createElement("div");
//     newContainerStick.classList.add("container-stick");

//     const newStick = document.createElement("div");
//     newStick.classList.add("stick")
//     newContainerStick.appendChild(newStick);

//     return newContainerStick;
// }

// function createBox(stick,tower) {

//     const newContainer = document.createElement("div");
//     newContainer.classList.add("container");
//     newContainer.appendChild(stick);
//     newContainer.appendChild(tower);

//     return newContainer;
// }

// towerHanoi.appendChild(createBox(createStick(), newTowerOne));
// towerHanoi.appendChild(createBox(createStick(), newTowerTwo));
// towerHanoi.appendChild(createBox(createStick(), newTowerThree));

// const towerOne = document.getElementById('tower-one')
// const towerTwo = document.getElementById('tower-two')
// const towerThree = document.getElementById('tower-three')

const box = document.querySelectorAll(".container")

for(let i = 1; i <= 4; i++){
    let newDiv = document.createElement('div')
    newDiv.classList.add('disk')
    newDiv.id = 'd' + i
    towerOne.appendChild(newDiv)
}

const counter = document.getElementById('counter')
let firstClick = ""
let secondClick = ""
let validate = false;
let count = 0
counter.innerHTML = count

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

            let arrFirst = arrayTratment(firstClick)
            let arrSecond = arrayTratment(secondClick)
            let condition = winCondition(arrFirst, arrSecond);
            if(condition === true) {
                count++
                counter.innerHTML = count
                changeBox(firstClick, secondClick);
            }

            let elementClass = document.querySelector(".transformar")
            elementClass.classList.remove("transformar")

            let towerTwoArr = arrayTratment(box[1])
            let towerThreeArr = arrayTratment(box[2])
  
            if (victoryVerification(towerTwoArr) === true || victoryVerification(towerThreeArr) === true ) {
                modal()
            }

            firstClick = ""
            validate = false;
        }
    });
}



const winCondition = (firstClick, secondClick) => {
   
    let item = firstClick[firstClick.length - 1]; 
    let lastClick = secondClick[secondClick.length - 1] 
    
    if ( item !== undefined ) {
        
        if ( item > lastClick || lastClick === undefined ) {
            return true
        }   
    }
    
    return false
}


function arrayTratment(value){
    
    const arr = value.getElementsByClassName('disk')
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

const changeBox = (firstClick, secondClick) => {
    secondClick.appendChild( firstClick.lastElementChild )
}

function victoryVerification(valorArr){
    const test = [1, 2, 3, 4]
    if( valorArr.join() === test.join() ){
        return true
    }
    return false
}

function modal(){
    const modalId = document.getElementById("modal-victory")
    const modalText = document.getElementById("modal-text")
    modalText.innerHTML = `Você finalizou com ${count} jogadas!`
    modalId.classList.add('show')
}

const button = document.getElementById("button")

button.addEventListener('click', refresh)

function refresh(){
    window.location.reload();
}

