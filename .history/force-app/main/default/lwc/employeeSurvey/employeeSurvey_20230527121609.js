import { LightningElement,track } from 'lwc';
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
        const surveyData = {
            employeeName: this.employeeName,
            department: this.department,
            feedback: this.feedback
        };

        // Call the Apex method to save the survey data
        saveSurveyData({ surveyData })
            .then(result => {
                // Handle the result if necessary
                console.log('Survey data saved:', result);
                // Optionally, you can reset the form fields after successful submission
                this.employeeName = '';
                this.department = '';
                this.feedback = '';
            })
            .catch(error => {
                // Handle any errors that occurred during the data save process
                console.error('Error saving survey data:', error);
            });
    }
}
