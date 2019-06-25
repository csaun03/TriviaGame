var questions = [
    {
        prompt: "What type of animal was Garfield?\n(a) A Lizard\n (b) A Cat\n (c) A Goldfish",
        answer: "b"
    },
    {
        prompt: "Who was Charlie Brown's pet dog?\n(a) Scoobie Doo\n (b) Odie\n (c) Snoopy",
        answer: "c"
    },
    {
        prompt: "In the cartoon Doug, who was Doug's love interest?\n (a) Patti Mayonnaise\n (b) Cinderella\n (c) Angellica",
        answer: "a"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
var response = window.prompt(questions[i].prompt);
if(response == questions[i].answer){
    score++;
}
}
alert("you got " + score + "/" + questions.length );

var number = 5;
var intervalId;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 2000);
  }    //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#time").html("" + number + "");


    //  Once number hits zero...
    if (number === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }

  //  The stop function
  function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

  //  Execute the run function.
  run();