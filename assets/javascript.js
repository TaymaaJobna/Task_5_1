let output=document.querySelector(".output");

function Display(Display) {
    output.value +=Display;
}


function Delet() {
    output.value = output.value.slice(0,-1);
}

function Clear() {
    output.value ="";
}

function calc() {
    try {
        output.value=eval(output.value);
    } catch (error) {
        output.value="Error";
    }
}