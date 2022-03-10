// alexthescott
// 22/3/10

let item_len = 14;
let item_count = 16;
let total_item_len = item_len * item_count;
let items = []
let fc = 0

class item {
  constructor(x, y, tb, tk) {
    this.cx = x;
    this.cy = -item_len - 1;
    this.gx = x;
    this.gy = y;
    this.tb = tb;
    this.tk = tk;
  }

  draw() {
    if (fc > this.tb && this.cy <= this.gy) {
      fill(256 * this.cy / this.gy);
    } else if (fc > this.tk && this.cy <= height) {
      fill(256 * (1.5 - (this.cy / height)));
    }
    square(this.cx, this.cy, item_len + 0.04);
  }

  update(fc) {
    if (fc > this.tb && this.cy <= this.gy) {
      this.cy += Math.max(0.01, (this.gy - this.cy) / 50);
    } else if (fc > this.tk && this.cy <= height) {
      this.cy += Math.max(0.01, (1.5 * height - this.cy) / 50);
    }
  }
}

function init_items() {
  for (let x = 0; x < total_item_len; x += item_len) {
    for (let y = 0; y < total_item_len; y += item_len) {
      let i_x = width / 2 + x - total_item_len / 2;
      let i_y = height / 2 + y - total_item_len / 2;
      let tb = 60 + Math.floor(random(180));
      let tk = 720 + Math.floor(random(180));
      items.push(new item(i_x, i_y, tb, tk));
    }
  }
}

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent('sketch')
  background(0);
  noStroke();
  init_items()
}

function draw() {
  background(0);
  for (i = 0; i < items.length; i++) {
    items[i].draw()
    items[i].update(fc)
  }
  fc += 1;
  if (fc % 1080 == 0) {
    fc = 0;
    init_items()
  }
}