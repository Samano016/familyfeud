const questions = [
  {
    question: "Name something you do before going to bed.",
    answers: [
      { text: "Brush teeth", points: 30 },
      { text: "Set alarm", points: 20 },
      { text: "Take a shower", points: 15 },
      { text: "Read", points: 10 },
      { text: "Watch TV", points: 5 }
    ]
  },
  {
    question: "Name a popular pizza topping.",
    answers: [
      { text: "Pepperoni", points: 35 },
      { text: "Cheese", points: 25 },
      { text: "Mushrooms", points: 15 },
      { text: "Sausage", points: 10 },
      { text: "Olives", points: 5 }
    ]
  }
];

let currentQuestionIndex = 0;

function renderQuestion() {
  const current = questions[currentQuestionIndex];
  document.getElementById("question").textContent = current.question;
  
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  current.answers.forEach((answer, index) => {
    const div = document.createElement("div");
    div.className = "answer";
    div.textContent = `${index + 1}. _______`;
    div.onclick = () => {
      div.textContent = `${index + 1}. ${answer.text} (${answer.points})`;
      div.classList.add("revealed");
    };
    answersDiv.appendChild(div);
  });
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  renderQuestion();
}

window.onload = renderQuestion;
