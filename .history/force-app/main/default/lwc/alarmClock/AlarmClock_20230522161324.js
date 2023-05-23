

import { LightningElement } from 'lwc';

export default class AlarmClock extends LightningElement {
  alarmTime;
  alarmInterval;

  handleTimeChange(event) {
    this.alarmTime = event.target.value;
  }

  setAlarm() {
    const currentTime = new Date().toLocaleTimeString('en-US', {
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    });

    if (this.alarmTime && currentTime === this.alarmTime) {
      this.playAlarmSound();
    } else {
      this.clearAlarm();
      this.alarmInterval = setInterval(() => {
        const updatedCurrentTime = new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
        });

        if (this.alarmTime && updatedCurrentTime === this.alarmTime) {
          this.playAlarmSound();
        }
      }, 1000);
    }
  }

  clearAlarm() {
    clearInterval(this.alarmInterval);
    this.stopAlarmSound();
  }

  playAlarmSound() {
    // Play the alarm sound
    // You can use HTML5 Audio or any audio library of your choice
    // Example:
    const alarmSound = new Audio('/path/to/alarm-sound.mp3');
    alarmSound.play();
  }

  stopAlarmSound() {
    // Stop the alarm sound
    // Example:
    const alarmSound = new Audio('/path/to/alarm-sound.mp3');
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }
}
