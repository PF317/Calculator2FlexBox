// create a button
//write function that changes screen
//target the screen
let screen = document.querySelector('.screen');
// specifically grab all the calculator buttons 
let HTMLelement = document.querySelectorAll('.calculatorButtons');
let clearButton = document.getElementById('clear-btn')
let currentText = '';

function addAllListeners(param){
 
    for (let i = 0; i < param.length; i++){
      if (param[i].innerHTML === '='){
        param[i].addEventListener('click',evaluate);
      } else if(param[i].innerHTML === 'Clear'){
        param[i].addEventListener('click',clear);
      } else  {
        param[i].addEventListener('click',change);
      } 
        
    console.log(param[i].innerHTML)
    } 
}
addAllListeners(HTMLelement)

function change(param){
    if( param === undefined){
        screen.innerHTML = 'Do Math';

    } else {
    currentText = currentText + param.target.innerHTML;
    console.log(currentText);
    screen.innerHTML = currentText;
    }
}
// Input equals '2*3' or '50+30' etc...
   function clear(){
    currentText = '' 
    screen.innerHTML = currentText;
   }
    function evaluate(){
      if(currentText.indexOf('*') >-1 ){
        mult(currentText)
      } else if(currentText.indexOf('+') >-1 ){
        add(currentText)
      } else if(currentText.indexOf('-') >-1 ){
        sub(currentText)
      } else if(currentText.indexOf('/') >-1 ){
        divide(currentText)
      }              
    }

   function add(param){
     // '2+3'   
     let num1 = param.split('+')[0]
     let num2 = param.split('+')[1]

    currentText = parseInt(num1) + parseInt(num2)
    screen.innerHTML = currentText;
   }
   function sub(param){
    let num1 = param.split('-')[0]
    let num2 = param.split('-')[1]
    currentText =  parseInt(num1) - parseInt(num2)
    screen.innerHTML = currentText;    
   }
   function mult(param){
    let num1 = param.split('*')[0]
    let num2 = param.split('*')[1]
    currentText =  parseInt(num1) * parseInt(num2)
    screen.innerHTML = currentText;   
   }
   function divide(param){
    let num1 = param.split('/')[0]
    let num2 = param.split('/')[1]
    currentText =  parseInt(num1) / parseInt(num2)
    screen.innerHTML = currentText;   
   } 
