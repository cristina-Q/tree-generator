const placeBtn = document.createElement('button');
placeBtn.innerText = 'Generate Tree';
placeBtn.classList.add('placeBtn');

const panel = document.createElement('div');
panel.classList.add('panel');

const arrow = document.createElement('span');
arrow.classList.add('arrow');
arrow.innerText = '↪';

const initialmsg = 'Click anywhere inside canvas for XY coordinates of the next tree then press Generate button ';
panel.innerText = initialmsg;

const canvasTree = document.createElement('canvas');
canvasTree.width = 5000;
canvasTree.height = document.body.clientHeight;

document.body.append(panel);
document.body.append(placeBtn);
document.body.append(arrow);

class Tree {
  canvas = canvasTree;

  constructor(loc = [220, 700], length = 150, rotate = 0, thick = 15) {
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

let Xlocation, Ylocation;

canvasTree.addEventListener(
  'click',
  function (e) {
    const rect = canvasTree.getBoundingClientRect();
    Xlocation = Math.round(e.clientX - rect.left);
    Ylocation = Math.round(e.clientY - rect.top);

    panel.innerText = `Place your tree here: [ ${Xlocation} , ${Ylocation} ]`;
  },
  false,
);

placeBtn.addEventListener('click', (e) => {
  let anytree = new Tree([Xlocation, Ylocation], 70, 0, 7);
  anytree.draw();
});

let tree1 = new Tree();
tree1.draw();

let tree2 = new Tree();
tree2.draw([1200, 600], 100, 0, 5);

let tree3 = new Tree([1000, 700], 100, 0, 7);
tree3.draw();

let tree4 = new Tree([1000, 700], 100, 0, 7);
tree4.draw();

// const Xscroll = document.querySelector('body');

// window.addEventListener('wheel', function (e) {
//   if (e.deltaY > 0) {
//     Xscroll.scrollLeft += 100;
//   } else Xscroll.scrollLeft -= 100;
// });
