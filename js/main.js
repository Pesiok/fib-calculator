
///////////////////////UI //////////////////////////////////
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
// To be implemented...
/*
function outputAnimate(element) {
    element.classList.add("output-anim");
}
*/
//////////////////////Calculator functions////////////////////
function fib(n) {  
    //for every interation fibNr = pre + pre2
     function fibMemo(i, pre, pre2) {
            if(i == n) {
                return pre + pre2;
            } else {
                //fibMemo(fib number index from 0, fib number for previous index, fib numer for pre-previous index)
                return fibMemo(i+1, pre + pre2, pre);
            }
        }
    if (n == 1 | n == 2) {
        return 1;
    } else {
        return fibMemo(3, 1, 1);
    }
}
function parseInput(n) {
    if (isNaN(n) === true || n < 1 || n > 1476 )
        {
            console.log("Incorrect input value.");
            return false;
        }
    else {
        return parseInt(n, 10);
    }
}
function fibCalculator() {
    var input = document.getElementById('input');
    var output = document.getElementById('result');
    
    //outputAnimate(output);
         
    output.innerHTML = (function(n) {
        var outcome = parseInput(n);
        if(outcome == false) {
            return "Incorrect value.<br>Type in number from 1 to 1476.";
        } else {
            var number = fib(outcome);
            if (outcome == 1) {
                var numberPrev = 1;
            } else {
                var numberPrev = fib(outcome - 1);
            }
            return "Fibonacci number of index " + input.value + " is: <br><br> " + 
            number + "<br><br>" + "Approximation of &Phi; is: <br><br> " + 
            (number/numberPrev); 
        }
    })(input.value);
}
//////////////////////////Init//////////////////

var init = function() {
    var button = document.getElementById("generate");
    var input = document.getElementById("input")
    
    button.addEventListener("click", fibCalculator);
   // input.addEventListener('input', fibCalculator);
    input.addEventListener("keyup", function(e){
        if(e.keyCode === 13) {
            fibCalculator();
        } else {
            e.preventDefault();
        }
    });
    
    labelHolder();
}

window.addEventListener("load", init);



    