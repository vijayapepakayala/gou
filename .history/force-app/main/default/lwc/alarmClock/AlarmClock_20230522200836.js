import { LightningElement, track,wire } from 'lwc';
import getAlarmSound from '@salesforce/apex/MusicFileController.getAlarmSound';
export default class AlarmClock extends LightningElement {
  @track alarmTime = '';
  @track isAlarmSet = false;
  @track isPlaying = false;
  @track volume = 1; // Initial volume level, can be between 0 and 1
  // Rest of the component code

  @wire(getAlarmSound)
  wiredAlarmSound({ error, data }) {
    if (data) {
      this.alarmSound = data;
    } else if (error) {
      console.error('Error retrieving alarm sound:', error);
    }
  }

  handleTimeChange(event) {
    this.alarmTime = event.target.value;
    this.isAlarmSet = false;
  }

  setAlarm() {
    const currentTime = new Date();
    const alarmTime = new Date(currentTime.toDateString() + ' ' + this.alarmTime);

    const timeDifference = alarmTime.getTime() - currentTime.getTime();

    if (timeDifference > 0) {
      this.isAlarmSet = true;
      setTimeout(() => {
        this.playAlarm();
      }, timeDifference);
    } else {
      alert('Please set a future time for the alarm.');
    }
  }

  playAlarm() {
    this.isPlaying = true;
    const audioElement = this.template.querySelector('audio');
    audioElement.play();
    alert('Alarm triggered!');
  }

  stopAlarm() {
    this.isPlaying = false;
    this.isAlarmSet = false;
    const audioElement = this.template.querySelector('audio');
    audioElement.pause();
    audioElement.currentTime = 0;
  }

  increaseVolume() {
    if (this.volume < 1) {
      this.volume += 0.1;
      this.updateAudioVolume();
    }
  }

  decreaseVolume() {
    if (this.volume > 0) {
      this.volume -= 0.1;
      this.updateAudioVolume();
    }
  }

  updateAudioVolume() {
    const audioElement = this.template.querySelector('audio');
    audioElement.volume = this.volume;
  }
}
