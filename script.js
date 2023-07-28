let firstNum = "", secondNum = "", firstNumCheck = true, operator_symbol="", final_output = "", error = false;
function display(){
    if(error == true){
        display_text.innerHTML = "MATH ERROR, AC to restart";
        return;
    }
    display_text = document.querySelector("#screen");
    if(operator_symbol == "=" && secondNum != ""){
        display_text.innerHTML = final_output.toString();
        return
    }
    else if(operator_symbol == "=" && secondNum == ""){
        final_output = firstNum;
        display_text.innerHTML = firstNum;
        return 
    }
    console.log(firstNum, operator_symbol, secondNum, final_output)
    display_text.innerHTML = firstNum + operator_symbol + secondNum;
}

function number_onclick(number){
    if(firstNumCheck){
        firstNum += number;
    }
    else{
        secondNum += number;
    }
    display()
}

function perform_operation(){
    switch (operator_symbol){
        case "+":
            final_output = `${parseInt(firstNum) + parseInt(secondNum)}`;
            break;
        case "-":
            final_output = `${parseInt(firstNum) - parseInt(secondNum)}`;
            break;
        case "/":
            if(parseInt(secondNum) == 0){
                console.log("hello");
                error = true;
            }
            else{
                final_output = `${parseInt(firstNum) / parseInt(secondNum)}`;
            }
            break;
        case "x":
            final_output = `${parseInt(firstNum) * parseInt(secondNum)}`;
            break;
    }
    if(error){return}
    console.log(final_output);
    firstNum = final_output;
    secondNum = ""
    firstNumCheck = false
}

function clear_data(){
    console.log("clear")
    firstNum = "";
    secondNum = "";
    firstNumCheck = true;
    operator_symbol="";
    final_output = "";
    error = false;
    display()
}

function operator_onclick(operator){
    if(operator_symbol == "" || secondNum == ""){
        operator_symbol = operator;
        firstNumCheck = false;
        return display()
    }
    perform_operation()    
    operator_symbol = operator;
    return display()
    
}
    

