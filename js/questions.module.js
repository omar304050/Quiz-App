
import { AllQustion , myQuiz } from "./index.js";

export class Qustion {



    constructor(index) {
        this.index = index;
        this.cateogry = AllQustion[index].category;
        this.question = AllQustion[index].question;
        this.correct_answers = AllQustion[index].correct_answer;
        console.log(this.correct_answers);
        this.incorrect_answers = AllQustion[index].incorrect_answers;
        this.AllQustionLength = AllQustion.length;
        this.AllChoices = [this.correct_answers, ...this.incorrect_answers].sort();
        this.answered = false;
        
    }

    displayData() {

        let temp = `
    <div
      class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
    >
      <div class="w-100 d-flex justify-content-between">
        <span class="btn btn-category"> ${this.cateogry} </span>
        <span class="fs-6 btn btn-questions"> ${this.index + 1} of ${this.AllQustionLength} Questions</span>
      </div>
      <h2 class="text-capitalize h4 text-center"> ${this.question} </h2>  
      <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
       ${this.AllChoices.map((choices) => ` <li> ${choices} </li>`).join("")}
      </ul>
      <h2 class="text-capitalize text-center score-color h3 fw-bold"><i class="bi bi-emoji-laughing"></i> Score: ${myQuiz.score} </h2>        
    </div>`

        document.getElementById("questionsContainer").innerHTML = temp


        let allAnswers = document.querySelectorAll(".choices li");

        allAnswers.forEach((answer) => {
            answer.addEventListener("click", (e) => {
                this.checkAnswer(e.target)
            })
        })


    }




    checkAnswer(userAnswer) {

        if (this.answered) {
            return
        }


        if (userAnswer.innerHTML.trim() == this.correct_answers) {

            userAnswer.classList.add("correct")
             myQuiz.score++ ;
        } else {
            userAnswer.classList.add("wrong")
        }

        this.index++;
        this.answered = true;
        this.animatedQustion(userAnswer)

        setTimeout(() => {
            this.nextQustion()
        }, 1000);

    }



    animatedQustion(element) {





        element.closest(".question").classList.remove("animate__bounceIn")
        element.closest(".question").classList.add("animate__backOutLeft")
    }


    nextQustion() {
        if (this.index < AllQustion.length) {
            let next = new Qustion(this.index);
            next.displayData()

        } else {
            document.getElementById("questionsContainer").innerHTML = `

        <div id="tryAgainContainer" class="text-center text-white animate__animated animate__bounceIn ">
              <h1>Your Score is <span>${myQuiz.score}</span></h1>
              <button id="tryBtn" class="btn btn-danger">Try Again</button>
          </div>`;


          let tryBtn =document.getElementById("tryBtn");

          tryBtn.addEventListener("click" , ()=>{

            window.location.reload();
          } )
        }
    }





}