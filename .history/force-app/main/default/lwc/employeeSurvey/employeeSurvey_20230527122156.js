import { LightningElement, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import saveSurveyData from '@salesforce/apex/SurveyController.saveSurveyData';

export default class EmployeeSurvey extends LightningElement {
    @track employeeName = '';
    @track department = '';
    @track feedback = '';

    handleNameChange(event) {
        this.employeeName = event.target.value;
    }

    handleDepartmentChange(event) {
        this.department = event.target.value;
    }

    handleFeedbackChange(event) {
        this.feedback = event.target.value;
    }

    handleSubmit() {
        if (this.employeeName && this.department && this.feedback) {
            const surveyData = {
                employeeName: this.employeeName,
                department: this.department,
                feedback: this.feedback
            };

            saveSurveyData({ surveyData })
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
        this.department = '';
        this.feedback = '';
    }

    @wire(saveSurveyData, { surveyData: '$surveyData' })
    wiredSaveSurveyData({ error }) {
        if (error) {
            console.error('Error saving survey data:', error);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'An error occurred while saving the survey data',
                    variant: 'error'
                })
            );
        }
    }
    
    get surveyData() {
        return {
            employeeName: this.employeeName,
            department: this.department,
            feedback: this.feedback
        };
    }
}
