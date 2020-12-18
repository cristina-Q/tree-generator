function getRandomHEXcolor() {
  let chars = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomRGBA(transp = 0.5) {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = transp;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
