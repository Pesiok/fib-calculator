///// UI
function labelHolder() {
    var input = document.querySelector(".calc-div .input-group input");
  
    input.addEventListener("blur", function(event){
    if(this.value === "") {
      this.classList.remove("has-value");
    } else {
      this.classList.add("has-value");
    }
  });
}
function fib(n) {  
    //for every interation fibNr = pre + pre2
     function fibMemo(i, pre, pre2) {
         //fibMemo(fib number index from 0, 
         // fib number for previous index, 
         // fib numer for pre-previous index)
            return (i == n) ? (pre + pre2) : fibMemo(i+1, pre + pre2, pre);
        }
    return (n == 1 | n == 2) ? 1 : fibMemo(3, 1, 1); 
}
function parseInput(n) {
    return (isNaN(n) === true || n < 1 || n > 1476 ) ? false : parseInt(n, 10);
}
function displayResults(nr, prevNr, input) {
    var outputTag = document.getElementById("result");
    
    if (nr === undefined) {
        outputTag.innerHTML = "<span class='result'>Incorrect value.</span><br> Type in number from 1 to 1476.";
    } else {
        outputTag.innerHTML = "Fibonacci number of index " + input.value + 
            " is: <br><br><span class='result'> " + nr + "</span><br><br>" + 
            "Approximation of &Phi; is: <br><br><span class='result'> " + 
            (nr/prevNr) + "</span>"; 
    }
}
function fibCalculator() {
    var input = document.getElementById('input');
    var outcome = parseInput(input.value);

    if(outcome == false) {
        displayResults();
    } else {
        var number = fib(outcome);
        var prevNumber = (outcome == 1) ? 1 : fib(outcome - 1);

        displayResults(number, prevNumber, input);
    }    
}
///// Init
var init = function() {
    var button = document.getElementById("generate");
    var input = document.getElementById("input")
    
    button.addEventListener("click", fibCalculator);
    input.addEventListener("keyup", function(e){
        (e.keyCode === 13) ? fibCalculator() : e.preventDefault(); 
    });
    
    labelHolder();
}

window.addEventListener("load", init);
    