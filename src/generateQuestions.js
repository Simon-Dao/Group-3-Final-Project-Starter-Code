const questionContainer = document.querySelector('.quiz-container')
const navBar = document.querySelector('#side-nav')
const scrollContainer = document.querySelector('.scroll-container')

let question = {
    prompt: 'What is my favorite number?',
    answers: ['1', '2', '3', '4'],
    rightAnswer: 0
}


let questions = [
    {
        prompt: 'What is my favorite number?',
        answers: ['1', '2', '3', '4'],
        rightAnswer: 0
    },
    {
        prompt: 'What is my favorite fruit?',
        answers: ['1', '2', '3', '4'],
        rightAnswer: 0
    },
    {
        prompt: 'Who is my favorite person?',
        answers: ['1', '2', '3', '4'],
        rightAnswer: 0
    },
    {
        prompt: 'What is the greatest movie of all time? adasd sadsa dsad sadasd sdsadsad asasss sss sss sssss',
        answers: ['1', '2', '3', '4'],
        rightAnswer: 0
    },
    {
        prompt: 'Which year did the \'war of 1812\' take place?',
        answers: ['1', '2', '3', '4'],
        rightAnswer: 0
    },
    {
        prompt: 'Why?',
        answers: ['1', '2', '3', '4'],
        rightAnswer: 0
    }
]

questions.forEach((question, i) => {
    let newQuestionContainer = document.createElement('section')
    newQuestionContainer.className = 'multiple-choice-container'
    newQuestionContainer.innerHTML =
    `<section class="multiple-choice-container">
    
                        <h1 class="subtitle textPrimary">${question.prompt}</h1>
                        <div class="button-container">
                            <button class="quiz-button buttonPrimary">
                                <p class="textPrimary">A</p>
                                <p class="textPrimary">${question.answers[0]}</p>
                            </button>
                            <button class="quiz-button buttonPrimary">
                                <p class="textPrimary">B</p>
                                <p class="textPrimary">${question.answers[1]}</p>
                            </button>
                            <button class="quiz-button buttonPrimary">
                                <p class="textPrimary">C</p>
                                <p class="textPrimary">${question.answers[2]}</p>
                            </button>
                            <button class="quiz-button buttonPrimary">
                                <p class="textPrimary">D</p>
                                <p class="textPrimary">${question.answers[3]}</p>
                            </button>
                        </div>
                    </section>
    `

    
    let newQuestionNavItem = document.createElement('li') 
    newQuestionNavItem.className = 'nav-item backgroundPrimary textPrimary'
    newQuestionNavItem.textContent = question.prompt
    newQuestionNavItem.addEventListener('click',  (e) => snapTo(e,newQuestionContainer))
    questionContainer.appendChild(newQuestionContainer)
    navBar.appendChild(newQuestionNavItem)
})

function snapTo(e,element) {

    element.scrollIntoView({ behavior: 'smooth', block: "center"})
}