//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome

var questionCount = 0;
var noYeet = 0;
var smallYeet = 0;
var bigYeet = 0;
var YEET = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");

var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");

var q1 = document.getElementById("q1");
var q2 = document.getElementById("q2");
var q3 = document.getElementById("q3");
var q4 = document.getElementById("q4");
var q5 = document.getElementById("q5");
var q6 = document.getElementById("q6");
var q7 = document.getElementById("q7");
var q8 = document.getElementById("q8");
var q9 = document.getElementById("q9");

var num;

var result = document.getElementById("result");

var lastChosen;

var restart = document.getElementById("restart");

var q1a = false;
var q2a = false;
var q3a = false;
var q4a = false;
var q5a = false;
var q6a = false;
var q7a = false;
var q8a = false;
var q9a = false;

var answers = ["", "", "", "", "", "", "", "", ""];

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", function() {
  small(1);
});
q1a1.addEventListener("click", num1);
q1a1.addEventListener("click", function() {
  change1("small");
});
q1a2.addEventListener("click", function() {
  no(1);
});
q1a2.addEventListener("click", num2);
q1a2.addEventListener("click", function() {
  change1("no");
});
q1a3.addEventListener("click", function() {
  yeet(1);
});
q1a3.addEventListener("click", num3);
q1a3.addEventListener("click", function() {
  change1("yeet");
});
q1a4.addEventListener("click", function() {
  big(1);
});
q1a4.addEventListener("click", num4);
q1a4.addEventListener("click", function() {
  change1("big");
});

q2a1.addEventListener("click", function() {
  yeet(2);
});
q2a1.addEventListener("click", num1);
q2a1.addEventListener("click", function() {
  change2("yeet");
});
q2a2.addEventListener("click", function() {
  small(2);
});
q2a2.addEventListener("click", num2);
q2a2.addEventListener("click", function() {
  change2("small");
});
q2a3.addEventListener("click", function() {
  big(2);
});
q2a3.addEventListener("click", num3);
q2a3.addEventListener("click", function() {
  change2("big");
});
q2a4.addEventListener("click", function() {
  no(2);
});
q2a4.addEventListener("click", num4);
q2a4.addEventListener("click", function() {
  change2("no");
});

q3a1.addEventListener("click", function() {
  big(3);
});
q3a1.addEventListener("click", num1);
q3a1.addEventListener("click", function() {
  change3("big");
});
q3a2.addEventListener("click", function() {
  yeet(3);
});
q3a2.addEventListener("click", num2);
q3a2.addEventListener("click", function() {
  change3("yeet");
});
q3a3.addEventListener("click", function() {
  small(3);
});
q3a3.addEventListener("click", num3);
q3a3.addEventListener("click", function() {
  change3("small");
});
q3a4.addEventListener("click", function() {
  no(3);
});
q3a4.addEventListener("click", num4);
q3a4.addEventListener("click", function() {
  change3("no");
});

q4a1.addEventListener("click", function() {
  big(4);
});
q4a1.addEventListener("click", num1);
q4a1.addEventListener("click", function() {
  change4("big");
});
q4a2.addEventListener("click", function() {
  no(4);
});
q4a2.addEventListener("click", num2);
q4a2.addEventListener("click", function() {
  change4("no");
});
q4a3.addEventListener("click", function() {
  yeet(4);
});
q4a3.addEventListener("click", num3);
q4a3.addEventListener("click", function() {
  change4("yeet");
});
q4a4.addEventListener("click", function() {
  small(4);
});
q4a4.addEventListener("click", num4);
q4a4.addEventListener("click", function() {
  change4("small");
});

q5a1.addEventListener("click", function() {
  yeet(5);
});
q5a1.addEventListener("click", num1);
q5a1.addEventListener("click", function() {
  change5("yeet");
});
q5a2.addEventListener("click", function() {
  big(5);
});
q5a2.addEventListener("click", num2);
q5a2.addEventListener("click", function() {
  change5("big");
});
q5a3.addEventListener("click", function() {
  no(5);
});
q5a3.addEventListener("click", num3);
q5a3.addEventListener("click", function() {
  change5("no");
});
q5a4.addEventListener("click", function() {
  small(5);
});
q5a4.addEventListener("click", num4);
q5a4.addEventListener("click", function() {
  change5("small");
});

