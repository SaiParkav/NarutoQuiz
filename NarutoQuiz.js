const readlinesync=require('readline-sync')
const chalk=require('chalk')

let score=0;
let playerName=readlinesync.question(chalk.bold.yellow("May I know your name ? "));

console.log(chalk.bold.blue("Welcome "+ playerName + " Naruto Quiz ?"))

function play(question,ans,options)
{
  console.log("Question ");
  console.log(chalk.bold.yellow(question));
  let playerAnswer=readlinesync.keyInSelect(options);
  if((playerAnswer+1) === ans){
    console.log(chalk.green("You are right"));
    score++;
  }
  else
  {
    console.log(chalk.red("You are wrong"));
  }

  console.log("Your current score is" ,score);
  console.log("------------------");
}


const questions=[{
  ques:"Where did Naruto Uzumaki live ? ",
  ans : 1,
  options:["Konaha","Delhi","Hyderabad","Bangalore"]
},
{
  ques:"Which village did he belong too?",
  ans:2,
  options:["VIT","Hidden Leaf Village","Manipal","BITS"]
},
{
  ques:"What was Naruto Uzumaki dream ?",
  ans:4,
  options:["ECE Engineer","Mechatronics Engineer","Automobile Engineer","Hokage"]
},
{
  ques:"Which animal does Naruto Summon?",
  ans:3,
  options:["Fish","Cat","Frog","Parrot"]
},
{
  ques:"Does Naruto Uzumaki like Ramen?",
  ans:1,
  options:["Yes","No"]
},];



for( let i=0;i<questions.length;i++){
  play(questions[i].ques,questions[i].ans,questions[i].options)
}

console.log("Congratulations Your final score is", score);
