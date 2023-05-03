
//______ JS to Python functions ________ //
// Onclick of the button
document.getElementById("btn1").onclick = function () {    
    // Call python's random_python function
    console.log("Calling Python random number...");
    eel.random_python() (function(number){					
        // Update the div with a random number returned by python
        document.getElementById("shell").innerHTML = number;
    })
    }

document.getElementById("btn2").onclick = function displayResult() {
    console.log("Reacting in JS...");
    document.getElementById("terminal").innerHTML += "It's btn2 reaction!";
    }


//Constants 
const txtHello = 'Wake up, Neo...\n';
const txtMatrix = 'Matrix has you...\n';
const txtRabbit = 'Follow the white rabbit.\n';
const txtDots = '...\n';


////////////////////////////////////////////////////////////////////////////
function typeWriter(textArray, currentIndex, currentText, elementId) {
    if (currentIndex >= textArray.length) {
        console.log("return when end..", currentIndex);
        return currentIndex;
    }
    
    currentText += textArray[currentIndex];
    document.getElementById(elementId).innerHTML = currentText;
  
    setTimeout(function() {
      typeWriter(textArray, currentIndex + 1, currentText, elementId);
    }, 300); // скорость печати в миллисекундах
  }
  
 
//TERMINAL HELLO
document.getElementById("btn3").onclick = function () {
    console.log("Start matrix text..");
    //typeHello();
    ret = typeWriter(txtHello.split(""), 0, "", "terminal");
    console.log("its return..", ret);
    }


//_______**On key pressed functions*______///

function onKeyDown(event) {

    //code
    // Call python's random_python function
    console.log("Calling Python...Key down");
    document.getElementById("shell").innerHTML = 'keydown: ' + event.key + '<br>';

    var key_status = 1;
    eel.random_python_text(event.key) (function(text){					
        // Update the div with a random number returned by python
        document.getElementById("terminalAuto").innerHTML += text;
    });

}


function onKeyUp(event) {

    // Call python's random_python function
    console.log("Calling Python...Key UP");
    document.getElementById("shell").innerHTML += 'keyup: ' + event.key + '<br>';

    var key = "Up";
    eel.random_python_text(key) (function(text){					
        // Update the div with a random number returned by python
        document.getElementById("terminalAuto").innerHTML += text;
    })
    }


// var key_pressed1 = document.getElementById('HackerSpace');

document
.addEventListener("keydown", onKeyDown);

document
.addEventListener("keyup", onKeyUp);

// key_pressed1
// .addEventListener("keypress", onKeyPress);




//______ Python to JS functions ________ //

//TERMINAL AUTO TEXT
let limit = 0;
function typeAutoText() {
    let interval = setTimeout(function(){
        //call python
        eel.getHackerText() (function(hackerText) {					
            // Update the div with a random number returned from python
            document.getElementById("terminalAuto").innerHTML += hackerText;
        })
        console.log("Limit is: ", limit);
        limit++;
        if (limit == 10) {
            console.log("Limit reached!!!")
            clearTimeout(interval);  //stop timeout func
            return true
        };
        typeAutoText();   // call function to make a loop
    }, 500)
}

document.getElementById("btn4").onclick = function () {
    let i = 0;
    console.log("Start hacker's text from python..");
    document.getElementById("terminalAuto").style.display = "block"; //show autoshell div

    //call func
    typeAutoText();

    
}