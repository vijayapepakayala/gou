import { LightningElement,track } from 'lwc';

export default class Samplecomponent extends LightningElement {

    @track timeRemaining = '5:00';
    @track isTimerRunning = false;
    timerTimeout;
  
    startTimer() {
      if (this.isTimerRunning) return;
  
      const endTime = new Date().getTime() + 5 * 60 * 1000; // Set end time 5 minutes from now
  
      const updateTimer = () => {
        const now = new Date().getTime();
        const distance = endTime - now;
  
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        this.timeRemaining = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
        if (distance > 0) {
          this.timerTimeout = setTimeout(updateTimer, 1000);
        } else {
          this.isTimerRunning = false;
          this.timeRemaining = '0:00';
        }
      };
  
      this.isTimerRunning = true;
      updateTimer();
    }
  
    stopTimer() {
      clearTimeout(this.timerTimeout);
      this.isTimerRunning = false;
    }
  }
}

