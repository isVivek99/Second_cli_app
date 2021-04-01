var readlinesync = require("readline-sync");
const chalk = require("chalk");

function play(question, answer){
  var userAnswer = readlinesync.question(question);

  if(userAnswer===answer){
    console.log("");
    console.log("right answer!");
    console.log("------------------------");
    score+=1;
  }else{
    console.log("");
    console.log("wrong answer!");
    console.log("------------------------");
  }
}
var score=0;
console.log("Welcome user to the The Office Quiz!");
var userName = readlinesync.question("Please enter your name:");
console.log("");
console.log("Welcome "+userName+" to The Office CLI AppQuiz...");
console.log("Lets Start the questions...");
console.log("");

var questionOne = {

  que:"What is Micheal's real name in the series?\n A.Steve Carell\t B. Jimmy Sarbh\n C. Sachin Waze\t D. Floyd Mayweather\n",

  ans:"A"
}

var questionOne = {

  que:"What is Micheal's real name in the series?\n A.Steve Carell\t B. Jimmy Sarbh\n C. Sachin Waze\t D. Floyd Mayweather\n",

  ans:"A"
}

var questionTwo = {

  que:"Does Micheal leave the show?\n A.Yes\t B. No\n",

  ans:"A"
}

var questionThree = {

  que:"Who does dwight marry?\n A.Pam Beesly\t B. Erin Hannon\n C. Andy Bernard\t D. Angela Martin\n",

  ans:"D"
}

var questionFour = {

  que:"Who is Micheal's girlfriend and his boss ?\n A.Angela Martin\t B. Cathy Sims\n C. Phyliss Lathy\t D. Jan Levinson\n",

  ans:"D"
}
var questionFive = {

  que:"Does Stanley cheat on his wife?\n A. Yes\t B. No\n",

  ans:"A"
}



questionsArray=[questionOne, questionTwo, questionThree, questionFour, questionFive]

for(var i=0; i<questionsArray.length; i++){
  play(questionsArray[i].que, questionsArray[i].ans);
 
  
}

console.log("Your score is : "+score+"\n If you have scored 3 or above send me a screenshot so that i can add your name to the list..");
console.log("---------------------------------");

var highScores={
  "|satyam":3,
  "|shefali":5,
  "|aditya":4
};


console.log("top score holders:\n ----------------");

for(var key in highScores){

  if(highScores[key]>=3){
    console.log(chalk.green.bgRed.bold(key+":"+highScores[key]));
  }
  
}