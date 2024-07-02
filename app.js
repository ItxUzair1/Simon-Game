let gseq=[];
let useq=[];
let started=false;
let level=0;
let array =["green","yellow","red","purple"];
let body=document.querySelector("body");
let score=0;

document.addEventListener("touchstart",function(){
    if(started==false){
        started=true;
        console.log("game started");
        levelup();
    }
})
document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
        console.log("game started");
        levelup();
    }
});
let h2=document.querySelector("h2");
function levelup(){
    useq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomIndex= Math.floor(Math.random()*3);
    let color=array[randomIndex];
    let btn = document.querySelector(`.${color}`);
    gseq.push(`.${color}`);
    ButtonFlash(btn);
}

function ButtonFlash(btn){
  btn.classList.add("Flash");
  setTimeout(function(){
    btn.classList.remove("Flash");
  },250);
}


let buttons = document.querySelectorAll(".button");
for(btn of buttons){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
    ButtonFlash(this);
    let item=`.${this.getAttribute("id")}`;
    useq.push(item);
    let index= useq.indexOf(item);
    check(index);
}

function check(index){
    if(gseq[index] === useq[index]){
        if(gseq.length==useq.length){
            score++;
            levelup();
        }
    }else{
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white"
        },300);
        reset();
    }
}


function reset(){
  gseq=[];
  useq=[];
  started=false;
  level=0;
  h2.innerHTML=`<h2>Game Over! Your Score is ${score} <br/> Touch or Press any key to start </h2>`;
  score=0;
}