import { LightningElement } from 'lwc';
export default class ExamApp extends LightningElement {
  courses = [
    {
      id: 'admin',
      name: 'SFDC Administration',
      questions: [
        {
          id: 'q1',
          text: 'Question 1',
          options: [
            { id: 'q1o1', text: 'Option 1' },
            { id: 'q1o2', text: 'Option 2' },
            { id: 'q1o3', text: 'Option 3' },
            { id: 'q1o4', text: 'Option 4' }
          ],
          answer: 'q1o2' // ID of the correct answer option
        },
        // Add more questions here...
      ]
    },
    {
      id: 'dev',
      name: 'SFDC Development',
      questions: [
        {
          id: 'q1',
          text: 'Question 1',
          options: [
            { id: 'q1o1', text: 'Option 1' },
            { id: 'q1o2', text: 'Option 2' },
            { id: 'q1o3', text: 'Option 3' },
            { id: 'q1o4', text: 'Option 4' }
          ],
          answer: 'q1o3' // ID of the correct answer option
        },
        // Add more questions here...
      ]
    },
    // Add more courses here...
    {
      id: 'Lwc',
      name: 'SFDC Development',
      questions: [
        {
          id: 'q1',
          text: 'Question 1',
          options: [
            { id: 'q1o1', text: 'Option 1' },
            { id: 'q1o2', text: 'Option 2' },
            { id: 'q1o3', text: 'Option 3' },
            { id: 'q1o4', text: 'Option 4' }
          ],
          answer: 'q1o3' // ID of the correct answer option
        },
        // Add more questions here...
      ]
    },
    {
      id: 'Java',
      name: 'SFDC Development',
      questions: [
        {
          id: 'q1',
          text: 'Question 1',
          options: [
            { id: 'q1o1', text: 'Option 1' },
            { id: 'q1o2', text: 'Option 2' },
            { id: 'q1o3', text: 'Option 3' },
            { id: 'q1o4', text: 'Option 4' }
          ],
          answer: 'q1o3' // ID of the correct answer option
        },
        // Add more questions here...
      ]
    }
  ];
  
  
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
