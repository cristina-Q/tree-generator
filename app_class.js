const panel = document.createElement('div');
panel.classList.add('panel');

const initialmsg = 'Click anywhere inside canvas for XY coordinates';
panel.innerText = initialmsg;

let clientWidth = document.body.clientWidth;
let clientHeight = document.body.clientHeight;

const canvasTree = document.createElement('canvas');
canvasTree.width = clientWidth;
canvasTree.height = clientHeight;

document.body.append(panel);

class Tree {
  canvas = canvasTree;

  constructor(loc = [400, 700], length = 150, rotate = 0, thick = 15) {
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

canvasTree.addEventListener('click', (event) => {
  panel.innerText = `[ ${event.clientX} , ${event.clientY} ]`;
});

let tree1 = new Tree();
tree1.draw();

let tree2 = new Tree();
tree2.draw([1200, 600], 100, 0, 5);

let tree3 = new Tree([1000, 700], 100, 0, 7);
tree3.draw();

let tree4 = new Tree([1000, 700], 100, 0, 7);
tree4.draw();
