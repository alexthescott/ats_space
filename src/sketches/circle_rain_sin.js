// alexthescott 4/24/21
// Attempt at a faithful recreation of the sketch linked below! 
// https://twitter.com/beesandbombs/status/1385611174704713728

export default function sketch(p){
  let time = 0
  let vel = NaN // TWO_PI / 300 assigned in setup()
  let hori_count= 14
  let vert_count = 7
  let colors = ["#F94144", "#F65A38", "#F3722C",
                "#F68425", "#F8961E", "#F9AF37",
                "#F9C74F", "#C5C35E", "#90BE6D",
                "#6AB47C", "#43AA8B", "#4D908E",
                "#52838F", "#577590"]

  p.setup = () => {
    p.createCanvas(400, 400);
    p.noFill()
    p.strokeWeight(3)
    p.blendMode(p.SCREEN)
    vel = p.TWO_PI / 300
  }

  p.draw = () => {
    p.clear()
    p.background(0, 0, 32);
    for (let y = 0; y < vert_count; y++){
      for (let t = 0; t < hori_count; t++){
          let y_pos = p.map(p.sin(time + t / 6 + y / 2), -1, 1, 75, p.width - 75)
          let x_pos = p.map(y, 0, vert_count - 1, 50, p.height - 50)  
          p.stroke(colors[t])
          p.circle(x_pos, y_pos, 35)
      }
    }
    time += vel
  }
}