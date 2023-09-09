const inputOne = document.querySelector('.inputOne')
const inputTwo = document.querySelector('.inputTwo')
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus')
const multiplicationBtn = document.querySelector('.multiplication')
const divisionBtn = document.querySelector('.division')
const btnResult = document.querySelector('.btnResult')
const resultEl = document.querySelector('.result')

let action = '+'

plusBtn.onclick = function(){
    action = '+'
}
minusBtn.onclick = function(){
    action = '-'
}
multiplicationBtn.onclick = function(){
    action = '*'
}
divisionBtn.onclick = function(){
    action = '/'
}

function printResult(result){
    if(result<0){
        resultEl.style.color = 'red'
    }else{
        resultEl.style.color = 'green'
    }
    resultEl.textContent = result
}

    btnResult.onclick = function(){

    if(action === '+'){
        const sum = Number(inputOne.value) + Number(inputTwo.value)
        printResult(sum)
    }else if(action === '-'){
        const sum = Number(inputOne.value) - Number(inputTwo.value)
        printResult(sum)
    }else if(action === '*'){
        const sum = Number(inputOne.value) * Number(inputTwo.value)
        printResult(sum)
    }else if(action ==='/'){
        const sum = Number(inputOne.value) / Number(inputTwo.value)
        printResult(sum)
    }
}

    
    