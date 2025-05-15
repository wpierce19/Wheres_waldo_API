const timers = {};

const startTimer = (userId, onTick) => {
  if (timers[userId]) return;

  let currentTIme = 0;
  const interval = setInterval(() => {
    currentTIme++;
    timers[userId].currentTIme = currentTIme;
    onTick(currentTIme);
  }, 1000);

  timers[userId] = {interval, currentTIme};
};

const stopTimer = (userId) => {
  if (timers[userId]) {
    clearInterval(timers[userId].currentTIme);
    const finalTime = timers[userId].currentTIme;
    delete timers[userId];
    return finalTime;
  }

  return null;
};

const getTime = (userId) => {
  return timers[userId]?.currentTIme || 0;
}

export default {startTimer, stopTimer, getTime};