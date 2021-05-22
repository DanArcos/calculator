console.log('load');

//add function
const add = ((a,b) => {return a+b});

//subtract function
const subtract = ((a,b) => {return a-b});

//multiply function
const multiply = ((a,b) => {return a*b});

//divide function
const divide = ((a,b) => {return a/b});

console.log(add(-5,2));
console.log(subtract(4,2));
console.log(multiply(4,2));
console.log(divide(4,2));

function operate(operator,a,b){
    switch (operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
        
}

const displayScreen = document.querySelector('#display');
let displayValue = "";

const num_btns = document.querySelectorAll('.number')
num_btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        //console.log("click")
        //console.log(btn.textContent)

        if(btn.textContent==='0' && displayValue===""){
            //Do nothing if the first button you press is zero
            //console.log('first click')
        }
        else{
            //console.log(displayValue)
            displayValue = displayValue + e.target.textContent.toString()
            //console.log(displayValue)
            displayScreen.textContent = displayValue;
        }
        

    })
})

const clear_btn = document.querySelector('#clear');
clear_btn.addEventListener('click', (e)=>{
    displayValue = '';
    displayScreen.textContent = '0';
    
    //reset stored value array to default null
    stored_val = null;
})

let stored_val = null;

//What happens when we press an operator button?
//Store the operator
let operator = null
//Store the value
//Perform the operation
const operator_btns = document.querySelectorAll('.operator')
operator_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        operator = btn.textContent;
        //If this is the first number, store it
        if (stored_val===null){
            if (displayValue ===''){
                stored_val = 0
                console.log("You stored a zero")
                console.log(stored_val)
            } else {
                //Store the value
                stored_val = displayValue
                //Reset display to zero
                displayValue =''
                displayScreen.textContent = '0'
                console.log("You stored a another number")
                console.log(stored_val)
            }
        } 
        
        else {
            //Perform operation
            let comp = operate(operator, Number(stored_val), Number(displayValue));
            displayScreen.textContent = comp
            stored_val = null;
            console.log("You did an operation")
            console.log(comp)
        }
    }) 
})


// Store is null
//First number
// Operator
//If store null? If so store first number
// If not perform operation and store result
// Update result