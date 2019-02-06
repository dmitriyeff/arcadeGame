// Enemies our player must avoid
var Enemy = function(x, y) {
  this.x = x;
  this.y = y;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  const distance = 300 * dt;
  this.x += distance;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor() {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 202;
    this.y = 380;
  }

  update() {
    if (this.y === -20) {
      this.x = 202;
      this.y = 380;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(key) {
    if (key === 'left' && this.x > 0) {
      this.x -= 101;
      console.log(player);
    }
    if (key === 'right' && this.x < 404) {
      this.x += 101;
      console.log(player)
    }
    if (key === 'down' && this.y < 380) {
      this.y += 80;
      console.log(player);
    }
    if (key === 'up' && this.y > -20) {
      this.y -= 80;
      console.log(player);
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
const enemy1 = new Enemy(0, 60);
const enemy2 = new Enemy(101, 140);
const enemy3 = new Enemy(380, 225);

allEnemies.push.apply(allEnemies, [enemy1, enemy2, enemy3]);

// Place the player object in a variable called player
const player = new Player();




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
