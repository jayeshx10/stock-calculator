const inputs = document.querySelectorAll(".inputs");
const btn = document.querySelector("#check-btn");
const container = document.querySelector(".container");
const output = document.querySelector(".output");

function displayMsg(color, msg){
    container.style.border = `0.2rem solid ${color}`;
    output.style.color = color;
    output.style.display = "block";
    output.innerHTML = msg;
}

function clearInputs(){
    //clear out the inputs
    for(let input of inputs){
        input.value = "";
    }
}

function calculate_ProfitLoss(initialPrice, currPrice, quantity){
    if(initialPrice > currPrice){ //LOSS CONDITION
        let loss = (initialPrice -  currPrice) * quantity;
        let lossPercentage = (loss/initialPrice)* 100;

        let message = `You have suffered a loss of ${loss.toFixed(2)}rs and the loss percentage is ${lossPercentage.toFixed(2)}%`;
        displayMsg("red", message);
        clearInputs();
    } 
    else if(initialPrice < currPrice){
        let profit = (currPrice - initialPrice)*quantity;
        let profitPercentage = (profit/initialPrice)* 100;

        let message = `You have gained a profit of ${profit.toFixed(2)}rs and the profit percentage is ${profitPercentage.toFixed(2)}%`;
        displayMsg("green", message);
        clearInputs();
    }
    else{
        let message = "You have neither suffered loss nor gained any profits";
        displayMsg("white", message);
        clearInputs();
    }
}

function clickHandler(){
    let initialPrice = Number(inputs[0].value);
    let currPrice = Number(inputs[2].value);
    let quantity = Number(inputs[1].value);

    if(inputs[0].value === "" || inputs[1].value === "" || inputs[2].value === ""){
        displayMsg("red", "Please enter all the fields.");
        clearInputs();
    }
    else if(initialPrice < 0 || quantity < 0 || currPrice < 0){
        displayMsg("red", "Stock prices or quantity cannot be negative.");
        clearInputs();
    }
    else{
        if(quantity == 0){
            displayMsg("red", "Stock quantities cannot be zero.");
            clearInputs();
        }
        else{ //actual calculation
            calculate_ProfitLoss(initialPrice, currPrice, quantity);
        }
    }
}

btn.addEventListener('click', clickHandler);