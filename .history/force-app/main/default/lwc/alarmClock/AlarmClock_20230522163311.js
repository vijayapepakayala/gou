import { LightningElement, track } from 'lwc';

export default class AlarmClock extends LightningElement {
  @track alarmTime = '';
  @track isAlarmSet = false;
  @track isPlaying = false;
  alarmSound = 'path/to/alarm-sound.mp3'; // Replace with the actual path to your alarm sound file

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
}
