 let gameSeq = []
 let userSeq = []

 let btns = ["yellow", "red", "purple", "green"];
 let maxi = 0;
 let started = false;
 let level = 0;

 let h2 = document.querySelector("h2");
 let h3 = document.querySelector("h3");

 document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true

        levelUp();
    }
 });

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);

}


function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;


    let randomIdx = Math.floor(Math.random() *4 ) ;  
    let randomColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randomColor}`); 
    
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randbtn);

}

function checkAns(idx){
    //console.log("Current level = ", level);
    
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else {
        h2.innerHTML = `Game over! Your score was <b>${level} </b> </br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        maxi = Math.max( maxi , level);
        h3.innerHTML = `The HighScore is ${maxi}`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
 for (btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

function reset(){
    level = 0;
    userSeq = [];
    gameSeq = [];
    started = false;

}