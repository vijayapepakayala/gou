import { LightningElement,track } from 'lwc';
import {getAllQuestions} from '@salesforce/apex/OnlineExamController.getAllQuestions';
export default class OnlineexamApp extends LightningElement {

    @track examStarted = false;
    @track questionWrapper;

    onStartTest(event) {
        const studentName = this.template.querySelector('[data-id="studentName"]').value;
        if (studentName && studentName !== '') {
            this.getQuestions();
        } else {
            alert('Please Enter Your Name');
        }
    }

    onSubmit(event) {
        let score = 0;
        for (let i = 0; i < this.questionWrapper.length; i++) {
            if (this.questionWrapper[i].selectedAnswer === this.questionWrapper[i].question.Answer__c) {
                score++;
            }
        }
        alert(`Your Score Is ' ${score}`);
        location.reload();
    }

    getQuestions() {
        getAllQuestions()
            .then(result => {
                this.examStarted = true;
                this.questionWrapper = result;
            })
            .catch(error => {
                console.error('Error retrieving questions:', error);
            });
    }

}