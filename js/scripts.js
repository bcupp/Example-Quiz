$( document ).ready(function() {
//Load the first question
loadQuestion();
bindHoverAndClick();
});
//Initialize question counter to iterate as questions are looped through
var questionCount = 0;


//Create an array of objects used for the quiz questions
var questionObjectsArray = [
  {
    question: "The wound is gaping and blood is flowing uncontrollably. The injured person’s clothing is blood-soaked.",
    answerOptionA: "Life-threatening",
    answerOptionB: "Non-life-threatening",
    correctAnswer: "a",
    answerResults: "Uncontrolled, continuous flow is serious and may be life-threatening."
  },
  {
    question: "The cut appears to be shallow, although there is a slow trickle of blood.",
    answerOptionA: "Life-threatening",
    answerOptionB: "Non-life-threatening",
    correctAnswer: "b",
    answerResults: "It is most likely non-life-threatening and bleeding will most likely stop spontaneously or is easily controlled by pressure."
  },
  {
    question: "The wound is squirting blood and there appears to be a large pool of blood on the ground.",
    answerOptionA: "Life-threatening",
    answerOptionB: "Non-life-threatening",
    correctAnswer: "a",
    answerResults: "Blood volume of half a soda can indicates life-threatening bleeding. The squirting also indicates a steady flow of blood. Begin providing care immediately."
  }
];

//Loads the question object data into the current question
function loadQuestion(){
  //Checks to see if the question count is less than amount of questions in the array.
  //If the question count is less it loads in the next question
  if (questionCount < questionObjectsArray.length) {
    $("#quizQuestion").text(questionObjectsArray[questionCount].question);
    $("#answerA").text(questionObjectsArray[questionCount].answerOptionA);
    $("#answerB").text(questionObjectsArray[questionCount].answerOptionB);
    $("#resultsBody").text(questionObjectsArray[questionCount].answerResults);
    $("#results").hide();
    $("#results").removeClass("resultsIncorrect resultsCorrect");
    //Remove the hover and click classes from the answer options
    $("#answerA").removeClass("answerASelect answerAHover");
    $("#answerB").removeClass("answerBSelect answerBHover");
    $("#nextButton").hide();
  }
};

//Function that triggers once an answer has been selected
function answerSelection(answerSelected){
  $("#results").show();
  //If the answer selected is the correct answer mark it as correct
  if (answerSelected === questionObjectsArray[questionCount].correctAnswer){
    $("#resultsTitle").removeClass("resultsTitleIncorrect");
    $("#resultsTitle").addClass("resultsTitleCorrect");
    $("#resultsTitle").text("CORRECT");
  //If the answer selected is not the correct answer mark it as incorrect
  } else {
    $("#resultsTitle").removeClass("resultsTitleCorrect");
    $("#resultsTitle").addClass("resultsTitleIncorrect");
    $("#resultsTitle").text("INCORRECT");
  }
  //IF there is no next question, do not show the next button
  if (questionCount < questionObjectsArray.length - 1) {
    $("#nextButton").show();
  }
  $("#answerA").unbind();
  $("#answerB").unbind();

};

//Function that triggers once the user selects the next button
function nextQuestionButton(){
  questionCount++;
  bindHoverAndClick();
  loadQuestion();
};

//Bind hover and click functionality to answer options
function bindHoverAndClick() {
  //Answer A functionality
  $(".answerA").hover(
    function() {
      $(this).addClass("answerAHover");
    }, function() {
      $(this).removeClass("answerAHover");
    }
  );

  $("#answerA").click(function() {
    $(this).toggleClass("answerASelect");
    answerSelection("a");
  });


  //Answer B functionality
  $(".answerB").hover(
    function() {
      $(this).addClass("answerBHover");
    }, function() {
      $(this).removeClass("answerBHover");
    }
  );

  $("#answerB").click(function() {
    $(this).toggleClass("answerBSelect");
    answerSelection("b");
  });
}
