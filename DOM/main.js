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
];

const btn = document.getElementById("btn");
const quizItem = document.querySelectorAll(".quiz-item")
const quizAnswerItem = document.querySelectorAll("quiz-answer-item")
console.log(btn)
console.log(quizItem)
btn.addEventListener("click", () =>{
    for (let i = 1; i <= quizItem.length; i++) {
        let indexRandom = Math.floor(Math.random()*5)
        quizAnswerItem[indexRandom].checked = true;
    }
})