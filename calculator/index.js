const display = document.getElementById("Display");

function appendToDisplay(input){
    Display.value += input;
}

function clearDisplay(){
    Display.value = "";

}

function calculate(){
    try{
        Display.value = eval(display.value);
    }
    catch(error){
        Display.value = "Error";
    }
}
function deleteLastCharacter(){
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
}