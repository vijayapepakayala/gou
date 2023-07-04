import { LightningElement,track} from 'lwc';
import getExamPaperQuestions from '@salesforce/apex/ExamPaperController.getExamPaperQuestions';
import saveExamPaper from '@salesforce/apex/ExamPaperController.saveExamPaper';
export default class Javaexampaper extends LightningElement {

  @track examPaperQuestions;
  @track selectedAnswers = {};
  @track disableSubmit = true;
  @track showResult = false;
  @track score = 0;
  totalQuestions;

  connectedCallback() {
    getExamPaperQuestions()
      .then((result) => {
        this.examPaperQuestions = result.map((question) => ({
          ...question,
          Options: [question.Option_A__c, question.Option_B__c, question.Option_C__c, question.Option_D__c],
        }));
        this.totalQuestions = this.examPaperQuestions.length;
      })
      .catch((error) => {
        console.error('Error fetching exam paper questions', error);
      });
  }

  handleOptionChange(event) {
    this.selectedAnswers[event.target.name] = event.target.value;
    this.disableSubmit = Object.keys(this.selectedAnswers).length !== this.totalQuestions;
  }

  submitExam() {
    saveExamPaper({ examPaperQuestionsJSON: JSON.stringify(this.selectedAnswers) })
      .then((result) => {
        this.score = result;
        this.showResult = true;
      })
      .catch((error) => {
        console.error('Error submitting exam paper', error);
      });
    }
}