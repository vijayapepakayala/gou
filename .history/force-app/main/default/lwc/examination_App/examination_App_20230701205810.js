// import { LightningElement, track } from 'lwc';
// import getExamPaperQuestions from '@salesforce/apex/ExamPaperController.getExamPaperQuestions';
// import saveExamPaper from '@salesforce/apex/ExamPaperController.saveExamPaper';

// export default class ExamPaper extends LightningElement {
//   @track examPaperQuestions;
//   @track selectedAnswers = {};
//   @track disableSubmit = true;
//   @track showResult = false;
//   @track score = 0;
//   totalQuestions;

//   connectedCallback() {
//     getExamPaperQuestions()
//       .then((result) => {
//         this.examPaperQuestions = result;
//         this.totalQuestions = this.examPaperQuestions.length;
//       })
//       .catch((error) => {
//         console.error('Error fetching exam paper questions', error);
//       });
//   }

//   handleOptionChange(event) {
//     this.selectedAnswers[event.target.name] = event.target.value;
//     this.disableSubmit = Object.keys(this.selectedAnswers).length !== this.totalQuestions;
//   }

//   submitExam() {
//     saveExamPaper({ examPaperQuestions: JSON.stringify(this.selectedAnswers) })
//       .then((result) => {
//         this.score = result;
//         this.showResult = true;
//       })
//       .catch((error) => {
//         console.error('Error submitting exam paper', error);
//       });
//   }
// }


//------------------------------------
// import { LightningElement, track } from 'lwc';
// import getExamPaperQuestions from '@salesforce/apex/ExamPaperController.getExamPaperQuestions';
// import saveExamPaper from '@salesforce/apex/ExamPaperController.saveExamPaper';

// export default class ExamPaper extends LightningElement {
//   @track examPaperQuestions;
//   @track selectedAnswers = {};
//   @track disableSubmit = true;
//   @track showResult = false;
//   @track score = 0;
//   totalQuestions;
//   questionNumber = [];

//   connectedCallback() {
//     getExamPaperQuestions()
//       .then((result) => {
//         this.examPaperQuestions = result.map((question, index) => {
//           this.questionNumber.push(index + 1);
//           return {
//             ...question,
//             Options: [question.Option_A__c, question.Option_B__c, question.Option_C__c, question.Option_D__c],
//           };
//         });
//         this.totalQuestions = this.examPaperQuestions.length;
//       })
//       .catch((error) => {
//         console.error('Error fetching exam paper questions', error);
//       });
//   }

//   handleOptionChange(event) {
//     this.selectedAnswers[event.target.name] = event.target.value;
//     this.disableSubmit = Object.keys(this.selectedAnswers).length !== this.totalQuestions;
//   }

//   submitExam() {
//     saveExamPaper({ examPaperQuestions: JSON.stringify(this.selectedAnswers) })
//       .then((result) => {
//         this.score = result;
//         this.showResult = true;
//       })
//       .catch((error) => {
//         console.error('Error submitting exam paper', error);
//       });
//   }
// }
//-------------------------------------c/alarmClock
// 
import { LightningElement, track } from 'lwc';
import getExamPaperQuestions from '@salesforce/apex/ExamPaperController.getExamPaperQuestions';
import saveExamPaper from '@salesforce/apex/ExamPaperController.saveExamPaper';

export default class ExamPaper extends LightningElement {
  @track examPaperQuestions;
  @track selectedAnswers = {};
  @track disableSubmit = true;
  @track showResult = false;
  @track score = 0;
     correctAnswers = 0 //to show the number of correct answers
    isSubmitted = false
  totalQuestions;

  connectedCallback() {
    getExamPaperQuestions()
      .then((result) => {
        this.examPaperQuestions = result.map((question) => ({
           ...question,
          Options: [question.Option_A__c, question.Option_B__c, question.Option_C__c, question.Option_D__c],
        }));
        this.totalQuestions = this.examPaperQuestions.length;
        this.correctAnswers =this.question.Answer__c.length
      })
      .catch((error) => {
        console.error('Error fetching exam paper questions', error);
      });
  }

  handleOptionChange(event) {
    this.selectedAnswers[event.target.name] = event.target.value;
    this.disableSubmit = Object.keys(this.selectedAnswers).length !== this.totalQuestions;
  }
   
  // for applying dynamic styling to our result
  get isScoredFull(){
    return `slds-text-heading_large ${this.examPaperQuestions.length === this.selectedAnswers?
        'slds-text-color_success':'slds-text-color_error'}`
}
// changeHandler get's called on every click on the options
changeHandler(event){
    const {name, value} = event.target 
    this.selected={...this.selected, [name]:value}
}
//form submit handler
submitHandler(event){
    event.preventDefault()
    let correct = this.examPaperQuestions.filter(item=>this.selectedAnswers[item.id] === item.correctAnswer)
    this.correctAnswers = correct.length
    this.isSubmitted = true
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



