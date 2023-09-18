// Tree config  
const config = {
  length: 10,
  lifeStart: 32, 
  branchMultiplier: 5,
  leaves: ["~", "*", "#", "@"]
};

// Main tree object
let tree = {};

// Initialization
function init() {

  // Create trunk
  tree.trunk = {
    x: 0,
    y: 0, 
    branches: [],
    life: config.lifeStart
  };

  draw();
}

// Main draw loop
function draw() {

  // 2D array to represent display
  let display = [];

  // Add new branches
  if (Math.random() < 0.1 && tree.trunk.life > config.branchMultiplier) {
    let branch = {
      x: tree.trunk.x,
      y: tree.trunk.y + 1,
      life: tree.trunk.life / 2
    };
    tree.trunk.branches.push(branch);
  }

  // Update all segments
  updateSegment(tree.trunk);
  for (let branch of tree.trunk.branches) {
    updateSegment(branch);
  }

  // Helper to update segment position and life
  function updateSegment(segment) {
    segment.x += Math.random() > 0.5 ? 1 : -1;
    segment.y++; 
    segment.life--;
  }

  // Build display array 
  for (let seg of [tree.trunk, ...tree.trunk.branches]) {
    if (!display[seg.y]) {
      display[seg.y] = [];
    }
    display[seg.y][seg.x] = config.leaves[Math.floor(Math.random() * config.leaves.length)];
  }

  // Draw display
  let treeHTML = "";
  for (let y = 0; y < display.length; y++) {
    for (let x = 0; x < display[y].length; x++) {
      if (display[y][x]) {
        treeHTML += display[y][x];
      } else {
        treeHTML += " ";  
      }
    }
    treeHTML += "<br>";
  }

  document.getElementById("tree").innerHTML = treeHTML;

  requestAnimationFrame(draw);
}

init();