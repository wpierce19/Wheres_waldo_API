const timers = {};

const startTimer = (userId, onTick) => {
  if (timers[userId]) return;

  let currentTIme = 0;
  timers[userId] = { interval: null, currentTIme };

  const interval = setInterval(() => {
    currentTIme++;
    timers[userId].currentTIme = currentTIme;
    onTick?.(currentTIme); // Optional callback, no network!
  }, 1000);

  timers[userId].interval = interval;
};

const stopTimer = (userId) => {
  const timer = timers[userId];
  if (timer) {
    clearInterval(timer.interval);
    const finalTime = timer.currentTIme;
    delete timers[userId];
    return finalTime;
  }
  return null;
};

const getTime = (userId) => {
  return timers[userId]?.currentTIme || 0;
};

export default {
  startTimer,
  stopTimer,
  getTime
}