let gameSeq=[];
let userSeq=[];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
    btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3 );
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log("randIndx");
    // console.log("randColor");
    // console.log("randbtn");
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnFlash(randbtn);
}

function checkAns(idx) {
    // console.log("curr level : ", level);
    // let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
          setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! Your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }


}

function btnPress() {
    // console.log(this);
    let btn = this;
    btnFlash(btn);

    btnColor = btn.getAttribute("id");
    userSeq.push(btnColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);         //call back

}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}