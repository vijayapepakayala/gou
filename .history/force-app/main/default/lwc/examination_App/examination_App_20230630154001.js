import { LightningElement, track, wire } from 'lwc';
export default class ExamApp extends LightningElement {
  courses = [
    { id: 'admin', name: 'SFDC Administration', questions: [...] },
    { id: 'dev', name: 'SFDC Development', questions: [...] },
    { id: 'lwc', name: 'SFDC LWC', questions: [...] },
    { id: 'java', name: 'Java', questions: [...] }
  ];
  LwcCourse=[
    {
        id:"Question1",
        question:"Which one of the following is not a template loop?",
        answers:{
            a:"for:each",
            b:"iterator",
            c:"map loop"
        },
        correctAnswer:"c"
    },
    {
        id:"Question2",
        question:"Which of the file is invald in LWC component folder?",
        answers:{
            a:".svg",
            b:".apex",
            c:".js"
        },
        correctAnswer:"b"
    },
    {
        id:"Question3",
        question:"WHich one of the following is not a directive?",
        answers:{
            a:"for:each",
            b:"if:true",
            c:"@track"
        },
        correctAnswer:"c"
    }
  selectedCourse = null;
  selectedAnswers = {};
  showExamPaper = false;
  showTestResult = false;
  testResultMessage = '';

  handleCourseClick(event) {
    const courseId = event.currentTarget.dataset.courseId;
    this.selectedCourse = this.courses.find(course => course.id === courseId);
    this.showExamPaper = true;
  }

  handleAnswerSelection(event) {
    const questionId = event.target.name;
    const answerId = event.target.value;
    this.selectedAnswers[questionId] = answerId;
  }

  handleSubmit() {
    let score = 0;
    let totalQuestions = 0;

    for (const question of this.selectedCourse.questions) {
      totalQuestions++;

      if (this.selectedAnswers[question.id] === question.answer) {
        score++;
      }
    }

    this.showExamPaper = false;
    this.showTestResult = true;

    if (score >= 20) {
      this.testResultMessage = 'Great! You have completed the test.';
    } else {
      this.testResultMessage = `You scored ${score} out of ${totalQuestions}. Please try again.`;
    }
  }
}
