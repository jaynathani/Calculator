//Display input
var input = document.getElementById('input');

var operandA = 0;
var operandASelected = false;
var operandB = 0;
var operator;

//button - one
$('#one').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '1';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '1';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - two
$('#two').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '2';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '2';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - three
$('#three').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '3';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '3';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - four
$('#four').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '4';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '4';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - five
$('#five').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '5';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '5';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - six
$('#six').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '6';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '6';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - seven
$('#seven').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '7';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '7';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - eight
$('#eight').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '8';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '8';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - nine
$('#nine').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '9';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '9';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//button - zero
$('#zero').on('click', function(){
  if(operandASelected){
    input.innerHTML = input.innerHTML + '0';
    operandB = parseFloat(input.innerHTML);
    console.log("Operand B value: " + operandB);
  }else{
    input.innerHTML = input.innerHTML + '0';
    operandA = parseFloat(input.innerHTML);
    console.log("Operand A value: "+ operandA);
  }
});

//Operator functions
//add function
$('#add').on('click', function(){
    operandASelected = true;
    operator = 'add';
    input.innerHTML = '';
    console.log("Operator selected : +");
});
var add = function(a, b){
  return a+b;
}

//subtract function
$('#subtract').on('click', function(){
    operandASelected = true;
    operator = 'subtract';
    input.innerHTML = '';
    console.log("Operator selected : -");
});
var sub = function(a, b){
  return a-b;
}

//multiply function
$('#multiply').on('click', function(){
    operandASelected = true;
    operator = 'multiply';
    input.innerHTML = '';
    console.log("Operator selected : x");
});
var mul = function(a, b){
  return a*b;
}

//divide function
$('#divide').on('click', function(){
    operandASelected = true;
    operator = 'divide';
    input.innerHTML = '';
    console.log("Operator selected : /");
});
var div = function(a, b){
  return a/b;
}

//decimal-dot
$('#dot').on('click', function(){
  input.innerHTML = input.innerHTML + '.';
});

//equal function
$('#equal').on('click', function(){
  switch (operator) {
    case 'add': operandA = add(operandA, operandB)
                operandB = 0;
                $('#input').text(operandA);
                console.log("Result = " + operandA);
                break;
    case 'subtract': operandA = sub(operandA, operandB);
                operandB = 0;
                $('#input').text(operandA);
                console.log("Result = " + operandA);
                break;
    case 'multiply': operandA = mul(operandA, operandB);
                operandB = 0;
                $('#input').text(operandA);
                console.log("Result = " + operandA);
                break;
    case 'divide': operandA = div(operandA, operandB);
                operandB = 0;
                $('#input').text(operandA);
                console.log("Result = " + operandA);
                break;

    default:

  }
});

//clear function
$('#clear').on('click', function(){
  location.reload();
});
