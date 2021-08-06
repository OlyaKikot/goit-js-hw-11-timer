const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }, updateFace) {
    this.days = 0;
    this.hours = 0;
    this.mins = 0;
    this.secs = 0;
    this.updateFace = updateFace;
    this.selector = selector;
    this.targetDate = targetDate;
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      const time = this.targetDate - Date.now();
      this.updateFace(this.getTimeComponents(time));
    }, 1000);
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function updateFace({ days, hours, mins, secs }) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

new CountdownTimer(
  {
    selector: '#timer-1',
    targetDate: new Date('Aug 28, 2021'),
  },
  updateFace,
).startTimer();
