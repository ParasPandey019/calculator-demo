let count = 0;
let expression = "";



function buttonClick(id){
    var disp = document.getElementById("display");
    var elem = document.getElementById(id);
    var value = elem.innerHTML;
    disp.innerHTML = disp.innerHTML + value;
    expression = disp.innerHTML;
}




function chooseSign(){
    var disp = document.getElementById("display");
    var value = (count%2 == 0)?"-":"+";
    var curr = disp.innerHTML;
    if(curr=="" || curr=="+" || curr =="-"){
        count++;
        disp.innerHTML = value;
        expression = value;
    }
}

function clearButton(){
    var disp = document.getElementById("display");
    disp.innerHTML = "";
    expression = "";
}

function evaluateAns(){
    var disp = document.getElementById("display");
    var ans = eval(expression);
    disp.innerHTML = ans;
    if(disp.innerHTML == "Infinity"){
        disp.innerHTML = "ERR";
        expression = "";
    }
}

