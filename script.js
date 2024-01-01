let outputScreen = document.getElementById("output-screen")


function display(num){
    outputScreen.value  += num;
}

function claculate() {

    try{

        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("invalid entry")
    }
}

function clear() {

    outputScreen.value = "";


}
function del() {4

    outputScreen.value = outputScreen.value.slice(0,-1)

     
}