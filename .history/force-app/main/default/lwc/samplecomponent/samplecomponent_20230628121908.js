import { LightningElement} from 'lwc';


export default class Samplecomponent extends LightningElement {
    //form submit handler
    submitHandler(event){
        event.preventDefault()
        let correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        this.isSubmitted = true
    }
   
}