q6a1.addEventListener("click", function() {
  big(6);
});
q6a1.addEventListener("click", num1);
q6a1.addEventListener("click", function() {
  change6("big");
});
q6a2.addEventListener("click", function() {
  small(6);
});
q6a2.addEventListener("click", num2);
q6a2.addEventListener("click", function() {
  change6("small");
});
q6a3.addEventListener("click", function() {
  no(6);
});
q6a3.addEventListener("click", num3);
q6a3.addEventListener("click", function() {
  change6("no");
});
q6a4.addEventListener("click", function() {
  yeet(6);
});
q6a4.addEventListener("click", num4);
q6a4.addEventListener("click", function() {
  change6("yeet");
});

q7a1.addEventListener("click", function() {
  no(7);
});
q7a1.addEventListener("click", num1);
q7a1.addEventListener("click", function() {
  change7("no");
});
q7a2.addEventListener("click", function() {
  yeet(7);
});
q7a2.addEventListener("click", num2);
q7a2.addEventListener("click", function() {
  change7("yeet");
});
q7a3.addEventListener("click", function() {
  small(7);
});
q7a3.addEventListener("click", num3);
q7a3.addEventListener("click", function() {
  change7("small");
});
q7a4.addEventListener("click", function() {
  big(7);
});
q7a4.addEventListener("click", num4);
q7a4.addEventListener("click", function() {
  change7("big");
});

q8a1.addEventListener("click", function() {
  small(8);
});
q8a1.addEventListener("click", num1);
q8a1.addEventListener("click", function() {
  change8("small");
});
q8a2.addEventListener("click", function() {
  yeet(8);
});
q8a2.addEventListener("click", num2);
q8a2.addEventListener("click", function() {
  change8("yeet");
});
q8a3.addEventListener("click", function() {
  big(8);
});
q8a3.addEventListener("click", num3);
q8a3.addEventListener("click", function() {
  change8("big");
});
q8a4.addEventListener("click", function() {
  no(8);
});
q8a4.addEventListener("click", num4);
q8a4.addEventListener("click", function() {
  change8("no");
});

q9a1.addEventListener("click", function() {
  big(9);
});
q9a1.addEventListener("click", num1);
q9a1.addEventListener("click", function() {
  change9("big");
});
q9a2.addEventListener("click", function() {
  no(9);
});
q9a2.addEventListener("click", num2);
q9a2.addEventListener("click", function() {
  change9("no");
});
q9a3.addEventListener("click", function() {
  small(9);
});
q9a3.addEventListener("click", num3);
q9a3.addEventListener("click", function() {
  change9("small");
});
q9a4.addEventListener("click", function() {
  yeet(9);
});
q9a4.addEventListener("click", num4);
q9a4.addEventListener("click", function() {
  change9("yeet");
});

//restart.addEventListener("click", testFunc);
restart.addEventListener("click", restartQuiz);

//#TODO: Define quiz functions here

/*
function testFunc(){
  alert("restarting");
}
*/

/*

function markAns(n, m){
  answers[n] = m;
  alert(answers[n]);
}

*/

function no(qNum) {
  if (answers[qNum - 1] == "") {
    noYeet += 1;
    questionCount += 1;
    //alert("noYeet");
    lastChosen = "no";
    if (questionCount == 9) updateResult();
  } else if (answers[qNum - 1] == "no") {
  } else {
    noYeet += 1;
    if (answers[qNum - 1] == "small") smallYeet -= 1;
    if (answers[qNum - 1] == "big") bigYeet -= 1;
    if (answers[qNum - 1] == "yeet") YEET -= 1;
  }
}

function small(qNum) {
  if (answers[qNum - 1] == "") {
    smallYeet += 1;
    questionCount += 1;
    lastChosen = "small";
    if (questionCount == 9) updateResult();
  } else if (answers[qNum - 1] == "small") {
  } else {
    smallYeet += 1;
    if (answers[qNum - 1] == "no") noYeet -= 1;
    if (answers[qNum - 1] == "big") bigYeet -= 1;
    if (answers[qNum - 1] == "yeet") YEET -= 1;
  }
}

function big(qNum) {
  if (answers[qNum - 1] == "") {
    bigYeet += 1;
    questionCount += 1;
    lastChosen = "big";
    if (questionCount == 9) updateResult();
  } else if (answers[qNum - 1] == "big") {
  } else {
    bigYeet += 1;
    if (answers[qNum - 1] == "no") noYeet -= 1;
    if (answers[qNum - 1] == "small") smallYeet -= 1;
    if (answers[qNum - 1] == "yeet") YEET -= 1;
  }
}

