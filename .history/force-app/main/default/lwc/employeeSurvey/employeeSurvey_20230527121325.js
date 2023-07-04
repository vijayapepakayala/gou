import { LightningElement,track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import createSurveyRecord from '@salesforce/apex/SurveyController.createSurveyRecord';
export default class EmployeeSurvey extends LightningElement {
    @track employeeName = '';
    @track surveyResponse = '';

    handleNameChange(event) {
        this.employeeName = event.target.value;
    }

    handleResponseChange(event) {
        this.surveyResponse = event.target.value;
    }

    handleSubmit() {
        if (this.employeeName && this.surveyResponse) {
            const surveyData = {
                Name: this.employeeName,
                Response__c: this.surveyResponse
            };

            createSurveyRecord({ surveyData })
                .then(() => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: 'Survey submitted successfully',
                            variant: 'success'
                        })
                    );
                    this.resetFields();
                })
                .catch(error => {
                    console.error('Error submitting survey:', error);
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: 'An error occurred while submitting the survey',
                            variant: 'error'
                        })
                    );
                });
        } else {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Incomplete Form',
                    message: 'Please fill in all the fields',
                    variant: 'warning'
                })
            );
        }
    }

    resetFields() {
        this.employeeName = '';
        this.surveyResponse = '';
    }
}
