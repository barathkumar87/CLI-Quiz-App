const readlineSync =require('readline-sync');
const chalk = require('chalk');

console.log(chalk.green.bold("Welcome to The Game!!!\n"));
var playerName = readlineSync.question("What's your Name: \n");
console.log(chalk.yellow(`Welcome ${playerName}\n`));
console.log('\n');
console.log(chalk.red.bold('Rules & Instructions: '));
console.log(chalk.cyanBright('1.', chalk.yellow(playerName) + ', There are 10 Questions on Space and all are Compulsory.'));
console.log(chalk.cyanBright('2. You will get 2 points on each Right Answer.'));
console.log(chalk.cyanBright('3. One Point will be deducted if the Answer is Wrong.'));
console.log(chalk.cyanBright('4. In MCQ based questions you have to type the Serial Number / Index Value.'));
console.log('\n');
var score = 0;
var mcqList = [

   {
    array : ['The aphelion', 'The solstice', 'The ecliptic', 'The equinox'],
    question :chalk.cyanBright( '1.The day on which the Sun’s direct rays cross the celestial equator is called? '),
    answer : 'The equinox'
  },
  {
    array : ['Galileo', 'Hypatia', 'Johannes Kepler', 'Hans Lippershey'],
    question : chalk.cyanBright('2.Who invented the telescope?'),
    answer : 'Hans Lippershey'
  },
  {
    array : ['Kuiper belt', 'Saturn', 'Neptune', '90377 Sedna'],
    question : chalk.cyanBright('3.Which of these objects is the farthest from the Sun?'),
    answer : '90377 Sedna'
  },
  {
    array : ['syzygy', 'suzerainty', 'symbology', 'sizzle'],
    question : chalk.cyanBright('4.What term describes the alignment of three celestial bodies?'),
    answer : 'syzygy'
  },
  {
    array : ['Jupiter', 'Mars', 'Earth', 'Mercury'],
    question : chalk.cyanBright('5.What is the smallest planet in the solar system by mass?'),
    answer : 'Mercury'
  },
  {
    array : ['the atmosphere', 'the stratosphere', 'the lithosphere', 'the photosphere'],
    question : chalk.cyanBright('6.What is the visible part of the Sun called?'),
    answer : 'the photosphere'
  },
  {
    array : ['color', 'smell', 'distance from the Sun', 'size and shape'],
    question : chalk.cyanBright('7.What makes a planet a dwarf planet?'),
    answer : 'size and shape'
  },
  {
    array : ['10', '4.8', '1,025', '109'],
    question : chalk.cyanBright('8.How many times larger is the radius of the Sun than that of the Earth?'),
    answer : '109'
  },
  {
    array : ['wiggle and wobble', 'rock and roll', 'twist and shout', 'orbit and spin'],
    question : chalk.cyanBright('9.What two motions do all planets have?'),
    answer : 'orbit and spin'
  },
  {
    array : ['5.9 million (9.5 million km)', '590,000 (950,000 km)', '5.9 billion (9.5 billion km)', '5.9 trillion (9.5 trillion km)'],
    question : chalk.cyanBright('10.Approximately how many miles (or kilometres) are there in a light-year?'),
    answer : '5.9 trillion (9.5 trillion km)'
  },
];

function quizMcq(listOfAnswers,question,answer){
  let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
  console.log('\n');
  if(listOfAnswers[userAnswer] === answer){
    console.log(chalk.green('You are Right.'));
    score = score + 2;
  } else{
    console.log(chalk.red('You are Wrong.'));
    console.log(chalk.greenBright('The Correct Answer is: ',answer));
    score = score - 1;
  }

  if(score < 0){
    score = 0;
  }
  console.log('Score is: ',score);
}
for(var i = 0;i < mcqList.length; i++){
  console.log('\n');
  quizMcq(mcqList[i].array,mcqList[i].question,mcqList[i].answer);
  console.log(chalk.bgYellow('*******************************'));
}

console.log('\n');
console.log('Congratulations,',chalk.cyanBright(playerName),'your Total Score is: ',score);

highScore = [
    {
        username: "Batman",
        point: 16
    },
    {
        username: "Flash",
        point: 10
    },
    {
        username: "Aquaman",
        point: 12
    }
];

console.log(chalk.bgYellow(" High Score "));
console.table(highScore);

var max = highScore[0].point;
for (let i = 1; i < highScore.length; ++i) {
  if (highScore[i].point > max) {
    max = highScore[i].point;
  }
}

if(score>max){
    console.log(chalk.bgYellow("\n Congrats you beat the High Score \n"));
}
else{
    console.log(chalk.bgYellow("\n Better Luck Next Time you didnt beat the High Score \n"));

}
