// http://www.emohr.com/manfred7.html -> early algorithms, random_walk

export default function sketch(p){
  var bg;
  var line_color;

  if (getRandomInt(0, 1) === 1){
    bg = 255;
    line_color = 0;
  } else{
    bg = 0;
    line_color = 255;
  }

  var walker;

  p.setup = () => {
    p.createCanvas(400, 400);
    walker = new random_walk();
    p.frameRate(20)
    p.strokeCap(p.SQUARE);
    p.strokeJoin(p.BEVEL);
    p.stroke(line_color);
  }


  p.draw = () => {
    p.background(bg);
    walker.draw();
  }

  class random_walk {
    constructor() {
      this.steps = 100;
      this.size = Math.max(p.width, p.height);
      this.min_size = Math.min(p.width, p.height);
      this.border = this.min_size / 10;
      this.front_x = getRandomInt(this.border, p.width - this.border);
      this.front_y = getRandomInt(this.border, p.height - this.border);
      this.points = [[this.front_x, this.front_y]];
      this.strokeWeights = [];
      this.orientation = getRandomInt(0, 1);
      this.vert_const = 2;
      this.hori_const = 2.75;
    }

    draw() {
      this.update()
      for (var i = 0; i < this.points.length - 1; i++) { 
        var point_a = this.points[i];
        var point_b = this.points[i + 1];
        p.strokeWeight(this.strokeWeights[i]);
        p.line(point_a[0], point_a[1], point_b[0], point_b[1]);
      }
    }

    update() {
      if (this.steps > 0) {
        // 0 -> up, 1 -> down, 2 -> right, 3 -> left
        let direction = null;
        let weight = 1;
        if (this.orientation === 0){
          direction = getRandomInt(0, 1);
          // 14% chance if horizontal has a thicker stroke
          if(getRandomInt(0, 50) < 7){
            weight = getRandomInt(3, 6);
          }
        } else{
          direction = getRandomInt(2, 3)
          // coin flip if horizontal has a thicker stroke
          if(getRandomInt(0, 1) === 1){
            weight = getRandomInt(3, 6);
          }
        }
        
        let new_x = this.front_x;
        let new_y = this.front_y;
        
        // after determining the direction, 'bounce' the 
        // line_len value if moving to that space would
        // put ut outside of the border
        if (direction === 0) {
          // move up, bounce down if needed
          let dist = this.front_y - this.border;
          let line_len = getRandomInt(3, dist/this.vert_const);
          new_y -= line_len;
        } else if (direction === 1) {
          // move down, bounce up if needed  
          let dist = p.height - this.front_y - this.border;
          let line_len = getRandomInt(3, dist/this.vert_const);
          new_y += line_len;
        } else if (direction === 2) {
          // move right, bounce left if needed  
          let dist = p.width - this.border - this.front_x;
          let line_len = getRandomInt(3, dist/this.hori_const);
          new_x += line_len
        } else if (direction === 3){
          // move left, bounce right if needed  
          let dist = this.front_x - this.border;
          let line_len = getRandomInt(3, dist/this.hori_const);
          new_x -= line_len;
        }
        this.points.push([new_x, new_y]);
        this.strokeWeights.push(weight);
        this.front_x = new_x;
        this.front_y = new_y;
              
        if(this.orientation === 0){
          this.orientation = 1;
        } else{
          this.orientation = 0;
        }
        this.steps--;
        } else if (this.steps > -100){
        // hold drawing
        this.steps--
      } else{
        this.steps = 100;
        this.points = [[this.front_x, this.front_y]];
      }
    }
  }


  function getRandomInt(min, max) {
    // max and min are inclusive
    return min + Math.floor(Math.random() * Math.floor(1 + max - min));
  }
}