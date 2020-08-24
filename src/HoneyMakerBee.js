var HoneyMakerBee = function() {
  Bee.call(this) {
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;

  }
};

// HoneyMakerBee.prototype {

// }

HoneyMakerBee.prototype.makeHoney = function() {this.honeyPot = this.honeyPot++};

HoneyMakerBee.prototype.giveHoney = function() {this.honeyPot = this.honeyPot--;};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

// HoneyMakerBee.prototype = Object.create(Grub.prototype);

// HoneyMakerBee.prototype.makeHoney = function() {this.honey = this.honey++};

// HoneyMakerBee.prototype.makeHoney = function() {this.honey = this.honey - 1;};