function exercice1()
{
    let  canvasDom  =  document.querySelector('#ex1');
    let  ctx  =  canvasDom.getContext('2d');
    ctx.fillStyle  =  "red";
    ctx.fillRect(150, 50, 200, 200);
}

function exercice2()
{
    let  canvasDom  =  document.querySelector('#ex2');
    let  ctx  =  canvasDom.getContext('2d');
    let circle = {color: "blue",radius:100,x:250,y:140};
    ctx.fillStyle = 'blue';
    ctx.fillStyle = circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

function exercice3()
{
    let canvasDom = document.querySelector('#ex3');
    let ctx = canvasDom.getContext('2d');
    ctx.font = 'bold 68px Montserrat';
    ctx.fillStyle ='#000000';
    ctx.fillText('Geometry.io', 40, 170);
}

function exercice4()
{
    
    let i = 0;
    let  canvasDom  =  document.querySelector('#ex4');
    let  ctx  =  canvasDom.getContext('2d');
    let circle = {color: "blue",radius:100,x:240,y:140};
    ctx.fillStyle = 'blue';
    ctx.fillStyle = circle.color;
    
    
    let intervalId = setInterval(function(){
    if (i < 150)
    {
    i = i+10;
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
    ctx.beginPath();
    ctx.arc((circle.x + i), circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
    
  }, 100);
}

function exercice5()
{
    
    let i = 0;
    let  canvasDom  =  document.querySelector('#ex5');
    let  ctx  =  canvasDom.getContext('2d');
    let circle = {color: "blue",radius:10,x:250,y:140};
    ctx.fillStyle = 'blue';
    ctx.fillStyle = circle.color;
    
    
    let intervalId = setInterval(function(){
    if (i < 150)
    {
    i = i+10;
    ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, (circle.radius + i), 0, 2 * Math.PI);
    ctx.fill();
  }
    
  }, 100);
}


function exercice6()
{

}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});