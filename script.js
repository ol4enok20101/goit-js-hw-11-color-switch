const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
]; 

const body = document.querySelector('body');
const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');

const timer = {
  intervalId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    console.log('start time: ', startTime);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();

      const deltaTime = currentTime - startTime;
      updateColor(deltaTime);
    }, 1000);
  },
  stop() {
    this.isActive = false;
    clearInterval(this.intervalId);
  },
};

startButton.addEventListener('click', timer.start.bind(timer));
stopButton.addEventListener('click', timer.stop.bind(timer));

function updateColor(time) {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log();
}
