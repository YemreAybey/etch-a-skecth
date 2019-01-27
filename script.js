let container=document.getElementById("container");
let clear=document.querySelector("#clear");
let create=document.querySelector("#create");

let crGrid=16;
let color="";
let red="";
let green="";
let blue="";

clear.addEventListener("click", clearGrids);
create.addEventListener("click", changeGrids);



createGrid(crGrid);


function createGrid (dims){
  for (let i=0; i<dims*dims; i++){
  let grids=document.createElement("div");
  grids.classList.add("grids");
  grids.addEventListener("mouseover", changeColor);
  grids.style.width=450/dims + "px";
  grids.style.height=450/dims + "px";
  grids.style.boxShadow="0px 0px 0px 1px black inset";
  grids.style.display="inline-block";
  grids.style.float="left";
  container.appendChild(grids);
}
}

function changeColor(){

  if (this.classList.contains("colored")){
    color=this.style.backgroundColor;
    let regex = /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    let newColor = regex.exec(color);
    red=newColor[1]*0.9;
    green=newColor[2]*0.9;
    blue=newColor[3]*0.9;
    color=`rgb(${red}, ${green}, ${blue})`;
    this.style.backgroundColor=color;
}
  else {
    red=Math.random()*256;
    green=Math.random()*256;
    blue=Math.random()*256;
    color=`rgb(${red}, ${green}, ${blue})`;
    this.style.backgroundColor=color;
    this.classList.add("colored");
}
}


function clearGrids(){
  let gr=document.querySelectorAll(".grids");
  for(let i=0; i<gr.length;i++){
    gr[i].style.backgroundColor="white";
    gr[i].classList.remove("colored");
}
}

function changeGrids(){
  while(container.firstChild){container.removeChild(container.firstChild);}
  let dimensions=prompt("please enter a number between 1-64");

  if (isNaN(dimensions)){createGrid(16);}

  else if (dimensions<1 || dimensions>64){alert("please enter a number between 1-64"); changeGrids();}

  else {createGrid(dimensions);}
}