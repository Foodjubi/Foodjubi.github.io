class Question
{
    constructor(text, choices, answer)
    {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    isCorrectAnswer(choices)
    {
        return this.answer === choices;
    }
}

let questions = 
[
    new Question("Combien y'a t'il d'habitants à pessac ?",
    ["10 000", "100 000", "15 000", "60 000"],
    "60 000"),
    new Question("Combien y'a t'il d'habitants à talence ?",
    ["10 000", "40 000", "15 000", "80 000"],
    "40 000"),
    new Question("Combien y'a t'il d'habitants à bordeaux ?",
    ["300 000", "250 000", "150 000", "100 000"],
    "250 000"),
    new Question("Combien y'a t'il d'habitants à mérignac ?",
    ["10 000", "110 000", "35 000", "70 000"],
    "70 000")
];

class Quiz
{
    constructor(questions)
    {
        this.score = 0;
        this.questions = questions;
        this.currentQuestionIndex = 0;
    }

    getCurrentQuestion()
    {
        return this.questions[this.currentQuestionIndex];
    }

    guess(answer)
    {
        if(this.getCurrentQuestion().isCorrectAnswer(answer))
        {
            this.score++;
        }
        this.currentQuestionIndex++;
    }

    hasEnded()
    {
        return this.currentQuestionIndex >= this.questions.length;
    }
}

const display = 
{
    elementShown: function(id, text)
    {
        let elements = document.getElementById(id);
        elements.innerHTML = text;
    },

    endQuiz: function() 
    {
        let endQuizHTML = `
        <h1>Quiz Terminé !</h1>
        <h3>Votre score est de ${quiz.score} / ${quiz.questions.length}</h3>`;
        this.elementShown("quiz", endQuizHTML);
    },

    question: function()
    {
        this.elementShown("question", quiz.getCurrentQuestion().text)
    },

    choices: function()
    {
        let choices = quiz.getCurrentQuestion().choices;

        guessHandler = (id , guess) => 
        {
            document.getElementById(id).onclick = function()
            {
                quiz.guess(guess);
                quizApp();
            }
        }

        for(let i = 0; i < choices.length; i++)
        {
            console.log("yu");
            this.elementShown("choice" + i, choices[i]);
            guessHandler("guess" + i, choices[i]);
        }
    },

    progress: function()
    {
        let currentQuestionNumber = quiz.currentQuestionIndex + 1;
        this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
    }

};

//GAME LOGIC
quizApp = () => 
{
    if(quiz.hasEnded())
    {
        display.endQuiz();
    }
    else
    {
        //QUESTION
        display.question();
        //CHOICES
        display.choices();
        //PROGRESS
        display.progress();
    }
}

// CREATE QUIZ
let quiz = new Quiz(questions);
quizApp();

console.log(quiz);
