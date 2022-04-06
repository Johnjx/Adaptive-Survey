// const questions = {
//     question1:"This is question 1?",
//     question2:"This is question 2?",
//     question3:"This is question 3?",
//     question4:"This is question 4?",
//     question5:"This is question 5?",
//     question6:"This is question 6?",
//     question7:"This is question 7?",
//     question8:"This is question 8?"
// }

const questions = [
    "This is question 1?",
    "This is question 2?",
    "This is question 3?",
    "This is question 4?",
    "This is question 5?",
    "This is question 6?",
    "This is question 7?",
    "This is question 8?"
]

// testing
// const h1 = document.querySelector("h1");
// const h1class = "h1class";

const p = document.querySelector("p");
const input = document.querySelector("input");
const start = document.getElementById("startSurvey");
const cough = "cough";

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const newArr = [];

start.addEventListener('click', () => {
    if (input.value === cough) {
        newArr.push(questions[0]);
        p.innerHTML = questions[0];
    }

});



const answer = Math.floor(Math.random() * 8 + 1);

// yesButton.addEventListener('click', () => {
//     if (p.innerHTML === questions.question1) {
//         return p.innerHTML = questions.question2;
//     } else if (p.innerHTML === questions.question2) {
//         return p.innerHTML = questions.question3;
//     } else if (p.innerHTML === questions.question3) {
//         alert("Survey complete, contact office if you are in need of more assistance.");
//     }
    
// })

yesButton.addEventListener('click', () => {
    for (let i = 0; i < newArr.length; i++)
    if (p.innerHTML.includes(newArr[i])) {
        p.innerHTML = questions[answer];
        
    } 
    
})

noButton.addEventListener('click', () => {

})

console.log(newArr)

