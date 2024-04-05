let firstNum = firstnum;
let secondNum = secondnum;
let output = ansnum;


document.getElementById("btn-add").addEventListener('click', function () {
    
    let resultAdd = parseFloat(firstNum.value) + parseFloat(secondNum.value);
        output.value = resultAdd;
    
    document.getElementById('firstnum').focus();
})


document.getElementById("btn-sub").addEventListener('click', function () {
    
    let resultSub = parseFloat(firstNum.value) - parseFloat(secondNum.value);
        output.value = resultSub;   
    
    document.getElementById('firstnum').focus();

})


document.getElementById("btn-mul").addEventListener('click', function () {
    
    let resultMul = parseFloat(firstNum.value) * parseFloat(secondNum.value);
        output.value = resultMul;   
    
    document.getElementById('firstnum').focus();

})


document.getElementById("btn-div").addEventListener('click', function () {
    
    let resultDiv = parseFloat(firstNum.value) / parseFloat(secondNum.value);
        output.value = resultDiv;   

    document.getElementById('firstnum').focus();

})


let zero = 0;
let one = 1;
let two = 2;
let three = 3;
let four = 4;
let five = 5;
let six = 6;
let seven = 7;
let eight = 8;
let nine = 9;

let displayAns = document.getElementById("display");

document.getElementById("btn-0").addEventListener('click', function () {
    displayAns.value += zero;
});

document.getElementById("btn-1").addEventListener('click', function () {
    displayAns.value += one;
});

document.getElementById("btn-2").addEventListener('click', function () {
    displayAns.value += two;
});

document.getElementById("btn-3").addEventListener('click', function () {
    displayAns.value += three;
});

document.getElementById("btn-4").addEventListener('click', function () {
    displayAns.value += four;
});

document.getElementById("btn-5").addEventListener('click', function () {
    displayAns.value += five;
});

document.getElementById("btn-6").addEventListener('click', function () {
    displayAns.value += six;
});

document.getElementById("btn-7").addEventListener('click', function () {
    displayAns.value += seven;
});

document.getElementById("btn-8").addEventListener('click', function () {
    displayAns.value += eight;
});

document.getElementById("btn-9").addEventListener('click', function () {
    displayAns.value += nine;
});

