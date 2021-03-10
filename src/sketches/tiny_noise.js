// tiny noise
// Alex Scott, 2020
// -> ... cell_size / (width || height) must be an int

export default function sketch(p){

  var palettes = [['#273043', '#F02D3A', '#EFF6EE'],
  ['#1E2019', '#E2C044', '#587B7F'],
  ['#15A0A2', '#4A8FE7', '#44E5E7'],
  ['#5C95FF', '#B9E6FF', '#F87575'],
  ['#2C302E', '#474A48', '#909590'],
  ['#243010', '#829E2E', '#AFCC66']];

  // pick one of 6 palettes
  var palette_choice = Math.floor(Math.random() * palettes.length);
  var palette = palettes[palette_choice];

  var cell_size = 8;
  var noise_const = 0.05;
  var time = 0;
  var time_vel = 0.5;
  var time_frailty = 3; // how much should time move noise?
  var slant;

  var canvas;
  
  p.setup = () => {
    canvas = p.createCanvas(400, 400);
    p.noiseDetail(3);
    p.noStroke();
    slant = p.map(p.random(0, 1), 0, 1, -1.25, 1.25);
    slant == 0 ? slant = 1 : slant = slant;
  }

  p.draw = () => {
    p.background(palette[0]);
    let x_grid = p.width / cell_size;
    let y_grid = p.height / cell_size;

    var x_cir = p.cos(time);
    var y_cir = p.sin(time);
  
    for (let x = 0; x < x_grid; x++) {
      for (let y = 0; y < y_grid; y++) {
        var x_off = x * noise_const / slant;
        var y_off = y * noise_const * slant;
        
        var c = p.noise(x_off, y_off, time);
  
        if (c >= 0.55) {
          p.fill(palette[1]);
          p.square(x * cell_size, y * cell_size, cell_size);
        } else if (c > 0.455) {
          p.fill(palette[2]);
          p.square(x * cell_size, y * cell_size, cell_size);
        }
      }
    }
    time += p.radians(time_vel);
  }

}