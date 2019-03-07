/*
const display = document.querySelector('.display');
document.querySelectorAll('.digits button, .operations button').forEach(button => button.addEventListener ('click',digitOperPressed) );
function digitOperPressed (e) {
    display.value += e.target.innerText;
}
document.querySelector('.equal').addEventListener('click', equalPressed);
function equalPressed () {
    display.value = eval(display.value);
}
document.querySelector('.cancel').addEventListener('click', cancelPressed);
function cancelPressed () {
    display.value = eval (display.value);
}

function del () {

}*/
let headingElement = document.getElementById('main-heading');
console.log(headingElement.innerHTML);
let newHeadingText = prompt('please provide a new heading: ');
headingElement.innerHTML = newHeadingText;