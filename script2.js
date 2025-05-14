const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", () => {
  resizeCanvas();
  drawGrid();
});

function drawGrid() {
  resizeCanvas();
  const columns = parseInt(document.getElementById("columns").value, 10);
  const gutter = parseInt(document.getElementById("gutter").value, 10);
  const margin = parseInt(document.getElementById("margin").value, 10);

  const width = canvas.width - margin * 2;
  const colWidth = (width - gutter * (columns - 1)) / columns;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < columns; i++) {
    const x = margin + i * (colWidth + gutter);
    ctx.fillStyle = "#f88";
    ctx.fillRect(x, 100, colWidth, canvas.height - 200);
  }

  ctx.strokeStyle = "#aaa";
  ctx.strokeRect(margin, 100, width, canvas.height - 200);
}

function downloadPDF() {
  alert("PDF export not implemented in this demo.");
}

drawGrid();
