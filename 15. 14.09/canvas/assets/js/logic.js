function drawStuff() {
  const myCanvas = document.getElementById("myCanvas");
  const painter = myCanvas.getContext("2d");

  //empty rectangle
  painter.beginPath();
  painter.strokeStyle = "blue";
  painter.strokeRect(10, 10, 100, 100); // x, y, width, height

  // Circle
  painter.beginPath();
  painter.strokeStyle = "red";
  // painter.beginPath();
  painter.arc(300, 300, 100, 0, 2 * Math.PI); // x, y, radius, start angle, end angle;  whole circle
  // painter.arc(300, 300 ,100 ,0, Math.PI); // half circle
  painter.stroke();

  // Empty text
  painter.beginPath();
  painter.strokeStyle = "green";
  painter.font = "40px Arial";
  painter.strokeText("hello world", 20, 400); //text, x, y

  // Line
  painter.beginPath();
  painter.strokeStyle = "gray";
  painter.moveTo(500, 400); // Place painter in this location
  painter.lineTo(640, 480); // Paint a line to this location
  painter.stroke();

  // Full rectangle
  painter.beginPath();
  painter.fillStyle = "yellow";
  painter.fillRect(10, 210, 100, 100); // x, y, width, height

  //Full circle
  painter.fillStyle = "red";
  painter.beginPath();
  painter.arc(300, 100, 100, 0, 2 * Math.PI);
  painter.fill();

  // Full text
  painter.beginPath();
  painter.fillStyle = "green";
  painter.font = "50px David";
  painter.fillText("Filled word", 20, 200);
}

const myCanvas = document.getElementById("myCanvas");
const painter = myCanvas.getContext("2d");

function mouseDraw(event) {
  if (event.buttons === 1) {
    painter.lineTo(event.offsetX, event.offsetY);
    painter.stroke();
  } // else {
  //   painter.moveTo(event.offsetX, event.offsetY);
  // }
}

function changeColor(color) {
  painter.beginPath();
  painter.strokeStyle = color;
}

function newPosition(event) {
  painter.moveTo(event.offsetX, event.offsetY);
}
