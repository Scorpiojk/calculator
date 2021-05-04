//

function solution() {
    var answer = document.querySelector("#answer");
    var num1 = Number(document.querySelector("#num1").value);
    var num2 = Number(document.querySelector("#num2").value);
    var select = document.querySelector("select");
    var operator =select.options[select.selectedIndex].value;
    var TheCalculatedAnswer;

    if (operator == "add"){
        TheCalculatedAnswer = num1 + num2;
    }
    else if (operator == "minus"){
        TheCalculatedAnswer = num1 - num2;
    }
    else if (operator == "divide"){
        TheCalculatedAnswer = num1 / num2;
    }
    else if (operator == "multiply"){
        TheCalculatedAnswer = num1 * num2;
    }
    else if (operator == "exponent"){
        TheCalculatedAnswer = num1 * num1;
    }
    else{
        alert("Please select an operator");
        TheCalculatedAnswer = "Invalid Operator";
    }

    answer.innerHTML = TheCalculatedAnswer;
    console.log(TheCalculatedAnswer);
}
