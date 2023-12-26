var questions = [
    {
        question: "1) What is the capital of Australia?",
        options :["Sydney","Melbourne","Canberra", "Perth"],
        correct:"Canberra",
    },
    {
        question: "2) Who painted the Mona Lisa? ",
        options :["Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Michelangelo"],
        correct:"Leonardo da Vinci",
    },
    {
        question: "3) What is the largest ocean in the world? ",
        options: ["Atlantic Ocean", "Indian Ocean" ,"Arctic Ocean","Pacific Ocean"],
        correct:"Pacific Ocean",
    },
    {
        question: "4) Which planet is known as the Red Planet?",
        options:[ "Venus", "Mars","Jupiter","Saturn"],
        correct:"Mars",
    },
    {
        question: "5) Who wrote the play Romeo and Juliet?",
        options: ["William Shakespeare","Jane Austen", "Charles Dickens", "F.Scott Fitzgerald"],
        correct:"William Shakespeare",
    },
]
var startContainer = document.getElementById("startContainer");
var displayQues = document.getElementById("displayQues");
var mainOption = document.getElementById("mainOption")
var currentQues = document.getElementById("currentQues");
var totalQues = document.getElementById("totalQues");
var quiz = document.getElementById("quiz");
var resultDisplay = document.getElementById("resultDisplay");
var percentage = document.getElementById("percentage");
var countdownElement = document.getElementById("countdown");
var index = 0;
var marks = 0;


function startQuiz() {
    startContainer.style.display = "none";
    quiz.style.display = "block";
    
}
function showQuestion(){
    displayQues.innerHTML=`
    <p id="displayQues" class="para">${questions[index].question} </p>
    `
   
    for(var i = 0 ; i<questions[index].options.length; i++){
        var optValue = questions[index].options[i];
       var corrValue = questions[index].correct;
mainOption.innerHTML +=`
<button onclick="checkQuestion('${optValue}','${corrValue}')" class="btn">${optValue}</button>
`
}

totalQues.innerHTML= ` <span id="totalQues" class="num2">${questions.length}</span>
`
currentQues.innerHTML = `
<span id="currentQues" class="num1">${index+1}/</span>
`
}
showQuestion();
function nextQuestion(){
    mainOption.innerHTML = ""
    if(index+1 == questions.length){
        quiz.style.display = "none";
        percentage.innerHTML = `<span id="percentage">${((score / questions.length) * 100).toFixed(1)}</span>`;
        
        resultDisplay.style.display = "block"
    }
    else{
        index++;
        showQuestion()
    }
}

function checkQuestion(optionValue, optionIndex) {
    //    e.preventDefault()
console.log(optionValue)
    if (optionValue==optionIndex) {
        marks++;
        console.log(marks);
    }
   
  //  nextQuestion();
}

function countdown() {
    var seconds = 20;

    function updateTimer() {
        countdownElement.innerHTML = seconds + ' seconds';
    }

    function timerTick() {
        if (seconds > 0) {
            seconds -= 1; // Decrease by 2 seconds instead of 1
            updateTimer();
            setTimeout(timerTick, 2000); // Set timeout to 2000 milliseconds (2 seconds)
        } else {
            // When time is up, directly display the result
            quiz.style.display = "none";
            percentage.innerHTML = `<span id="percentage">${(score / questions.length) * 100}</span>`;
            resultDisplay.style.display = "block";
        }
    }

    timerTick(); // Start the countdown
}

// Start the countdown when the page loads
countdown();
