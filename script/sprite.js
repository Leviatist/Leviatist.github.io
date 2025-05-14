const sprite = document.getElementById('sprite');

const frameWidth = 16;
const frameHeight = 16;
const frames = [
  [0, 0],      // 帧0（左上）
  [16, 0],     // 帧1（右上）
  [0, 16],     // 帧2（左下）
  [16, 16]     // 帧3（右下）
];

let currentFrame = 0;

setInterval(() => {
  const [x, y] = frames[currentFrame];
  sprite.style.backgroundPosition = `-${x}px -${y}px`;
  currentFrame = (currentFrame + 1) % frames.length;
}, 150); // 每 200ms 播放一帧
