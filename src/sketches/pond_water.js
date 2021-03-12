// https://dribbble.com/shots/3450541-Ripples


export default function sketch(p){
  var colors = [["#E63946", "#4CC9F0"],
  ["#023047", "#FFB703"],
  ["#081c15", "#52b788"],
  ["#deaaff", "#c0fdff"],
  ["#fb5607", "#ff006e"],
  ["#355070", "#b56576"]];

  // pick one of 6 colors
  var palette_choice = Math.floor(Math.random() * colors.length);
  var palette = colors[palette_choice];

  // decide if ripple color and bg color should be flipped
  var bg_flip = Math.floor(Math.random() * 2);
  var bg;
  var ripple_color;

  if(bg_flip === 0){;
  bg = palette[0];
  ripple_color = palette[1];
  } else{
  bg = palette[1];
  ripple_color = palette[0];
  }

  // 3 ripples, avoid one corner
  var avoid_pos = Math.floor(Math.random() * 4);
  var ripples = [];

  var canvas;

  p.setup = () => {
    canvas = p.createCanvas(400, 400);
    for(var i = 0; i < 4; i++){
      if (i !== avoid_pos){
        ripples.push(new ripple(i));
      }
    }
    p.noFill();
  }

  p.draw = () => {
    p.background(bg);
    p.stroke(ripple_color);
    // framed rectangle around the canvas
    p.strokeWeight(12);
    p.rect(0, 0, p.width, p.height);
    // draw all ripples
    p.strokeWeight(5);
    for(var i = 0; i < ripples.length; i++){
      var ripple = ripples[i];
      ripple.draw();
    }
  }

  class ripple {
    constructor(pos){
      this.ripples = [];
      this.speed = 0.25;
      this.max_size = 2.25 * Math.sqrt((p.width * p.width) + (p.height * p.height));
      this.spawn_rate = 6; // measured in seconds

      var ripple_gap = this.speed * this.spawn_rate * 60;
      var num_of_ripples = 1 + this.max_size / ripple_gap;

      // prepopulate the ripples 
      for (var i = num_of_ripples; i > 0; i--){
        this.ripples.push(i*ripple_gap);
      }

      // decide corner 
      if (pos === 0){
        this.x = -p.width/10;
        this.y = -p.height/10;
      } else if (pos === 1){
        this.x = p.width + p.width/10;
        this.y = -p.height/10;
      } else if (pos === 2){
        this.x = -p.width/10;
        this.y = p.height + p.height/10;
      } else{
        this.x = p.width + p.width/10;
        this.y = p.height + p.height/10;
      }
    }

    draw(){
      // spawn new ripples at a regular frequency
      if ((p.frameCount % (this.spawn_rate * 60)) === 0){
        this.ripples.push(0);
      }

      for(var i = 0; i < this.ripples.length; i++){
        // pop from list if ripple can't be seen
        if (this.ripples[i] >= this.max_size){
          this.ripples.shift();
        }  

        // draw and grow ripple
        p.circle(this.x, this.y, this.ripples[i]);
        this.ripples[i] += this.speed;
      }
    }
  }
}

