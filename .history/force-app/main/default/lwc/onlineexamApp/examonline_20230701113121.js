import { LightningElement, track, wire } from 'lwc';
import getExamQuestions from '@salesforce/apex/ExamController.getExamQuestions';
import submitExamResults from '@salesforce/apex/ExamController.submitExamResults';

export default class ExamPaper extends LightningElement {
  @track examQuestions;
  @track score = 0;
  @track showResult = false;

  @wire(getExamQuestions)
  wiredExamQuestions({ error, data }) {
    if (data) {
      this.examQuestions = data;
    } else if (error) {
      // Handle error
    }
  }

  handleAnswerSelection(event) {
    const questionId = event.target.name;
    const selectedOptionId = event.target.value;
    const selectedQuestion = this.examQuestions.find((q) => q.Id === questionId);

    selectedQuestion.Selected_Option__c = selectedOptionId;
  }

  submitExam() {
    submitExamResults({ examQuestions: this.examQuestions })
      .then((result) => {
        this.score = result;
        this.showResult = true;
      })
      .catch((error) => {
        // Handle error
      });
  }
}
