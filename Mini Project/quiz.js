

let questions = [
    {
        question: "Chandrayaan 3 is the space mission of which country?",
        answers: [
            { text: "China", correct: "false" },
            { text: "India", correct: "true" },
            { text: "Russia", correct: "false" },
            { text: "United States", correct: "false" },
        ]
    },
    {
        question: "Chandrayaan 3 is the successor to which previous Indian lunar mission?",
        answers: [
            { text: "Chandrayaan 1", correct: "false" },
            { text: " Mangalyaan", correct: "false" },
            { text: "Chandrayaan 2", correct: "true" },
            { text: " AstroSat", correct: "false" },
        ]
    },
    {
        question: "Which celestial body is the primary target for Chandrayaan 3?",
        answers: [
            { text: "Jupiter", correct: "false" },
            { text: "Venus",correct: "false" },
            { text: "Mars", correct: "false" },
            { text: "Moon", correct: "true" },
        ]
    }
  ];
  
  let questionElement = document.getElementById("question");
  let answerButton = document.getElementById("answers-btn");
  let nextButton = document.getElementById("btn1");
  
  let currentQuestionIndex = 0;
  let currentScore = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    currentScore = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
  }
  
  function showQuestions() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
          button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
  }
  function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
      answerButton.removeChild(answerButton.firstChild);
    }
  }
  function selectAnswer(e){
     let selectedBtn=e.target;
     let isCorrect=selectedBtn.dataset.correct==="true";
     if(isCorrect){
      selectedBtn.classList.add("correct");
      currentScore++;
     }else{
      selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButton.children).forEach(button=>{
       if(button.dataset.correct==="true"){
        button.classList.add("correct");
       }
       button.disabled=true;
     });
      nextButton.style.display="block";
  }
  function showScore(){
      resetState();
      questionElement.innerHTML=`You scored ${currentScore} out of ${questions.length}!`;
      
      nextButton.style.display="block";
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
      showQuestions();
    }else{
      showScore();
    }
  }
  nextButton.addEventListener("click",()=>{
       if(currentQuestionIndex<questions.length){
         handleNextButton();
       }else{
        btn1.style.display="none"
       }
  });
  startQuiz();