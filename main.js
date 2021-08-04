const towerHanoi = document.getElementById("torre-hanoi");

const newTowerOne = document.createElement("div");
const newTowerTwo = document.createElement("div");
const newTowerThree = document.createElement("div");
newTowerOne.id = "tower-one";
newTowerTwo.id = "tower-two";
newTowerThree.id = "tower-three";
newTowerOne.classList.add("box");
newTowerTwo.classList.add("box");
newTowerThree.classList.add("box");

function createStick() {
    
    const newContainerStick = document.createElement("div");
    newContainerStick.classList.add("container-stick");

    const newStick = document.createElement("div");
    newStick.classList.add("stick")
    newContainerStick.appendChild(newStick);

    return newContainerStick;
}

function createBox(stick,tower) {

    const newContainer = document.createElement("div");
    newContainer.classList.add("container");
    newContainer.appendChild(stick);
    newContainer.appendChild(tower);

    return newContainer;
}

towerHanoi.appendChild(createBox(createStick(), newTowerOne));
towerHanoi.appendChild(createBox(createStick(), newTowerTwo));
towerHanoi.appendChild(createBox(createStick(), newTowerThree));

const towerOne = document.getElementById('tower-one')
const towerTwo = document.getElementById('tower-two')
const towerThree = document.getElementById('tower-three')

const box = document.querySelectorAll(".container")

for(let i = 1; i <= 4; i++){
    let newDiv = document.createElement('div')
    newDiv.classList.add('disco')
    newDiv.id = 'd' + i
    towerOne.appendChild(newDiv)
}

let firstClick = ""
let secondClick = ""
let validate = false;

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
            let condicao = winCondition(arrFirst, arrSecond);
            if(condicao === true) {
                changeBox(firstClick, secondClick);
            }

            let elementClass = document.querySelector(".transformar")
            elementClass.classList.remove("transformar")

            let towerTwoArr = arrayTratment(box[1])
            let towerThreeArr = arrayTratment(box[2])

            if (victoryVerification(towerTwoArr) === true || victoryVerification(towerThreeArr) === true ) {
                console.log('winner')
            }

            firstClick = ""
            validate = false;
        }
    });
}



const winCondition = (firstClick, secondClick) => {
   
    let item = firstClick[firstClick.length - 1]; 
    let lastClick =secondClick[secondClick.length - 1] 
    
    if ( item !== undefined ) {
        
        if ( item > lastClick || lastClick === undefined ) {
            return true
        }   
    }
    
    return false
}


function arrayTratment(value){
    
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

const changeBox = (firstClick, secondClick) => {
    secondClick.appendChild( firstClick.lastElementChild )
}

function victoryVerification(valorArr){
    const teste = [1, 2, 3, 4]
    if( valorArr.join() === teste.join() ){
        return true
    }
    return false
}
