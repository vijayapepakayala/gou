import { LightningElement,track } from 'lwc';

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
        // Perform any necessary actions, such as sending the survey data to a server or saving it in Salesforce
        console.log('Submitted survey:', {
            employeeName: this.employeeName,
            department: this.department,
            feedback: this.feedback
        });
        // Optionally, you can reset the form fields after submission
        this.employeeName = '';
        this.department = '';
        this.feedback = '';
    }
}