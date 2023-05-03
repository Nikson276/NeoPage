
//Constants _______________________________________
const txtHello = 'Wake up, Neo...';
const txtMatrix = 'The Matrix has you...';
const txtRabbit = 'Follow the white rabbit.';
const txtKnock = 'Knock, Knock, Neo.';
const delay = 300; //typing speed

var escp_ok = true; //repeat escape cycle control
var ctrl_ok = true; //repeat ctrl + x cycle control

document.getElementById("btn_continue").onclick = function () {
    document.getElementById("intro-box").style.display = "none";
    console.log("Typing Hello");
    ShowMessage(txtHello); 
}

// Type writer effect _______________________________________
function typeWriter(textArray, currentIndex, currentText, elementId) {  
    
    // check when message ends
    if (currentIndex >= textArray.length) {
        console.log("Вывели всю фразу, выход..", currentIndex);
        // Ожидание после фразы
        setTimeout(function() {
            console.log("Вызываем следующий текст")
            ChoseTxt(textArray); // вызываем функцию со след текстом
          }, 8000); 
          return true;
    }
    
    currentText += textArray[currentIndex];
    document.getElementById(elementId).innerHTML = currentText;

    setTimeout(function() {
        typeWriter(textArray, currentIndex + 1, currentText, elementId);
        }, delay); // скорость печати в миллисекундах
  }
  
 
//TERMINAL HELLO _______________________________________
function ShowMessage(txt) {
    console.log("Start message text:", txt);
    typeWriter(txt.split(""), 0, "", "terminal");
    }

function ChoseTxt(textArray) {
    //берем первую букву текста, чтобы выбрать следующий
    var startLetter = textArray[0];

    switch (startLetter) {
        case 'W': //wake up
        ShowMessage(txtMatrix);

        case 'M': // Matrix
        //show the hint
        console.log("Waiting the Key press ctrl + X..");
        ctrl_ok = false;
        return true;

        case 'F': //Follow
        //refresh flags
        console.log("Мы дошли до конца, ждем Escape");
        escp_ok = false;
        return true;
    }
}
    

//**On key pressed functions  *///
// first reaction on key down
// function onKeyDown(event) {

//     console.log("Typing Hello");
//     ShowMessage(txtHello); 
// }


// Catch all inputs from keyboard _______________________________________
document.addEventListener("keydown", function(event) {
    
    console.log("key pressed:", event.key)
    console.log("ctrl_ok:", ctrl_ok)
    console.log("escp_ok:", escp_ok)
    //Ждем нажатия ctrl + x
    if (
        event.ctrlKey 
        && event.key === "x" 
        && ctrl_ok == false
        ) {
            // выполняем функцию вывода Rabbit
            ctrl_ok = true;
            ShowMessage(txtRabbit);

        } else if ( 
            event.key === "Escape" 
            && escp_ok == false
        ) {
            // выполняем функцию вывода Knock
            escp_ok = true;
            ShowMessage(txtKnock);
            //после 30 секунд покажем Морфиуса
            setTimeout(function(){
                //show Morpheus
                document.getElementById("Morpheus").style.display = "inline-block";
            }, 5000)          
        }

  });
  
