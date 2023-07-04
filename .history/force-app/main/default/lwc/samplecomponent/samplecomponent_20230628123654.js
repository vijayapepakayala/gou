import { LightningElement,track} from 'lwc';


export default class Samplecomponent extends LightningElement {

    @track timeRemaining = 0;
    timerInterval;
    startTimer() {
        const totalTime = 60; // Total time in seconds
        let currentTime = totalTime;

        // Update time remaining every second
        this.timerInterval = setInterval(() => {
            currentTime -= 1;
            this.timeRemaining = currentTime;

            if (currentTime <= 0) {
                this.stopTimer();
            }
        }, 1000);
    }

    stopTimer() {
        clearInterval(this.timerInterval);
    }
   
}
