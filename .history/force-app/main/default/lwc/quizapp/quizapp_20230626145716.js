// quizApp.js
import { LightningElement, track } from 'lwc';
import { quizData } from './quizData';

export default class QuizApp extends LightningElement {
    @track quizStarted = false;
    @track quizData = quizData;
    @track currentQuestionIndex = 0;
    @track currentQuestion = {};
    @track selectedAnswer;
    @track correctAnswers = 0;
    @track showNextButton = false;
    @track showResults = false;

    connectedCallback() {
        this.initializeQuiz();
    }

    initializeQuiz() {
        this.currentQuestion = this.quizData[this.currentQuestionIndex];
    }

    startQuiz() {
        this.quizStarted = true;
    }

    handleAnswerSelection(event) {
        this.selectedAnswer = event.target.value;
        this.showNextButton = true;
    }

    nextQuestion() {
        if (this.selectedAnswer === this.currentQuestion.correctAnswer) {
            this.correctAnswers++;
        }

        if (this.currentQuestionIndex === this.quizData.length - 1) {
            this.showResults = true;
        } else {
            this.currentQuestionIndex++;
            this.currentQuestion = this.quizData[this.currentQuestionIndex];
            this.selectedAnswer = '';
            this.showNextButton = false;
        }
    }
}
