$(document).ready(function () {
  // this game object holds all of the questions, possible answers, and then the index of the correct answer for each
  var game = {
    questions: [
      {
        question: 'What is my name?',
        possibles: ['Fred', 'Markus', 'Nick'],
        id: 'questions-one',
        answer: 1

      }

    ]};



  //console.log(question);

  //var message = "Game Over!";
  //sometype of jquery function to show this

  $('.startGame').on('click', function () {
    //console.log("click");
    //wrapper or questions-container
    $('#questions-container').show();
    console.log('hello');
    $(this).hide();

     });

  var number = 30;
  $("#timeLeft").on()('click', run);

  function decrement() {
      number--;
     // console.log(number);

      $('#timeLeft').html('<h2>' + number + "seconds" + '</h2>');

      if (number === 0) {
        stop();//need to write a function to stop

        $("#message").html("time up!");
        checkAnswers();
      }  //need to write a function to check answers

    };
        //start of the game with a countdown timer
   function run(){
     counter = setInterval(decrement, 1000);
       }

   function stop(){
     clearInterval(counter);
   }

   //start of the game

   run();

   //need to  create some type of template that will allow the user to
   //iput choices
   function template(data) {

    var string = ".form questionOne" + "_" + data.question";
    var possibles = data.possibles;

   }

  //for (var i = 0; i < possibles.length; i++) {
	//	var possible = possibles[i]; to check for all possibles
