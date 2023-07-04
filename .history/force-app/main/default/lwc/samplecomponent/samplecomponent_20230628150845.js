import { LightningElement,track } from 'lwc';

export default class Samplecomponent extends LightningElement {

    @track studentName = '';
    @track isNameEntered = false;
    @track isTestStarted = false;
    @track timer = 300; // 5 minutes in seconds
  
    handleNameChange(event) {
      this.studentName = event.target.value;
      this.isNameEntered = true;
    }
  
    startTest() {
      this.isTestStarted = true;
      this.startTimer();
    }
  
    startTimer() {
      const intervalId = setInterval(() => {
        this.timer--;
        if (this.timer <= 0) {
          clearInterval(intervalId);
        }
      }, 1000);
    }
}


