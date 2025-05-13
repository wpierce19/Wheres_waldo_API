const game_timer = (onTick) => {
  interval = setInterval(() => {
    currentTime++;
    onTick(currentTime);
  }, 1000);
};

export default game_timer;