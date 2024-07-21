let calculation = document.querySelector('.js-result')
.innerHTML = localStorage.getItem('calculation')
|| '';
function updateCalculation(value){
calculation += value;
document.querySelector('.js-result')
.innerHTML = calculation;
storeValue();
}

function storeValue(){
localStorage.setItem('calculation', calculation);
}