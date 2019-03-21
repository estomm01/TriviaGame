$(document).ready(function () {
  // this game object holds all of the questions, possible answers, and then the index of the correct answer for each
  var game = {
    questions: [
      {
        question: 'What other name is common with Maine Coon cats?',
        possibles: ['Gentle Giant', 'Coonier', 'Giant Coon'],
        id: 'questions-one',
        answer: 0

      }, {
        question: 'how many breeds of cats are there that the CFA recognizes?',
        possibles: [ 60, 14, 44],
        id: 'question-two',
        answer: 2

      },{
        question:"What was the cats name in Autstin Powers Movie",
        possibles: ['Austin', 'Mr. Bigglesworth', 'Kitty' ],
        id: 'question-three',
        answer: 1

      }


    ]
  };


  // var text = "";
  // $("#doneButton").hide();

  //var message = "Game Over!";
  //sometype of jquery function to show this



  //    var question = $("<div>").addClass("card");
  // var qcard = $("<div>").addClass("card-body");
  // var possibles = $("<ul>").addClass("list-group-flush list-group");

  // qcard.html("<h5 class='card-title'>"+ game.questions[0].question+ "</h5>");
  // // possibles =
  // for (i = 0; i < game.questions.length; i++) {
  // $("#questions-container").append("<li>"+ game.questions[i].question + "</li>");
  // }

  // for (i = 0; i < game.possibles.length; i++){
  // $("#questions-contaier").append("<li>" + game.possibles[i].possibles + "</li>");

  //  // text += "<li>" + game.questions[i] +"</li>";
  // }

  // //  <div class="card" style="width: 18rem;">
  // //   <img src="..." class="card-img-top" alt="...">
  // //  <div class="card-body">
  // //  <h5 class="card-title">Totally Trivial Trivia</h5>
  // //  <p class="card-text">questions or title.</p>
  // //   </div>
  // //  <ul class="list-group list-group-flush">
  // //  <li class="list-group-item"> </li>
  // //  <li class="list-group-item"> </li>
  // //  <li class="list-group-item"> </li>
  // //  </ul>
  // //  </div>
  // //  </div>
  // // };
  //wrapper or questions-container
  // $("#questions-container").append(question);
  // $('#questions-container').show();
  //console.log('he');
  $(".startGame").on("click", function () {
    $('.wrapper').show();
    console.log('click');
    $(this).hide();

  });

  var number = 40;
  $("#timeLeft").on('click', run);

  function decrement() {
    number--;
    //console.log(number);

    $('#timeLeft').html('<h2>' + number + "seconds" + '</h2>');

    if (number === 0) {
      stop();//need to write a function to stop

      $("#message").html("time up!");
      checkAnswers();
    }  //need to write a function to check answers

  };
  //start of the game with a countdown timer
  function run() {
    counter = setInterval(decrement, 1000);
  }

  function stop() {
    clearInterval(counter);
  }

  run();

  function formTemplate(data) {

    // questions can be inputed into that form field
    var qString = "<form id='questionOne'>" + data.question + "<br>";

    var possibles = data.possibles;
    // a for loop to go through the possibles array
    for (var i = 0; i < possibles.length; i++) {
      var possible = possibles[i];
      console.log(possible);
      qString = qString + "<input type='radio' name='" + data.id + "' value=" + i + ">" + possible;

    }
    return qString + "</form>";
  }
  window.formTemplate = formTemplate;

  // this function takes the template created in the last function and by appending it,
  // allows it to be displayed on the page
  //input boxes to construct and return a query string
  function buildQuestions() {
    var questionHTML = ''
    for (var i = 0; i < game.questions.length; i++) {
      questionHTML = questionHTML + formTemplate(game.questions[i]);
      console.log('questionHTML');
    }
    $('#questions-container').append(questionHTML);

  }

  // function that
  function isCorrect(question) {
    var answers = $('[name=' + question.id + ']');
    var correct = answers.eq(question.answer);
    var isChecked = correct.is(':checked');
    return isChecked;
  }

  // call the buildQuestions function
  buildQuestions();

  // function to build the display of guesser results
  function resultsTemplate(question) {
    var htmlBlock = '<div>'
    htmlBlock = htmlBlock + question.question + ': ' + isChecked;
    return htmlBlock + "</div>";
  }

  // function to check  the guesser results
  function checkAnswers() {

    // variables needed to hold results
    var resultsHTML = '';
    var guessedAnswers = [];
    var correct = 0;
    var incorrect = 0;
    var unAnswered = 0

    // for loop iterates through each question and passes the questions at each index first into
    // the isCorrect function to see if they match the  correct answers, and if they do,
    // add to correct score
    for (var i = 0; i < game.questions.length; i++) {
      if (isCorrect(game.questions[i])) {
        correct++;
      } else {
        // then this statement runs the questions at each index through the checkAnswered function
        // to determine whether the user clicked an answer, or did not click an answer,
        if (checkAnswered(game.questions[i])) {
          incorrect++;
        } else {
          unAnswered++;
        }
      }

    }
    // display the results of the function in the results div and use strings of text to relate the
    // results of the for loop with their values
    $('.results').html('correct: ' + correct + "<br>" + 'incorrect: ' + incorrect + "<br>" + 'unanswered: ' + unAnswered);
  }

  // this function checks whether the guesser actually checked an answer
  function checkAnswered(question) {
    var anyAnswered = false;
    var answers = $('[name=' + question.id + ']');
    // the for loop creates a condition to check if the buttons were checked
    for (var i = 0; i < answers.length; i++) {
      if (answers[i].checked) {
        anyAnswered = true;
      }
    }
    //tell  between incorrect answers and those answers that were not attempted
    return anyAnswered;

  }

  $('#doneButton').on('click', function () {
    checkAnswers();
    stop();
    $("#messageDiv").html("Game Over!");
  })


});
