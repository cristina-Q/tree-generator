const canvasTree = document.getElementById('treeCanvas');
let cWidth = document.body.clientWidth;
let cHeight = document.body.clientHeight;

canvasTree.width = cWidth;
canvasTree.height = cHeight;

class Pine {
  canvas = canvasTree;
  constructor(loc = [cWidth * 0.2, cHeight * 0.98], length = 150, rotate = 0, thick = 15) {
    this.loc = loc;
    this.length = length;
    this.rotate = rotate;
    this.thick = thick;
  }

  ctx = this.canvas.getContext('2d');

  draw(treeLocation = this.loc, treeLength = this.length, treeRotate = this.rotate, treeThick = this.thick) {
    let self = this; // get a reference to draw

    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.lineWidth = treeThick;
    this.ctx.translate(...treeLocation);
    this.ctx.rotate((treeRotate * Math.PI) / 180);
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, -treeLength);
    this.ctx.stroke();

    if (treeLength > 15) {
      self.draw([0, -treeLength], treeLength * 0.6, 15, treeThick * 0.5);
      self.draw([0, -treeLength], treeLength * 0.5, 40, treeThick * 0.5);
      self.draw([0, -treeLength], treeLength * 0.5, 60, treeThick * 0.5);

      self.draw([0, -treeLength], treeLength * 0.8, 0, treeThick * 0.5);

      self.draw([0, -treeLength], treeLength * 0.6, -15, treeThick * 0.5);
      self.draw([0, -treeLength], treeLength * 0.5, -40, treeThick * 0.5);
      self.draw([0, -treeLength], treeLength * 0.5, -60, treeThick * 0.5);
    }

    this.ctx.restore();
    document.body.append(this.canvas);
  }
}

let pine1 = new Pine();
pine1.draw();

let pine2 = new Pine();
pine2.draw([700, 600], 100, 0, 5);

let pine3 = new Pine([1000, 700], 100, 0, 7);
pine3.draw();
