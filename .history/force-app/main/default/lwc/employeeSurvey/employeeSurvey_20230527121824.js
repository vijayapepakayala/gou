import { LightningElement,track,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import saveSurveyData from '@salesforce/apex/SurveyController.saveSurveyData';
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

    @wire(createSurveyRecord, { surveyData: '$surveyData' })
    wiredCreateSurveyRecord({ error }) {
        if (error) {
            console.error('Error creating survey record:', error);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'An error occurred while creating the survey record',
                    variant: 'error'
                })
            );
        }
    }
    
    get surveyData() {
        return {
            Name: this.employeeName,
            Response__c: this.surveyResponse
        };
    }
}
