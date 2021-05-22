console.log('load');

//add function
const add = ((a,b) => {return a+b});

//subtract function
const subtract = ((a,b) => {return a-b});

//multiply function
const multiply = ((a,b) => {return a*b});

//divide function
const divide = ((a,b) => {return a/b});

//console.log(add(-5,2));
//console.log(subtract(4,2));
//console.log(multiply(4,2));
//console.log(divide(4,2));

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

//Initialize display
const displayScreen = document.querySelector('#display'); //Tie display to html
let displayValue = "0"; //Initialize displayValue as 0
displayScreen.textContent = displayValue;

//Assign all number buttons
const num_btns = document.querySelectorAll('.number')
//Iterate through all number buttons
num_btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        //console.log("click")
        //console.log(btn.textContent)
        console.log("Pre Logic: Display Value: "+displayValue)

        //Do nothing if the first button you press is zero and zero is displayed
        if(e.target.textContent.toString()==="0" && displayScreen.textContent==="0"){
            //console.log('first click cannot be zero')
            console.log("Post Logic Display Value: "+displayValue)
        }
        else{
            //console.log(displayValue)
            if(displayValue === "0"){displayValue = ""} //If the leading value is 0, set

            //Update display value variable with string concatenation
            displayValue = displayValue + e.target.textContent.toString()
            
            //console.log(displayValue)
            
            //Update final display value
            displayScreen.textContent = displayValue;
            console.log("Post Logic Display Value: "+displayValue)
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
        //Store the operator value
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

const equal_btn = document.querySelector("#equals")
equal_btn.addEventListener('click', (e) => {

})

// Store is null
//First number
// Operator
//If store null? If so store first number
// If not perform operation and store result
// Update result