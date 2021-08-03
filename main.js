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


const start = (event) => {

    let call = event.currentTarget;
    
    if(validate === false) {

        firstClick = call.querySelector(".box");
        validate = true;
    }
    else {
        
        secondClick = call.querySelector(".box");
        validate = false;
    }
}

for(let i = 0; i < box.length; i++) {

    box[i].addEventListener("click", start);
}

const condicaoTroca = (firstClick, secondClick) => {
    // Criar uma função para chamar aqui dentro
    // que tranforme o valor de first e second em numeros
}


function tratamentoDeArray(value){
    
    const arr = value.getElementsByClassName('disco')
    let arr2 = []

    if(arr[0] === undefined) {
        return arr2;
    }
    
    for ( let i = 0; i < 4; i++ ) {
            let a = arr[i].id;

            arr2.push(Number(a[1]))
    }

    return arr2;
}




        // let arrFirst = tratamentoDeArray(firstClick)
        // let arrSecond = tratamentoDeArray(secondClick)
        

        // console(arrFirst, arrSecond)
        // let condicao = condicaoTroca(arrFirst, arrSecond);
        // console.log(condicao)
        // if(condicao === true) {
        //     mudarBox(firstClick, secondClick);
        // }
       
        // console.log(firstClick, secondClick);
        // Criar função de condição de troca;y