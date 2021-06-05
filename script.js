console.log('load');

//Initialize values

let stored_val = null; //stored value
let operator = null //store the operator

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
            console.log("Selected Number: "+displayValue)
        }
        else{
            //console.log(displayValue)
            if(displayValue === "0"){displayValue = ""} //If the leading value is 0, set

            //Update display value variable with string concatenation
            displayValue = displayValue + e.target.textContent.toString()
            
            //console.log(displayValue)
            
            //Update final display value
            displayScreen.textContent = displayValue;
            console.log("Selected Number: "+displayValue)
        }
    })
})

//Link clear button to javascript and add event listener
const clear_btn = document.querySelector('#clear');
clear_btn.addEventListener('click', (e) => {
    displayValue = '0';
    displayScreen.textContent = displayValue;
    
    //reset stored value array to default null
    stored_val = null;

    operator = null;
})

//What happens when we press an operator button?

//Link operator buttons
const operator_btns = document.querySelectorAll('.operator')
//Iterate through operator buttons.
operator_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        //If no button has been pressed
        if(operator === null){
            //Store Operator
            operator = btn.textContent;

            //Store value of display valuie
            stored_val = displayScreen.textContent

            console.log("Operator: " + operator)
            console.log("Stored Val: " + stored_val)

            displayValue = ''

        }
        else{
            console.log('Old Operator: ' + operator)
            console.log("Operating...")
            stored_val = operate(operator, Number(stored_val), Number(displayScreen.textContent))
            
            console.log("Computed Value: " + stored_val)

            

            if (stored_val === Infinity){
                displayScreen.textContent = "Nice Try"
            }
            else {
                //Update screen for the new stored value
                displayScreen.textContent = stored_val
            }
            console.log("New Stored Value:" + stored_val)

            displayValue = ''
            
            operator = btn.textContent;
            console.log('New Operator ' + operator)

        }
        btn.classList.add("selected")       
    })
})

const equal_btn = document.querySelector("#equals")
equal_btn.addEventListener("click", (e) => {
    if(operator === null){
        //Do nothing
        console.log('No Operator Selected')
    }
    else{
        console.log('Equals: There is an operator')
        let new_val = operate(operator, Number(stored_val), Number(displayScreen.textContent))
        //update screen for new_val
        if (new_val === Infinity){
            displayScreen.textContent = "Nice Try"
        }
        else{
            console.log(new_val)
            displayValue = new_val
            displayScreen.textContent = new_val

            displayValue = ''

            operator = null
        }  
    }
})
