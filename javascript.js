const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

int y = 0;

function draw() {
    ctx.fillRect(50,50,80,y++);
  
    window.requestAnimationFrame(draw);
}
  
draw();