function yeet(qNum) {
  if (answers[qNum - 1] == "") {
    YEET += 1;
    questionCount += 1;
    lastChosen = "yeet";
    if (questionCount == 9) updateResult();
  } else if (answers[qNum - 1] == "yeet") {
  } else {
    YEET += 1;
    if (answers[qNum - 1] == "no") noYeet -= 1;
    if (answers[qNum - 1] == "small") smallYeet -= 1;
    if (answers[qNum - 1] == "big") bigYeet -= 1;
  }

  if (YEET > 10) alert("toomanyyeet");
}

function num1() {
  num = 1;
}
function num2() {
  num = 2;
}
function num3() {
  num = 3;
}
function num4() {
  num = 4;
}

function change1(s) {
  answers[0] = s;
  //alert(answers[0]);
  q1a1.classList.remove("chosen");
  q1a2.classList.remove("chosen");
  q1a3.classList.remove("chosen");
  q1a4.classList.remove("chosen");
  q1.classList.add("finished");
  if (num == 1) q1a1.classList.add("chosen");
  if (num == 2) q1a2.classList.add("chosen");
  if (num == 3) q1a3.classList.add("chosen");
  if (num == 4) q1a4.classList.add("chosen");
  //q1a1.disabled = true;
  //q1a2.disabled = true;
  //q1a3.disabled = true;
  //q1a4.disabled = true;
}

function change2(s) {
  answers[1] = s;
  q2a1.classList.remove("chosen");
  q2a2.classList.remove("chosen");
  q2a3.classList.remove("chosen");
  q2a4.classList.remove("chosen");
  q2.classList.add("finished");
  if (num == 1) q2a1.classList.add("chosen");
  if (num == 2) q2a2.classList.add("chosen");
  if (num == 3) q2a3.classList.add("chosen");
  if (num == 4) q2a4.classList.add("chosen");
  //q2a1.disabled = true;
  //q2a2.disabled = true;
  //q2a3.disabled = true;
  //q2a4.disabled = true;
}

function change3(s) {
  answers[2] = s;
  q3a1.classList.remove("chosen");
  q3a2.classList.remove("chosen");
  q3a3.classList.remove("chosen");
  q3a4.classList.remove("chosen");
  q3.classList.add("finished");
  if (num == 1) q3a1.classList.add("chosen");
  if (num == 2) q3a2.classList.add("chosen");
  if (num == 3) q3a3.classList.add("chosen");
  if (num == 4) q3a4.classList.add("chosen");
  //q3a1.disabled = true;
  //q3a2.disabled = true;
  //q3a3.disabled = true;
  //q3a4.disabled = true;
}

function change4(s) {
  answers[3] = s;
  q4a1.classList.remove("chosen");
  q4a2.classList.remove("chosen");
  q4a3.classList.remove("chosen");
  q4a4.classList.remove("chosen");
  q4.classList.add("finished");
  if (num == 1) q4a1.classList.add("chosen");
  if (num == 2) q4a2.classList.add("chosen");
  if (num == 3) q4a3.classList.add("chosen");
  if (num == 4) q4a4.classList.add("chosen");
  //q4a1.disabled = true;
  //q4a2.disabled = true;
  //q4a3.disabled = true;
  //q4a4.disabled = true;
}

function change5(s) {
  answers[4] = s;
  q5a1.classList.remove("chosen");
  q5a2.classList.remove("chosen");
  q5a3.classList.remove("chosen");
  q5a4.classList.remove("chosen");
  q5.classList.add("finished");
  if (num == 1) q5a1.classList.add("chosen");
  if (num == 2) q5a2.classList.add("chosen");
  if (num == 3) q5a3.classList.add("chosen");
  if (num == 4) q5a4.classList.add("chosen");
  //q5a1.disabled = true;
  //q5a2.disabled = true;
  //q5a3.disabled = true;
  //q5a4.disabled = true;
}

function change6(s) {
  answers[5] = s;
  q6a1.classList.remove("chosen");
  q6a2.classList.remove("chosen");
  q6a3.classList.remove("chosen");
  q6a4.classList.remove("chosen");
  q6.classList.add("finished");
  if (num == 1) q6a1.classList.add("chosen");
  if (num == 2) q6a2.classList.add("chosen");
  if (num == 3) q6a3.classList.add("chosen");
  if (num == 4) q6a4.classList.add("chosen");
  //q6a1.disabled = true;
  //q6a2.disabled = true;
  //q6a3.disabled = true;
  //q6a4.disabled = true;
}

