import { LightningElement,track} from 'lwc';


export default class Samplecomponent extends LightningElement {

    @track timeRemaining = 0;
    timerInterval;
    
    startTimer() {
        this.timeRemaining = 10; // Set the initial time in seconds
        
            let promise = new Promise(function(resolve,reject){
                this.timerInterval = setInterval(() => {
                    if (this.timeRemaining > 0) {
                        this.timeRemaining--;
                    } else {
                        clearInterval(this.timerInterval);
                    }
                }, 1000); // Update the time every second
            })
            
            
   
}
