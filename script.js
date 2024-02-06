let block = document.getElementById("block");
let display = document.querySelectorAll(".display");
let font = document.querySelectorAll(".icon");
let o = document.getElementById("o");
let x = document.getElementById("x");
let audio = document.getElementById("audio");
let gameoveraudio = document.getElementById("audiotwo");
let wonaudio = document.getElementById("audiothree");
let rone = block.getElementsByClassName("rone");
let rtwo = block.getElementsByClassName("rtwo");
let rthree = block.getElementsByClassName("rthree");
let colone = block.getElementsByClassName("colone");
let coltwo = block.getElementsByClassName("coltwo");
let colthree = block.getElementsByClassName("colthree");
let crossone = block.getElementsByClassName("crossone");
let crosstwo = block.getElementsByClassName("crosstwo");
let gameover = block.getElementsByClassName("gameover");
let winOne =document.getElementById("pl-1-win");
let winTwo =document.getElementById("pl-2-win");
let overlay =document.getElementById("overlay");
let turnAlert =document.querySelectorAll(".alert");
display.forEach(icon => {
    icon.onclick = () => {
        o.classList.toggle("active");
        x.classList.toggle("active");
        icon.classList.add("gameover");
        for(i=0;i<turnAlert.length;i++){
            turnAlert[i].classList.toggle("turn")
        }
        audio.play();
        
        if (o.classList.contains("active")) {
            icon.children[0].classList.remove("fa-x");
            icon.children[0].classList.toggle("fa-o");
        } else if (x.classList.contains("active")) {

            icon.children[0].classList.toggle("fa-x");
            icon.children[0].classList.remove("fa-o");

        };
        for (i = 0; i < rone.length; i++) {
            if ((rone[0].children[0].classList.contains("fa-o") & rone[1].children[0].classList.contains("fa-o") & rone[2].children[0].classList.contains("fa-o")) | (rone[0].children[0].classList.contains("fa-x") & rone[1].children[0].classList.contains("fa-x") & rone[2].children[0].classList.contains("fa-x"))) {
                rone[i].style.backgroundColor = "rgba(0,255,0,0.2)";
                wonaudio.play();
                gameoveraudio.pause();
            }
        };
        for (i = 0; i < rtwo.length; i++) {
            if ((rtwo[0].children[0].classList.contains("fa-o") & rtwo[1].children[0].classList.contains("fa-o") & rtwo[2].children[0].classList.contains("fa-o")) | (rtwo[0].children[0].classList.contains("fa-x") & rtwo[1].children[0].classList.contains("fa-x") & rtwo[2].children[0].classList.contains("fa-x"))) {
                rtwo[i].style.backgroundColor = "rgba(0,255,0,0.2)";
                wonaudio.play();
                gameoveraudio.pause();
            }
        };
        for (i = 0; i < rthree.length; i++) {
            if ((rthree[0].children[0].classList.contains("fa-o") & rthree[1].children[0].classList.contains("fa-o") & rthree[2].children[0].classList.contains("fa-o")) | (rthree[0].children[0].classList.contains("fa-x") & rthree[1].children[0].classList.contains("fa-x") & rthree[2].children[0].classList.contains("fa-x"))) {
                rthree[i].style.backgroundColor = "rgba(0,255,0,0.2)";
                wonaudio.play();
                gameoveraudio.pause();
            }
        };
        // col
        for (i = 0; i < colone.length; i++) {
            if ((colone[0].children[0].classList.contains("fa-o") & colone[1].children[0].classList.contains("fa-o") & colone[2].children[0].classList.contains("fa-o")) | (colone[0].children[0].classList.contains("fa-x") & colone[1].children[0].classList.contains("fa-x") & colone[2].children[0].classList.contains("fa-x"))) {
                colone[i].style.backgroundColor = "rgba(0,255,0,0.2)";
                wonaudio.play();
                gameoveraudio.pause();
            }
        };
        for (i = 0; i < coltwo.length; i++) {
            if ((coltwo[0].children[0].classList.contains("fa-o") & coltwo[1].children[0].classList.contains("fa-o") & coltwo[2].children[0].classList.contains("fa-o")) | (coltwo[0].children[0].classList.contains("fa-x") & coltwo[1].children[0].classList.contains("fa-x") & coltwo[2].children[0].classList.contains("fa-x"))) {
                coltwo[i].style.backgroundColor = "rgba(0,255,0,0.2)";
                wonaudio.play();
                gameoveraudio.pause();
            }
        };
        for (i = 0; i < colthree.length; i++) {
            if ((colthree[0].children[0].classList.contains("fa-o") & colthree[1].children[0].classList.contains("fa-o") & colthree[2].children[0].classList.contains("fa-o")) | (colthree[0].children[0].classList.contains("fa-x") & colthree[1].children[0].classList.contains("fa-x") & colthree[2].children[0].classList.contains("fa-x"))) {
                colthree[i].style.backgroundColor = "rgba(0,255,0,0.2)";
                wonaudio.play();
                gameoveraudio.pause();
            }
        };
        // cross
        for (i = 0; i < crossone.length; i++) {
            if ((crossone[0].children[0].classList.contains("fa-o") & crossone[1].children[0].classList.contains("fa-o") & crossone[2].children[0].classList.contains("fa-o")) | (crossone[0].children[0].classList.contains("fa-x") & crossone[1].children[0].classList.contains("fa-x") & crossone[2].children[0].classList.contains("fa-x"))) {
                crossone[i].style.backgroundColor = "rgba(0,255,0,0.2)";
                wonaudio.play();
                gameoveraudio.pause();
            }
        };
        for (i = 0; i < crosstwo.length; i++) {
            if ((crosstwo[0].children[0].classList.contains("fa-o") & crosstwo[1].children[0].classList.contains("fa-o") & crosstwo[2].children[0].classList.contains("fa-o")) | (crosstwo[0].children[0].classList.contains("fa-x") & crosstwo[1].children[0].classList.contains("fa-x") & crosstwo[2].children[0].classList.contains("fa-x"))) {
                crosstwo[i].style.backgroundColor = "rgba(0,255,0,0.2)";
                wonaudio.play();
                gameoveraudio.pause();
            }
        };
        

            if ((crosstwo[0].children[0].classList.contains("fa-o") & crosstwo[1].children[0].classList.contains("fa-o") & crosstwo[2].children[0].classList.contains("fa-o")) | (crossone[0].children[0].classList.contains("fa-o") & crossone[1].children[0].classList.contains("fa-o") & crossone[2].children[0].classList.contains("fa-o")) | (colthree[0].children[0].classList.contains("fa-o") & colthree[1].children[0].classList.contains("fa-o") & colthree[2].children[0].classList.contains("fa-o")) | (coltwo[0].children[0].classList.contains("fa-o") & coltwo[1].children[0].classList.contains("fa-o") & coltwo[2].children[0].classList.contains("fa-o")) | (colone[0].children[0].classList.contains("fa-o") & colone[1].children[0].classList.contains("fa-o") & colone[2].children[0].classList.contains("fa-o")) | (rthree[0].children[0].classList.contains("fa-o") & rthree[1].children[0].classList.contains("fa-o") & rthree[2].children[0].classList.contains("fa-o")) | (rtwo[0].children[0].classList.contains("fa-o") & rtwo[1].children[0].classList.contains("fa-o") & rtwo[2].children[0].classList.contains("fa-o")) | (rone[0].children[0].classList.contains("fa-o") & rone[1].children[0].classList.contains("fa-o") & rone[2].children[0].classList.contains("fa-o"))) {
                winOne.innerText++;
                overlay.innerText="player 1 win";
                counterBox.classList.toggle("counter-box-active");
                overlay.classList.toggle("overlayactive");
                setTimeout(function (){
                    overlay.classList.toggle("overlayactive");
                    counterBox.classList.toggle("counter-box-active");
                    for(i=0;i<font.length;i++){
                        if(font[i].classList.contains("fa-x")|font[i].classList.contains("fa-o")){
                            font[i].classList.remove("fa-x");
                            font[i].classList.remove("fa-o");
                            display[i].classList.remove("gameover");
                            display[i].style.backgroundColor="";
                        }
                    }
                },5000)
                var s = setInterval(
                    function(){
                        
                        if(counter.innerText==0){
                            clearInterval(s);
                            counter.innerText=5
                        }else{
                            counter.innerText--;
                        }
                    },1000
                    
                )
                
            }else if((crosstwo[0].children[0].classList.contains("fa-x") & crosstwo[1].children[0].classList.contains("fa-x") & crosstwo[2].children[0].classList.contains("fa-x")) | (crossone[0].children[0].classList.contains("fa-x") & crossone[1].children[0].classList.contains("fa-x") & crossone[2].children[0].classList.contains("fa-x")) | (colthree[0].children[0].classList.contains("fa-x") & colthree[1].children[0].classList.contains("fa-x") & colthree[2].children[0].classList.contains("fa-x")) | (coltwo[0].children[0].classList.contains("fa-x") & coltwo[1].children[0].classList.contains("fa-x") & coltwo[2].children[0].classList.contains("fa-x")) | (colone[0].children[0].classList.contains("fa-x") & colone[1].children[0].classList.contains("fa-x") & colone[2].children[0].classList.contains("fa-x")) | (rthree[0].children[0].classList.contains("fa-x") & rthree[1].children[0].classList.contains("fa-x") & rthree[2].children[0].classList.contains("fa-x")) | (rtwo[0].children[0].classList.contains("fa-x") & rtwo[1].children[0].classList.contains("fa-x") & rtwo[2].children[0].classList.contains("fa-x")) | (rone[0].children[0].classList.contains("fa-x") & rone[1].children[0].classList.contains("fa-x") & rone[2].children[0].classList.contains("fa-x"))){
                winTwo.innerText++;
                overlay.innerText="player 2 win";
                overlay.classList.toggle("overlayactive");
                counterBox.classList.toggle("counter-box-active");
                setTimeout(function (){
                    overlay.classList.toggle("overlayactive");
                    counterBox.classList.toggle("counter-box-active");
                    for(i=0;i<font.length;i++){
                        if(font[i].classList.contains("fa-x")|font[i].classList.contains("fa-o")){
                            font[i].classList.remove("fa-x");
                            font[i].classList.remove("fa-o");
                            display[i].classList.remove("gameover");
                            display[i].style.backgroundColor="";
                        }
                    }
                },5000)
                var s = setInterval(
                    function(){
                        
                        if(counter.innerText==0){
                            clearInterval(s);
                            counter.innerText=5
                        }else{
                            counter.innerText--;
                        }
                    },1000
                    
                )
            }else if (gameover.length == 9) {
                gameoveraudio.play();
                wonaudio.pause();
                audio.pause();
                overlay.innerText="DRAW";
                overlay.classList.toggle("overlayactive");
                counter.innerText=3
                counterBox.classList.toggle("counter-box-active");
                setTimeout(function (){
                    overlay.classList.toggle("overlayactive");
                    counterBox.classList.toggle("counter-box-active");
                    for(i=0;i<font.length;i++){
                        if(font[i].classList.contains("fa-x")|font[i].classList.contains("fa-o")){
                            font[i].classList.remove("fa-x");
                            font[i].classList.remove("fa-o");
                            display[i].classList.remove("gameover");
                            display[i].style.backgroundColor="";
                        }
                    }
                },3000);
                var s = setInterval(
                    function(){
                        
                        if(counter.innerText==0){
                            clearInterval(s);
                            counter.innerText=5
                        }else{
                            counter.innerText--;
                        }
                    },1000
                    
                )
            }
            else{
                
            };
        
    }

});
let counter=document.getElementById("counter");
let counterBox=document.querySelector(".counter-box");
const mode = document.querySelector("#mode");
mode.onclick=()=>{
    let root = document.documentElement;
    root.classList.toggle("root")
}
