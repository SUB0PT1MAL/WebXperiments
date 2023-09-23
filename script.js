function Bonsai() {
  this.pot = document.createElement("div");
  this.pot.className = "bonsai-pot";

  this.trunk = document.createElement("div");
  this.trunk.className = "bonsai-trunk";

  this.leaves = document.createElement("div");
  this.leaves.className = "bonsai-leaves";

  this.document = document;
  this.body = document.body;

  this.pot.appendChild(this.trunk);
  this.trunk.appendChild(this.leaves);

  this.body.appendChild(this.pot);

  this.grow();
}

Bonsai.prototype.grow = function() {
  this.trunk.style.height = this.trunk.style.height + 10 + "px";
  this.leaves.style.width = this.leaves.style.width + 10 + "px";

  if (this.trunk.style.height >= 500) {
    clearInterval(this.interval);
  }
};

Bonsai.prototype.start = function() {
  this.interval = setInterval(this.grow.bind(this), 100);
};

Bonsai.prototype.stop = function() {
  clearInterval(this.interval);
};

window.Bonsai = Bonsai;
