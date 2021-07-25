var startquiz = document.getElementById("start");
var h1El = document.getElementById("codechallenge");
var pEl = document.getElementById("firstp");
var tictoc = document.querySelector("seconds");
var areapregunta = document.getElementById("quiz");
var secondsleft = 75;
var score = 0;
var i;//spec globar counter to check answer


startquiz.addEventListener("click", function () {
    setTime();
    setQuestions();
    h1El.remove();
    pEl.remove();
    startquiz.remove();
});



function setTime() {

    var timerInterval = setInterval(function () {
        secondsleft--;
        tictoc.textContent = secondsleft;

        if (secondsleft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }


    }, 1000);
}


function setQuestions() {
    var preguntas = [
        "What is the specific standard language for applying presentation styles to our web pages?",
        "What is the 'class' attribute for(in html)?",
        "function to create and event in a web page?"
    ];
    var answer1 = ["Javascript", "To applied specified atributees to elements which use the same name class.",".event()"];
    var answer2 = ["HTML", "In case you need to delete them",".eventOn()"];
    var answer3 = ["CSS", "To create space around the object","style"];
    var answer4 = ["jQuery", "To give the element an id","click"];
    var correct = ["3", "1","1"];

    for (i = 0; i <= preguntas.length-1; i++) {

        var questionH1 = document.createElement("h1");////for questions
        var answerOL = document.createElement("ol");///order list for answers
        var li1 = document.createElement("li");//for answers1
        var li2 = document.createElement("li");//for answers2
        var li3 = document.createElement("li");//for answers3
        var li4 = document.createElement("li");//for answers4
        questionH1.textContent = preguntas[i];
        li1.textContent = answer1[i];
        li2.textContent = answer2[i];
        li3.textContent = answer3[i];
        li4.textContent = answer4[i];
        li1.setAttribute("data-number", "1");
        li2.setAttribute("data-number", "2");
        li3.setAttribute("data-number", "3");
        li4.setAttribute("data-number", "4");

        areapregunta.appendChild(questionH1);///areapregunta where the questions and answers (div id= quiz) are placed
        areapregunta.appendChild(answerOL);
        answerOL.appendChild(li1);
        answerOL.appendChild(li2);
        answerOL.appendChild(li3);
        answerOL.appendChild(li4);
        
    }
}

li1.addEventListener("click", function (event) {
    if (i == correct[i]) {
        score++;
    }
else {
        secondsleft = secondsleft - 5;
    };
}
);
li2.addEventListener("click", function (event) {
    if (i == correct[i]) {
        score++;
    }
else {
        secondsleft = secondsleft - 5;
    };
}
);
li3.addEventListener("click", function (event) {
    if (i == correct[i]) {
        score++;
    }
else {
        secondsleft = secondsleft - 5;
    }
}
);
li4.addEventListener("click", function (event) {
    if (i == correct[i]) {
        score++;
    }
else {
        secondsleft = secondsleft - 5;
    }
}
);


function gameOver() {



}

/*
What is the specific standard language for
 applying presentation styles to our web pages?
1.-Javascript
2.-html
3.-css-----
4.-jquery

What is the 'class' attribute for(in html)?
1.-To applied specified atributees to elements which use the same name class.
2.-In case you need to delete them
3.-To create space around the object
4.-To give the element an id

*/