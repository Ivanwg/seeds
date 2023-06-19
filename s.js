function random(min, max) {
  return Math.random() * (max - min) + min;
}



var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
// canvas.style.webkitFilter = "blur(3px)";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const seeds = []
var imageObj1 = new Image();
imageObj1.src = 'img/seed_1.png';
var imageObj2 = new Image();
imageObj2.src = 'img/seed_2.png';
var imageObj3 = new Image();
imageObj3.src = 'img/seed_3.png';
var imageObj4 = new Image();
imageObj4.src = 'img/seed_4.png';

// context.translate(50, 50)
// context.rotate(45 * Math.PI / 360)
// context.fillRect(0, 0, 50, 50)

class Seed {
  constructor() {
    this.x = random(10, canvas.width - 10)
    this.y = random(0, 500)
    this.minificator = random(0, 20)
    this.speed = random(10, 15)
    this.angle = random(0, 360)
    this.spin = Math.random() > 0.4 ? 1 : -1;
    this.img = this.getRandomImage()
    this.drawisJumped = false
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
    // if (this.y < canvas.height && this.y > canvas.height - this.img.height) {
    //   if (!this.isJumped) {
    //     // this.y += random(-100, 100)
    //     this.x += random(-10, 10) 
    //     this.isJumped = true    
    //   }
    //   return
    //   this.y = 0 - this.img.height
    //   this.x = random(20, canvas.width + 20)
    //   this.minificator = random(0, 20)
    // }
    // this.angle += .3
    // this.y += this.speed
  }
}



function init() {
  for (let i=0; i<10; i++) {
    seeds.push(new Seed())
  }
  // for (let i=0; i<500; i++) {
  //   seeds.push(new Seed())
  // }
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


function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
    y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
  };
}

let mouse = {
  x: 0,
  y: 0
};


canvas.addEventListener('mousemove', e => {
  var pos = getMousePos(canvas, e);
  mouse.x = pos.x;
  mouse.y = pos.y;
 
})



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


