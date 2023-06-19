function random(min, max) {
  return Math.random() * (max - min) + min;
}



var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// canvas.style.webkitFilter = "blur(3px)";

canvas.width = window.screen.width;
canvas.height = window.screen.height;
const seeds = []
var imageObj1 = new Image();
imageObj1.src = 'img/seed_1.svg';
var imageObj2 = new Image();
imageObj2.src = 'img/seed_2.svg';
var imageObj3 = new Image();
imageObj3.src = 'img/seed_3.svg';
var imageObj4 = new Image();
imageObj4.src = 'img/seed_4.svg';

// context.translate(50, 50)
// context.rotate(45 * Math.PI / 360)
// context.fillRect(0, 0, 50, 50)

class Seed {
  constructor() {
    this.x = random(-20, canvas.width - 20)
    this.y = random(-30, canvas.height - 30)
    this.minificator = random(0, 20)
    this.speed = random(4, 5)
    this.angle = random(0, 360)
    this.spin = Math.random() > 0.4 ? 1 : -1;
    this.img = this.getRandomImage()
  }

  draw() {
    context.save()
    context.translate(this.x, this.y)
    context.rotate(this.angle * Math.PI / 360 * this.spin)
    // context.fillStyle = 'red'
    // context.fillRect(0, 0, 100, 100)
    context.drawImage(this.img, 0 - this.img.width / 2, 0 - this.img.height / 2, this.img.width - this.minificator, this.img.height - this.minificator);
    context.restore()
  }

  getRandomImage() {
    const images = [imageObj1, imageObj2, imageObj3, imageObj4]
    const random = Math.floor(Math.random() * images.length);
    return images[random];
  }

  update() {
    this.angle += .3
    if (this.y > canvas.height) {
      this.y = 0 - this.img.height
      this.x = random(20, canvas.width + 20)
      this.minificator = random(0, 20)
    }
    this.y += this.speed
  }
}


function init() {
  for (let i=0; i<140; i++) {
    seeds.push(new Seed())
  }
}
init()


function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height)
  for (const seed of seeds) {
    seed.update()
    seed.draw()
  }
  requestAnimationFrame(animate)
}

animate()



// for (let i=0; i<10; i++) {
//   var imageObj = new Image();
//   imageObj.src = 'img/seed_1.svg';
//   imageObj.onload = function() {
//     // context.drawImage(imageObj, random(0, 1000), random(0, 500), imageObj.width, imageObj.height);
//     // context.rotate(Math.PI / 180 * (90 + 5));
//     context.drawImage(imageObj, random(300, 600), random(150, 300), imageObj.width, imageObj.height);
//     imageObj.classList.add('r')
//     // context.restore();
//   };

// }


