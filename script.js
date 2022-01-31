var result = document.getElementById("result");

function display(val) {

    document.getElementById("result").value += val;

}

function solve() {
    let x = document.getElementById('result').value
    if (x) {
        document.getElementById('result').value = eval(x);
    }
    else{
        document.getElementById('result').value = `Please enter number`;
    }
}

function clearScreen(){
    document.getElementById('result').value="";
}

function back(){
    let y = document.getElementById('result').value;
    document.getElementById('result').value=y.substring(0,y.length-1);
}


