(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

      }

    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;

	   if(numCorrect <14) {
document.getElementById("results2").innerHTML = "Red Alert: The loving feelings which originally drew you to each other may be dangerously diminished.";
}
	
	if(numCorrect >=14) {
document.getElementById("results2").innerHTML = "Loving Feelings: Your relationship is in great shape.";
}   



  
	  var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ['RESILIENCY'],
    datasets: [  {
    label: 'Resiliency',
    data: [numCorrect],
    backgroundColor: '#3e95cd' // blue
  },
  {
    label: 'Vulnerable',
    data: [myQuestions.length - numCorrect],
    backgroundColor: '#ff0000' // red
  }]

  },
  options: {
  		responsive: true,
      title: {
        display: false,
        text: 'Risk Score',
      },
      legend: { display: false },
      scales: {
                xAxes: [{
                	stacked: true,
                    ticks: {
                        beginAtZero: true,
                        max: myQuestions.length,
                		min: 0,
                		stepSize: myQuestions.length,

                    // Include a label for the ticks
                    callback: function(value, index, values) {
                        if (Math.floor(value) === 0){
        					return 'LOVING FEELINGS';
      					}else if ([myQuestions.length]){
                        	return 'RED ALERT';
                        	}
                    }
                    }
                }],
                yAxes: [{
                	stacked: true,
                	display: false,
 					barThickness: 20               
                }]           
            }
     
    }
    
});
    
}

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  


  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "I always look forward to seeing my partner.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "I feel safe and understood in this relationship.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "We often laugh and play together.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
     {
      question: "My partner turns me on.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
     {
      question: "We seem to agree much more than disagree on important issues.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
     {
      question: "When we argue I seldom feel blamed or criticized.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "As a result of our relationship I feel I have become more of a person.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
  	{
      question: "I can tell my partner anything.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "I remember many special moments in our relationship.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "I'm genuinely fond of my partner.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "I get lots of support in this relationship.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "My partner is my best friend.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "We divide up responsibilities in a fair way.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Even when this relationship is a struggle it is worth it.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "We have a number of issues on which we cannot agree.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "We sometimes allow resentment to come between us.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "I feel some disappointment about how our relationship is developing.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "I sometimes wonder if my partner can ever leave his/her family.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "We let jealousy come between us.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "Sex is not as good as it used to be.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "In conflict I often end up feeling misunderstood.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "My partner puts me down more than builds me up.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "We often end our arguments before reaching agreement.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "I have lots of criticisms of my partner.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "Things are very unequal in this relationship.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "This relationship adds to the stresses of my life.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "We seem to have very little control over our lives.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    },
    {
      question: "I often feel lonely in this relationship.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "b"
    }
   ];
  

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);




})();

