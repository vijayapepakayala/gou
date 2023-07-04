import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import {getAllQuestions} from '@salesforce/apex/OnlineExamController.getAllQuestions';
export default class OnlineexamApp extends LightningElement {

    @track examStarted = false;
    @track questionWrapper;

    onStartTest() {
        const studentName = this.template.querySelector('[data-id="studentName"]').value;
        if (studentName && studentName !== '') {
            this.getQuestions();
        } else {
            this.showToast('Error', 'Please Enter Your Name', 'error');
        }
    }

    onSubmit() {
        let score = 0;
        for (let i = 0; i < this.questionWrapper.length; i++) {
            if (this.questionWrapper[i].selectedAnswer === this.questionWrapper[i].question.Answer__c) {
                score++;
            }
        }
        this.showToast('Success', 'Your Score Is ' + score, 'success');
        this.refreshData();
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
    refreshData() {
        return refreshApex(this.questionWrapper);
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }

}