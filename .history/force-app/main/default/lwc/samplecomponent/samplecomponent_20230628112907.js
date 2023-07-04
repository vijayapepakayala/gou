import { LightningElement, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import getAllQuestions from '@salesforce/apex/OnlineExamController.getAllQuestions';

export default class Samplecomponent extends LightningElement {
    @track examStarted = false;
    @track questionWrapper;

    onStartTest() {
        const studentName = this.template.querySelector('[data-id="studentName"]').value;
        if (studentName && studentName !== '') {
            // No need to call getQuestions() here since it's handled by the @wire decorator
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
