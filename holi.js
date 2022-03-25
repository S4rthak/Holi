function check(){

	var question1 = document.quiz.answer1.value;
	var question2 = document.quiz.answer2.value;
	var question3 = document.quiz.answer3.value;
	var question4 = document.quiz.answer4.value;
	var question5 = document.quiz.answer5.value;
	var correct = 0;


	if (question1 == "It marks the victory of good over evil.") {
		correct++;
}
	if (question2 == "The festival of Colors.") {
		correct++;
}	
	if (question3 == "Krishna.") {
		correct++;
	}
    if (question4 == "Gujiya.") {
		correct++;
	}
    if (question5 == "The arrival of spring.") {
		correct++;
	}
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 5) {
		score = 1;
	}

	if (correct == 5) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";

	alert("You got " + correct + " correct.")
	}