<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
    <style>
      html, body {
        margin: 0;
        padding: 0;
      }
    </style>
    <meta charset="utf-8" />

  </head>
  <body>
    <script>
      var bubbles = [];

      function setup() {
        createCanvas(600, 400);
  
      	for (var i = 0; i < 10; i++) {
      		bubbles.push({
      			x: random(width),
      			y: random(height),
      			radius: random(10, 80)
      		});
      	}
      }

      function draw() {
        background(200);
	
        for (var i = 0; i < bubbles.length; i++) {
      		var bubble = bubbles[i];
		
          if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      			if (mouseIsPressed) {
      				bubbles.splice(i, 4); // remove this bubble!
      			}
      			fill(55, 200, 200, 200);
      		} else {
      			fill(1225, 20, 200, 200);
      		}
	
          ellipse(bubble.x, bubble.y, bubble.radius*0.95);
      		bubble.x += random(-0.975,0.975);
      		bubble.y += random(-0.12,0.12);
      	}
      }
    </script>
  </body>
</html>