function change7(s) {
  answers[6] = s;
  q7a1.classList.remove("chosen");
  q7a2.classList.remove("chosen");
  q7a3.classList.remove("chosen");
  q7a4.classList.remove("chosen");
  q7.classList.add("finished");
  if (num == 1) q7a1.classList.add("chosen");
  if (num == 2) q7a2.classList.add("chosen");
  if (num == 3) q7a3.classList.add("chosen");
  if (num == 4) q7a4.classList.add("chosen");
  //q7a1.disabled = true;
  //q7a2.disabled = true;
  //q7a3.disabled = true;
  //q7a4.disabled = true;
}

function change8(s) {
  answers[7] = s;
  q8a1.classList.remove("chosen");
  q8a2.classList.remove("chosen");
  q8a3.classList.remove("chosen");
  q8a4.classList.remove("chosen");
  q8.classList.add("finished");
  if (num == 1) q8a1.classList.add("chosen");
  if (num == 2) q8a2.classList.add("chosen");
  if (num == 3) q8a3.classList.add("chosen");
  if (num == 4) q8a4.classList.add("chosen");
  //q8a1.disabled = true;
  //q8a2.disabled = true;
  //q8a3.disabled = true;
  //q8a4.disabled = true;
}

function change9(s) {
  answers[8] = s;
  q9a1.classList.remove("chosen");
  q9a2.classList.remove("chosen");
  q9a3.classList.remove("chosen");
  q9a4.classList.remove("chosen");
  q9.classList.add("finished");
  if (num == 1) q9a1.classList.add("chosen");
  if (num == 2) q9a2.classList.add("chosen");
  if (num == 3) q9a3.classList.add("chosen");
  if (num == 4) q9a4.classList.add("chosen");
  //q9a1.disabled = true;
  //q9a2.disabled = true;
  //q9a3.disabled = true;
  //q9a4.disabled = true;
}

function updateResult() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
  q4a1.disabled = true;
  q4a2.disabled = true;
  q4a3.disabled = true;
  q4a4.disabled = true;
  q5a1.disabled = true;
  q5a2.disabled = true;
  q5a3.disabled = true;
  q5a4.disabled = true;
  q6a1.disabled = true;
  q6a2.disabled = true;
  q6a3.disabled = true;
  q6a4.disabled = true;
  q7a1.disabled = true;
  q7a2.disabled = true;
  q7a3.disabled = true;
  q7a4.disabled = true;
  q8a1.disabled = true;
  q8a2.disabled = true;
  q8a3.disabled = true;
  q8a4.disabled = true;
  q9a1.disabled = true;
  q9a2.disabled = true;
  q9a3.disabled = true;
  q9a4.disabled = true;

  if (noYeet > smallYeet && noYeet > bigYeet && noYeet > YEET) {
    result.innerHTML =
      "<div><h1>no yeet for you</h1></div><div><img src = 'https://cdn.glitch.com/1a8a1e91-aaa4-4b9f-bb8e-2f0d5abd6fd8%2Fgiphy-downsized-large.gif?v=1597286165737' width = '500px'></div>";
  } else if (smallYeet > noYeet && smallYeet > bigYeet && smallYeet > YEET) {
    result.innerHTML =
      "<div><h1>I think you need a lil yeet but don't worry about it</h1></div><div><img src = 'https://cdn.glitch.com/1a8a1e91-aaa4-4b9f-bb8e-2f0d5abd6fd8%2Fgiphy.gif?v=1597288802974' width = '500px'></div>";
  } else if (bigYeet > noYeet && bigYeet > smallYeet && bigYeet > YEET) {
    result.innerHTML =
      "<div><h1>bruh, you deserve this large YEET</h1></div><div><img src = 'https://cdn.glitch.com/1a8a1e91-aaa4-4b9f-bb8e-2f0d5abd6fd8%2Ftenor.gif?v=1597289544167' width = '500px'></div>";
  } else if (YEET > noYeet && YEET > smallYeet && YEET > bigYeet) {
    result.innerHTML =
      "<div><h1>YOU HAVE BEEN YEETED OUT OF EXISTENCE</h1></div><div><img src = 'https://cdn.glitch.com/1a8a1e91-aaa4-4b9f-bb8e-2f0d5abd6fd8%2FAmazingDaringDungbeetle-size_restricted.gif?v=1597289683533' width = '500px'></div>";
  } else if (lastChosen == "no") {
    result.innerHTML =
      "<div><h1>no yeet for you</h1></div><div><img src = 'https://cdn.glitch.com/1a8a1e91-aaa4-4b9f-bb8e-2f0d5abd6fd8%2Fgiphy-downsized-large.gif?v=1597286165737' width = '500px'></div>";
  } else if (lastChosen == "small") {
    result.innerHTML =
      "<div><h1>I think you need a lil yeet but don't worry about it</h1></div><div><img src = 'https://cdn.glitch.com/1a8a1e91-aaa4-4b9f-bb8e-2f0d5abd6fd8%2Fgiphy.gif?v=1597288802974' width = '500px'></div>";
  } else if (lastChosen == "big") {
    result.innerHTML =
      "<div><h1>bruh, you deserve this large YEET</h1></div><div><img src = 'https://cdn.glitch.com/1a8a1e91-aaa4-4b9f-bb8e-2f0d5abd6fd8%2Ftenor.gif?v=1597289544167' width = '500px'></div>";
  } else if (lastChosen == "yeet") {
    result.innerHTML =
      "<div><h1>YOU HAVE BEEN YEETED OUT OF EXISTENCE</h1></div><div><img src = 'https://cdn.glitch.com/1a8a1e91-aaa4-4b9f-bb8e-2f0d5abd6fd8%2FAmazingDaringDungbeetle-size_restricted.gif?v=1597289683533' width = '500px'></div>";
  }
}

