document.addEventListener('DOMContentLoaded', function() {
 let clickCount=0;
 const btn=document.getElementById("btn");
 const ruta=document.getElementById("ruta");
 const skit=document.getElementById("skit");
 const Display=document.getElementById("clickCount");
  Display.innerHTML=clickCount;
  
btn.addEventListener('click', function(){ 
  ruta.classList.add("synligt");
  ruta.classList.remove("osynligt");
  btn.classList.remove("synligt");
  btn.classList.add("osynligt");
});

ruta.addEventListener('click', function(){ 
  skit.classList.add("synligt");
  skit.classList.remove("osynligt");
  ruta.classList.remove("synligt");
  ruta.classList.add("osynligt");
});

skit.addEventListener('click', function(){ 
  btn.classList.add("synligt");
  btn.classList.remove("osynligt");
  skit.classList.remove("synligt");
  skit.classList.add("osynligt");
});



});