const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
    {
        id: 4,
        question: "4 + 4 = ?",
        answers: [3, 4, 5, 6],
    },
    {
        id: 5,
        question: "5 + 5 = ?",
        answers: [3, 4, 5, 6],
    },
];
const btn = document.getElementById("btn")
const quizContainer = document.querySelector(".quiz-container");

function render() {
    let html = "";
    quizes.forEach(quiz => {
        html += `
            <div class="quiz-item">
                <h3>${quiz.question}</h3>
                <div class="quiz-answer">
        `;
        quiz.answers.forEach(answer => {
            html += `
                <div class="quiz-answer-item">
                    <input type="radio" name="${quiz.id}">
                    <label>${answer}</label>
                </div>
            `;
        });
    });
    quizContainer.innerHTML = html;
}
render()

btn.addEventListener("click", () =>{
    const quizItems = document.querySelectorAll(".quiz-item");
    quizItems.forEach(quizItem => {
        const answers = quizItem.querySelectorAll(".quiz-answer-item");
        const randomIndex = Math.floor(Math.random()*4);
        answers.forEach((answer, index) => {
            const input = answer.querySelector("input");
            if (index === randomIndex) {
                input.checked = true;
            } else {
                input.checked = false;
            }
        });
    });
})