function restartQuiz() {
  //alert("restarting");

  //alert(noYeet + ' ' + smallYeet + ' ' + bigYeet + ' ' + YEET);

  noYeet = 0;
  smallYeet = 0;
  bigYeet = 0;
  YEET = 0;
  questionCount = 0;
  num = 0;

  q1a = false;
  q2a = false;
  q3a = false;
  q4a = false;
  q5a = false;
  q6a = false;
  q7a = false;
  q8a = false;
  q9a = false;

  answers = ["", "", "", "", "", "", "", "", ""];

  q1.classList.remove("finished");
  q1a1.classList.remove("chosen");
  q1a2.classList.remove("chosen");
  q1a3.classList.remove("chosen");
  q1a4.classList.remove("chosen");
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;

  q2.classList.remove("finished");
  q2a1.classList.remove("chosen");
  q2a2.classList.remove("chosen");
  q2a3.classList.remove("chosen");
  q2a4.classList.remove("chosen");
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;

  q3.classList.remove("finished");
  q3a1.classList.remove("chosen");
  q3a2.classList.remove("chosen");
  q3a3.classList.remove("chosen");
  q3a4.classList.remove("chosen");
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;

  q4.classList.remove("finished");
  q4a1.classList.remove("chosen");
  q4a2.classList.remove("chosen");
  q4a3.classList.remove("chosen");
  q4a4.classList.remove("chosen");
  q4a1.disabled = false;
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;

  q5.classList.remove("finished");
  q5a1.classList.remove("chosen");
  q5a2.classList.remove("chosen");
  q5a3.classList.remove("chosen");
  q5a4.classList.remove("chosen");
  q5a1.disabled = false;
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;

  q6.classList.remove("finished");
  q6a1.classList.remove("chosen");
  q6a2.classList.remove("chosen");
  q6a3.classList.remove("chosen");
  q6a4.classList.remove("chosen");
  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  q6a4.disabled = false;

  q7.classList.remove("finished");
  q7a1.classList.remove("chosen");
  q7a2.classList.remove("chosen");
  q7a3.classList.remove("chosen");
  q7a4.classList.remove("chosen");
  q7a1.disabled = false;
  q7a2.disabled = false;
  q7a3.disabled = false;
  q7a4.disabled = false;

  q8.classList.remove("finished");
  q8a1.classList.remove("chosen");
  q8a2.classList.remove("chosen");
  q8a3.classList.remove("chosen");
  q8a4.classList.remove("chosen");
  q8a1.disabled = false;
  q8a2.disabled = false;
  q8a3.disabled = false;
  q8a4.disabled = false;

  q9.classList.remove("finished");
  q9a1.classList.remove("chosen");
  q9a2.classList.remove("chosen");
  q9a3.classList.remove("chosen");
  q9a4.classList.remove("chosen");
  q9a1.disabled = false;
  q9a2.disabled = false;
  q9a3.disabled = false;
  q9a4.disabled = false;

  result.innerHTML = "<h1>Your result is... </h1>";

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
