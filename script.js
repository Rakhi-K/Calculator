//Display value in textbox

// function displayValue(num){
//  let res=document.querySelector("#result")
//   res.value+=num
// }

var displayValue=(num)=>result.value+=num


//functn clearbox is assigned

// function clearBox(){
//   result.value=""     //here id of textbox used- directly
// }

var clearBox=()=>result.value=""


//Evaluate the values

// function evaluateExpression(){
//   let expr= result.value     // CALED THE TXTBOX VALUE
//   let out=eval(expr)         //OUT= EVALUATE(EXPR)
//   result.value= out;         // THE OUTPUT VALUE IS ASSIGNED TO TEXTBOX- RSULT.VALUE AND it is given in = in onclick
// }

var evaluateExpression=()=>result.value=eval(result.value)
