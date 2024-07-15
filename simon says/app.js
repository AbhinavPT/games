let gameSeq = [];
let userSeq = [];

let btns =["one","two","three","four"];
h3 = document.querySelector('h3');

let h2 = document.createElement("h2");
let highestScore =0 ;
let body = document.querySelector('body');
body.append(h2);


let started = false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        started = true ;
        levelUp();
    }
    
    
});



function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    }, 100)
}

function levelUp(){
    userSeq = [];
    level++;
    
    h3.innerText = `Level ${level}`;

   
    let rand = Math.floor(Math.random()*4);
    let id = btns[rand];
    let btn = document.querySelector(`.${id}`);
    // console.log(id);
    gameSeq.push(id);
    console.log(btn);
    btnflash(btn);
    // console.log(gameSeq.length);
    // console.log(gameSeq);
    
    
}

let btnsAll = document.querySelectorAll(".btn");

function checkAns(idx){
    if(started==true){
    if(userSeq[idx] == gameSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{

        h3.innerText = `Game Over! Your Score was ${level},  Press any key to restart.`;
        document.querySelector("body").style.backgroundColor = 'red';

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = 'white';
        },1000)

        if(level>highestScore){
            h2.innerText =`Highest Score: ${level}`;
            highestScore = level;
        }
        reset();
    }}
}

function btnPress(){
    let btn = this;
    btnflash(btn);

    let id = btn.getAttribute("id");
    // console.log(id);
    userSeq.push(id);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}


for(btn of btnsAll){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level=0;
}



