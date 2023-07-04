import { LightningElement, track, wire } from 'lwc';
import getQuestions from '@salesforce/apex/ExaminationController.getQuestions';
import calculateScore from '@salesforce/apex/ExaminationController.calculateScore';

export default class ExamApp extends LightningElement {
    @track questions;
    @track selectedAnswers = {};
    @track showCertificate = false;
    @track studentName;
    @track certificateLink;

    @wire(getQuestions)
    wiredQuestions({ error, data }) {
        if (data) {
            this.questions = data;
        } else if (error) {
            // Handle error
        }
    }

    handleAnswerSelection(event) {
        this.selectedAnswers[event.target.name] = event.target.value;
    }

    submitExam() {
        calculateScore({ answers: this.selectedAnswers })
            .then(result => {
                if (result) {
                    this.showCertificate = true;
                    // Set student name and generate certificate link
                    this.studentName = 'John Doe'; // Replace with actual student name
                    this.certificateLink = '/apex/CertificatePage?id=' + Date.now(); // Replace with actual certificate page URL
                } else {
                    // Handle case when not qualified
                }
            }).catch(error =>{
                if(error){
                    console.log("An Error Occur")
                }
            })
            
    }
}
