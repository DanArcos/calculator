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
            //Do nothing
            console.log('first click')
        }
        else{
            //console.log(displayValue)
            displayValue = displayValue + e.target.textContent.toString()
            console.log(displayValue)
            displayScreen.textContent = displayValue;
        }
        

    })
})

const clear_btn = document.querySelector('#clear');
clear_btn.addEventListener('click', (e)=>{
    displayValue = '';
    displayScreen.textContent = '0';
    stored_val = 0;
})

let stored_val = 0;


const operator_btns = document.querySelectorAll('.operator')
operator_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        //store the current display value
        console.log(displayValue)
        stored_val = displayValue;
        console.log(stored_val)
    })
}) 
