const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");

let width, height;
let mouse = { x: 0, y: 0 };

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

window.addEventListener("resize", resize);
window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

resize();

function draw() {
  ctx.clearRect(0, 0, width, height);
  const spacing = 30;

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 180;
      const scale = Math.max(0, 1 - dist / maxDist);

      const size = 2 + scale * 6;

      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();
    }
  }

  requestAnimationFrame(draw);
}

draw();
