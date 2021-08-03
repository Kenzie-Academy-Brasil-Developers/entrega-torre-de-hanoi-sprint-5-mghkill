let towerOne = document.getElementById('tower-one')
let towerTwo = document.getElementById('tower-two')
let towerThree = document.getElementById('tower-three')

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

            let arrFirst = tratamentoDeArray(firstClick)
            let arrSecond = tratamentoDeArray(secondClick)
            let condicao = condicaoTroca(arrFirst, arrSecond);
            if(condicao === true) {
                mudarBox(firstClick, secondClick);
            }

            let elementClass = document.querySelector(".transformar")
            elementClass.classList.remove("transformar")

            let towerTwoArr = tratamentoDeArray(box[1])
            let towerThreeArr = tratamentoDeArray(box[2])

            if (verificaVitoria(towerTwoArr) === true || verificaVitoria(towerThreeArr) === true ) {
                console.log('winner')
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
