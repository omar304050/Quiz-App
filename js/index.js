import { Qustion } from "./questions.module.js";
import { Quiz } from "./quiz.module.js";

let quizForm = document.getElementById("quizForm");
let categoryMenu = document.getElementById("categoryMenu");
let difficultyOptions = document.getElementById("difficultyOptions");
let questionsNumber = document.getElementById("questionsNumber");
let startQuiz = document.getElementById("startQuiz");
export let AllQustion;
export let myQuiz;


startQuiz.addEventListener("click", async function () {

    myQuiz = new Quiz(categoryMenu.value, questionsNumber.value, difficultyOptions.value)

    AllQustion = await myQuiz.getQuiz()
    
    let Qustions = new Qustion(0)

    Qustions.displayData()

    quizForm.classList.replace("d-flex", "d-none")


})
