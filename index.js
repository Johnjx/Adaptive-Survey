const questions = {
    question1:"This is question 1?",
    question2:"This is question 2?",
    question3:"This is question 3?",
    question4:"This is question 4?",
    question5:"This is question 5?",
    question6:"This is question 6?",
    question7:"This is question 7?",
    question8:"This is question 8?"
}

// yesButton.addEventListener('click', () => {
//     if (p.innerHTML === questions.question1) {
//         return p.innerHTML = questions.question2;
//     } else if (p.innerHTML === questions.question2) {
//         return p.innerHTML = questions.question3;
//     } else if (p.innerHTML === questions.question3) {
//         alert("Survey complete, contact office if you are in need of more assistance.");
//     }
    
// })

// Changed to Array for testing
// const questions = [
//     "This is question 1?",
//     "This is question 2?",
//     "This is question 3?",
//     "This is question 4?",
//     "This is question 5?",
//     "This is question 6?",
//     "This is question 7?",
//     "This is question 8?"
// ]

// const answer = Math.floor(Math.random() * 8 + 1);


// yesButton.addEventListener('click', () => {
//     for (let i = 0; i < newArr.length; i++)
//     if (p.innerHTML.includes(newArr[i])) {
//         p.innerHTML = questions[answer];
        
//     } 
    
// })

// noButton.addEventListener('click', () => {

// })


// selecting my elements
// p will be changed to different questions
const p = document.querySelector("p");
//save the word cough and input element for if statment
const cough = "cough";
const input = document.querySelector("input");
// button that triggers first question load in
const start = document.getElementById("startSurvey");
// response buttons to trigger new question load in
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const options = document.querySelectorAll(".options");
const option1 = 'option1';
const option2 = 'option2';

// flow
// already mock set up - user input of 'cough' into the symptom field and they click 'start survey'
// first question loads in to 'p' element space
// if user responds by clicking yes button then a question loads into 'p'
// or if user responds by clicking no button then a different question loads into 'p'
// this happens until there are no new questions able to be loaded into 'p'

// solution

const newArr = [];

// first load in

start.addEventListener('click', () => {
    if (input.value === cough) {
        start.classList.add('hideSurvey');
        newArr.push(questions.question1);
        p.innerHTML = questions.question1;  
    }
});

// rest of the load ins based off yes or no response
// loop through newArr
// 
// check p.inner against newArr[i]
// if ===, for (let x in questions) { if (questions[x] !== p.inner) set p and push to newAarr}
// 
// 

const surveyGo = () => {
    options.forEach(response =>{
        response.addEventListener('click', (evt) => {
            for (let i = 0; i < newArr.length; i++) {
                if (evt.target.className.includes(option1) && p.innerHTML === newArr[i]) {
                    p.innerHTML = questions.question2;
                    
                } else if (evt.target.className.includes(option2) && p.innerHTML === newArr[i]) {
                    p.innerHTML = questions.question6;
                }
            } 
           newArr.push(p.innerHTML);
        });
    });
}

surveyGo();

// const surveyGo = () => {
//     options.forEach(response =>{
//         response.addEventListener('click', (evt) => {

//             if (p.innerHTML === questions.question1 && evt.target.className.includes(option1)) {
//                 p.innerHTML = questions.question2;
//                 newArr.push(questions.question2);
//             } else if (p.innerHTML === questions.question1 && evt.target.className.includes(option2)) {
//                 p.innerHTML = questions.question5;
//                 newArr.push(questions.question5);
//             }
//         });
//     });
// }

// surveyGo();

