var mouseEvent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
color=document.getElementById("colorinput").value;
console.log(color);
mouse_x=e.clientX-canvas.offsetLeft;
mouse_y=e.clientY-canvas.offsetTop;
console.log("X="+ mouse_x +",Y= "+ mouse_y);
circle(mouse_x , mouse_y);  
}
function circle(mouse_x , mouse_y)
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);
ctx.stroke();   
}
function clearArea() 
{ ctx.clearRect(0, 0, canvas.width, canvas.height); }
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
     width_of_line = document.getElementById("width").value;
      radius = document.getElementById("radius").value;
       mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
 function my_mousemove(e)
  { current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = e.clientY - canvas.offsetTop; 
     if (mouseEvent == "mouseDown") 
     { console.log("Current position of x and y coordinates = ");
      console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
       ctx.beginPath(); ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
         ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
          ctx.stroke(); } }
function clearArea()
 { ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 }