import { LightningElement,wire,track } from 'lwc';
// import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
// import { getRecord, updateRecord } from 'lightning/uiRecordApi';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getRecord } from 'lightning/uiRecordApi';

import JAVA_OBJECT from '@salesforce/schema/Java__c';
import QUESTION_FIELD from '@salesforce/schema/Java__c.Question__c';
import AVAILABLE_ANSWER_FIELD from '@salesforce/schema/Java__c.Available_Answer__c';
import ANSWER_FIELD from '@salesforce/schema/Java__c.Answer__c';
export default class ExamApp extends LightningElement {
  @track javaObject;
    @track questions = [];
    @track score = 0;
    @track isSubmitted = false;

    @wire(getObjectInfo, { objectApiName: JAVA_OBJECT })
    javaObjectInfo;

    @wire(getRecord, { recordId: '$recordId', fields: [QUESTION_FIELD, AVAILABLE_ANSWER_FIELD, ANSWER_FIELD] })
    wiredJavaObject({ error, data }) {
        if (data) {
            this.javaObject = data;
            this.parseQuestions();
        } else if (error) {
            // Handle error
        }
    }

    parseQuestions() {
        const fieldInfo = this.javaObjectInfo.data.fields;
        const questionField = fieldInfo[QUESTION_FIELD.fieldApiName];
        const availableAnswerField = fieldInfo[AVAILABLE_ANSWER_FIELD.fieldApiName];

        this.questions = [];

        if (questionField && availableAnswerField) {
            const questionLabels = questionField.picklistValues;
            const availableAnswers = availableAnswerField.picklistValues;

            questionLabels.forEach((questionLabel, index) => {
                const question = {
                    label: questionLabel.label,
                    value: questionLabel.value,
                    options: availableAnswers.map(answer => ({
                        label: answer.label,
                        value: answer.value,
                    })),
                };
                this.questions.push(question);
            });
        }
    }

    handleOptionChange(event) {
        const selectedValue = event.target.value;
        const questionIndex = event.target.dataset.questionindex;
        this.questions[questionIndex].selectedAnswer = selectedValue;
    }

    calculateScore() {
        this.score = this.questions.reduce((acc, question) => {
            if (question.selectedAnswer === question.value) {
                return acc + 1;
            }
            return acc;
        }, 0);
        this.isSubmitted = true;
    }

    get isSubmitDisabled() {
        return this.isSubmitted;
    }
}
