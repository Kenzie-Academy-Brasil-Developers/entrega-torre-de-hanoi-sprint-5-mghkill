const towerOne = document.getElementById('tower-one')
const towerTwo = document.getElementById('tower-two')
const towerThree = document.getElementById('tower-three')

const box2 = document.querySelectorAll('div')

// função para retirar os filhos do bloco
function retirarId(value){
    let valorAtual = value.firstChild.parentElement.children
    let arr = []
    for(let i = 0; i < valorAtual.length; i++){
        arr.push(Number(valorAtual[i].id))
    }
    return arr
}


function firstChild(value){
    const output = value.firstChild.parentElement.children[0].id
    return Number(output)
};




let validacaoStart = "";
let selecionou = "";
let id = "";

for(let i = 0; i < box2.length; i++){
    box2[i].addEventListener('click',function(event){
        id = event.currentTarget.id
        if(id === 'tower-one'){
            console.log(firstChild(towerOne), retirarId(towerOne))
        }
    })
}
