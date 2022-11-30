const inputs = document.querySelectorAll(".inputs");
const btn = document.querySelector("#check-btn");
const container = document.querySelector(".container");
const output = document.querySelector(".output");

function redMsg(msg){
    container.style.border = "0.2rem solid red";
    output.style.color = "red";
    output.style.display = "block";
    output.innerHTML = msg;
}

function greenMsg(msg){
    container.style.border = "0.2rem solid green";
    output.style.color = "green";
    output.style.display = "block";
    output.innerHTML = msg;
}

function whiteMsg(msg){
    container.style.border = "0.2rem solid white";
    output.style.color = "white";
    output.style.display = "block";
    output.innerHTML = msg;
}

function calculate_ProfitLoss(initialPrice, currPrice, quantity){
    console.log(initialPrice);
    console.log(quantity);
    console.log(currPrice);
    
    if(initialPrice > currPrice){ //LOSS CONDITION
        let loss = (currPrice - initialPrice) * quantity;
        let lossPercentage = (loss/(initialPrice * quantity)) * 100;

        let message = `You have suffered a loss of ${loss.toFixed(2)}rs and the loss percentage is ${lossPercentage.toFixed(2)}%`;

        redMsg(message);

        //clear out the inputs
        for(let input of inputs){
            input.value = "";
        }
    } 
    else if(initialPrice < currPrice){
        let profit = (currPrice - initialPrice)*quantity;
        let profitPercentage = (profit/(initialPrice * quantity)) * 100;

        let message = `You have gained a profit of ${profit.toFixed(2)}rs and the profit percentage is ${profitPercentage.toFixed(2)}%`;

        greenMsg(message);

        //clear out the inputs
        for(let input of inputs){
            input.value = "";
        }
    }
    else{
        let message = "You have neither suffered loss nor gained any profits";
        whiteMsg(message);

        //clear out the inputs
        for(let input of inputs){
            input.value = "";
        }
    }
}

function clickHandler(){
    let initialPrice = inputs[0].value;
    let currPrice = inputs[2].value;
    let quantity = inputs[1].value;

    if(initialPrice === "" || quantity === "" || currPrice === ""){
        redMsg("Please enter all the fields.");

        //clearout the inputs
        for(let input of inputs){
            input.value = "";
        }
    }
    else if(initialPrice < 0 || quantity < 0 || currPrice < 0){
        redMsg("Stock prices or quantity cannot be negative.");

        //clear out the inputs
        for(let input of inputs){
            input.value = "";
        }
    }
    else{
        if(quantity == 0){
            redMsg("Stock quantities cannot be zero.");

            //clear out the inputs
            for(let input of inputs){
                input.value = "";
            }
        }
        else{ //actual calculation
            calculate_ProfitLoss(initialPrice, currPrice, quantity);
        }
    }
}

btn.addEventListener('click', clickHandler);