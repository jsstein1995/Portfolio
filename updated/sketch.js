var $ = document.querySelector.bind(document);
     var $on = document.addEventListener.bind(document);

     var xmouse, ymouse;
     $on('mousemove', function (e) {
          xmouse = e.clientX || e.pageX;
          ymouse = e.clientY || e.pageY;
     });

     var ball = $('#ball');
     var x = void 0,
          y = void 0,
          dx = void 0,
          dy = void 0,
          tx = 0,
          ty = 0,
          key = -1;

     var followMouse = function followMouse() {
          key = requestAnimationFrame(followMouse);

          if(!x || !y) {
               x = xmouse;
               y = ymouse;
          } else {
               dx = (xmouse - x) * 0.125;
               dy = (ymouse - y) * 0.125;
               if(Math.abs(dx) + Math.abs(dy) < 0.1) {
                    x = xmouse;
                    y = ymouse;
               } else {
                    x += dx;
                    y += dy;
               }
          }
          ball.style.left = x + 'px';
          ball.style.top = y + 'px';
     };


let mouseCursor = document.querySelector('.cursor');
let CursorPoint = document.querySelector('.cursorPoint');
let navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);
window.addEventListener('mousemove', cursorPoint);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
function cursorPoint(e) {
  CursorPoint.style.top = e.pageY + "px";
  CursorPoint.style.left = e.pageX + "px";
}
navLinks.forEach(links => {
  links.addEventListener('mouseleave', () => {
    CursorPoint.classList.remove('link-grow');
    ball.classList.remove('hovered-link-point');
    links.classList.remove('hovered-link');
  });
  links.addEventListener('mouseover', () => {
    CursorPoint.classList.add('link-grow');
    ball.classList.add('hovered-link-point');
    links.classList.add('hovered-link');
  });
});

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     background(0, 0, 10);
//   }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

//split text for animation

// const text = 'JACKSON STEIN'
// const splitText = strText.split('');

// for (let i = 0; i < splitText.length; i++) {
//   text.innerHTML += '<span>' + splitText[i] + '</span>'
// }

// var app = new Vue({
//   el:'#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })