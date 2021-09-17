var num1 = document.querySelector('#num1');
var num2 = document.querySelector('#num2');
var select = document.querySelector('#select');
var btn = document.querySelector('#btn');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var multi = document.querySelector('#multi');
var devis = document.querySelector('#devis');
var display = document.querySelector('.display') 


btn.addEventListener('click', function (e){
    if(select.value == plus.value){
        display.textContent = Number(num1.value) + Number(num2.value);
    }else if(select.value == minus.value){
        display.textContent = Number(num1.value) - Number(num2.value);
    }else if(select.value == multi.value){
        display.textContent = Number(num1.value) * Number(num2.value);
    }else if(select.value == devis.value){
        display.textContent = Number(num1.value) / Number(num2.value);
    }
})


