/* ==========================================================
   HAPPY BIRTHDAY ARUU ❤️
   SCRIPT.JS
   PART 1
========================================================== */

/* ==========================================================
   ELEMENTS
========================================================== */

const loadingScreen = document.getElementById("loading-screen");

const beginStory = document.getElementById("beginStory");

const story = document.getElementById("story");

const chapters = document.querySelectorAll(".chapter");

const backToTop = document.getElementById("backToTop");

const progressBar = document.getElementById("progressBar");

/* ==========================================================
   LOADING SCREEN
========================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.classList.add("hide");

    }, 2500);

});

/* ==========================================================
   BEGIN STORY BUTTON
========================================================== */

beginStory.addEventListener("click", () => {

    story.scrollIntoView({

        behavior: "smooth"

    });

});

/* ==========================================================
   SCROLL REVEAL
========================================================== */

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:0.18

});

chapters.forEach(chapter=>{

    revealObserver.observe(chapter);

});

/* ==========================================================
   BACK TO TOP BUTTON
========================================================== */

window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        backToTop.classList.add("show");

    }

    else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================================
   PROGRESS BAR
========================================================== */

window.addEventListener("scroll",()=>{

    const scrollTop=

    document.documentElement.scrollTop;

    const scrollHeight=

    document.documentElement.scrollHeight-

    document.documentElement.clientHeight;

    const progress=

    (scrollTop/scrollHeight)*100;

    progressBar.style.width=

    progress+"%";

});

/* ==========================================================
   IMAGE REVEAL
========================================================== */

const images=document.querySelectorAll(

".chapter-image"

);

const imageObserver=

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.2

}

);

images.forEach(image=>{

imageObserver.observe(image);

});

/* ==========================================================
   SIMPLE BUTTON RIPPLE
========================================================== */

const buttons=

document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const ripple=

document.createElement("span");

ripple.classList.add("ripple");

const rect=

this.getBoundingClientRect();

ripple.style.left=

e.clientX-rect.left+"px";

ripple.style.top=

e.clientY-rect.top+"px";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/* ==========================================================
   MUSIC PLAYER
========================================================== */

const music=document.getElementById("backgroundMusic");

const musicToggle=document.getElementById("musicToggle");

let musicPlaying=false;

if(musicToggle && music){

musicToggle.addEventListener("click",()=>{

if(!musicPlaying){

music.play();

musicToggle.innerHTML="🔊";

musicPlaying=true;

}

else{

music.pause();

musicToggle.innerHTML="🎵";

musicPlaying=false;

}

});

}

/* ==========================================================
   PARALLAX HERO
========================================================== */

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset=window.scrollY;

if(hero){

hero.style.backgroundPositionY=

offset*0.4+"px";

}

});

/* ==========================================================
   SMOOTH IMAGE FLOAT
========================================================== */

const floatingImages=

document.querySelectorAll(

".chapter-image img"

);

window.addEventListener("scroll",()=>{

const scroll=

window.pageYOffset;

floatingImages.forEach((img,index)=>{

const speed=(index+1)*0.03;

img.style.transform=

`translateY(${scroll*speed}px)`;

});

});

/* ==========================================================
   HERO TITLE GLOW
========================================================== */

const heroTitle=document.querySelector(".hero h1");

if(heroTitle){

setInterval(()=>{

heroTitle.classList.toggle("glow");

},2500);

}

/* ==========================================================
   AUTO HIGHLIGHT ACTIVE CHAPTER
========================================================== */

const sections=document.querySelectorAll("section");

const activeObserver=

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active-section");

}

else{

entry.target.classList.remove("active-section");

}

});

},

{

threshold:.35

}

);

sections.forEach(section=>{

activeObserver.observe(section);

});

/* ==========================================================
   LITTLE SCROLL MAGIC
========================================================== */

window.addEventListener("scroll",()=>{

document.body.style.setProperty(

"--scroll",

window.scrollY

);

});

/* ==========================================================
   RANDOM GOLDEN GLOW
========================================================== */

setInterval(()=>{

const cards=

document.querySelectorAll(".love-card");

if(cards.length===0) return;

const random=

Math.floor(Math.random()*cards.length);

cards.forEach(card=>{

card.classList.remove("golden");

});

cards[random].classList.add("golden");

},3000);

/* ==========================================================
   PRELOAD IMAGES
========================================================== */

const imageList=[

"Cover.jpeg",

"Firstsaw.jpeg",

"Zerodegree.jpeg",

"Freshers.jpeg",

"Concert.jpeg",

"Garba.jpeg",

"Firstbdy.jpeg",

"Diwali.png",

"Ending.png"

];

imageList.forEach(src=>{

const img=new Image();

img.src=src;

});

/* ==========================================================
   LOVE LETTER
========================================================== */

const envelope=document.getElementById("envelope");

const letter=document.querySelector(".letter");

let opened=false;

if(envelope && letter){

envelope.addEventListener("click",()=>{

if(opened) return;

opened=true;

envelope.classList.add("opened");

setTimeout(()=>{

letter.classList.add("open");

},500);

});

}

/* ==========================================================
   LETTER TYPEWRITER EFFECT
========================================================== */

const letterContent=document.querySelector(".letter-content");

if(letterContent){

const originalText=letterContent.innerHTML;

letterContent.innerHTML="";

let index=0;

const typingObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const timer=setInterval(()=>{

letterContent.innerHTML=

originalText.substring(0,index);

index++;

if(index>originalText.length){

clearInterval(timer);

}

},18);

typingObserver.disconnect();

}

});

},{threshold:0.5});

typingObserver.observe(letterContent);

}

/* ==========================================================
   LOVE CARDS HOVER EFFECT
========================================================== */

const loveCards=document.querySelectorAll(".love-card");

loveCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x-rect.width/2)/18);

const rotateX=((rect.height/2-y)/18);

card.style.transform=

`perspective(900px)
 rotateX(${rotateX}deg)
 rotateY(${rotateY}deg)
 scale(1.05)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=

"perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";

});

});

/* ==========================================================
   HEART BURST ON CARD CLICK
========================================================== */

loveCards.forEach(card=>{

card.addEventListener("click",()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left="50%";

heart.style.top="50%";

heart.style.fontSize="2rem";

heart.style.transform="translate(-50%,-50%)";

heart.style.pointerEvents="none";

heart.style.animation="heartPop 1s forwards";

card.appendChild(heart);

setTimeout(()=>{

heart.remove();

},1000);

});

});

/* ==========================================================
   AUTO SCROLL GLOW
========================================================== */

window.addEventListener("scroll",()=>{

document.querySelectorAll(".chapter").forEach(chapter=>{

const rect=chapter.getBoundingClientRect();

if(rect.top<window.innerHeight*0.7 &&

rect.bottom>window.innerHeight*0.3){

chapter.classList.add("focus");

}else{

chapter.classList.remove("focus");

}

});

});

/* ==========================================================
   BIRTHDAY CELEBRATION
========================================================== */

const celebrateButton=document.getElementById("celebrateButton");

const candles=document.querySelectorAll(".candle");

const confettiContainer=document.getElementById("confetti-container");

const fireworksContainer=document.getElementById("fireworks-container");

let celebrationPlayed=false;

if(celebrateButton){

celebrateButton.addEventListener("click",()=>{

if(celebrationPlayed) return;

celebrationPlayed=true;

/* Blow Out Candles */

candles.forEach(candle=>{

candle.classList.add("blown");

});

/* Launch Celebration */

createConfetti();

createFireworks();

releaseHearts();

releaseBalloons();

celebrateButton.innerHTML="🎉 Happy Birthday Aruu ❤️";

});

}

/* ==========================================================
   CONFETTI
========================================================== */

function createConfetti(){

if(!confettiContainer) return;

for(let i=0;i<180;i++){

const piece=document.createElement("div");

piece.className="confetti";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-20px";

piece.style.animationDuration=

(3+Math.random()*3)+"s";

piece.style.transform=

`rotate(${Math.random()*360}deg)`;

piece.style.background=

`hsl(${Math.random()*360},90%,60%)`;

confettiContainer.appendChild(piece);

setTimeout(()=>{

piece.remove();

},6000);

}

}

/* ==========================================================
   FIREWORKS
========================================================== */

function createFireworks(){

if(!fireworksContainer) return;

for(let i=0;i<12;i++){

setTimeout(()=>{

const fire=document.createElement("div");

fire.className="firework";

fire.style.left=Math.random()*90+"vw";

fire.style.top=Math.random()*45+"vh";

fireworksContainer.appendChild(fire);

setTimeout(()=>{

fire.remove();

},1800);

},i*300);

}

}

/* ==========================================================
   FLOATING HEARTS
========================================================== */

function releaseHearts(){

for(let i=0;i<40;i++){

setTimeout(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="9999";

heart.style.transition="6s linear";

document.body.appendChild(heart);

requestAnimationFrame(()=>{

heart.style.transform=

`translateY(-120vh)
rotate(${Math.random()*360}deg)`;

heart.style.opacity="0";

});

setTimeout(()=>{

heart.remove();

},6000);

},i*120);

}

}

/* ==========================================================
   BALLOONS
========================================================== */

function releaseBalloons(){

const emojis=["🎈","🎈","🎈","🎉"];

for(let i=0;i<15;i++){

setTimeout(()=>{

const balloon=document.createElement("div");

balloon.innerHTML=

emojis[Math.floor(Math.random()*emojis.length)];

balloon.style.position="fixed";

balloon.style.bottom="-60px";

balloon.style.left=Math.random()*100+"vw";

balloon.style.fontSize="2.2rem";

balloon.style.pointerEvents="none";

balloon.style.transition="8s linear";

balloon.style.zIndex="9999";

document.body.appendChild(balloon);

requestAnimationFrame(()=>{

balloon.style.transform=

"translateY(-130vh)";

});

setTimeout(()=>{

balloon.remove();

},8000);

},i*250);

}

}

/* ==========================================================
   PREMIUM FINAL POLISH
========================================================== */

/* Mouse / Touch Hearts */

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.className="cursor-heart";

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

heart.style.fontSize="22px";

heart.style.transition="all 1.5s ease";

document.body.appendChild(heart);

requestAnimationFrame(()=>{

heart.style.transform="translate(-50%,-120px) scale(1.8)";

heart.style.opacity="0";

});

setTimeout(()=>{

heart.remove();

},1500);

});

/* Floating Page Title */

const title=document.querySelector(".hero h1");

if(title){

window.addEventListener("mousemove",(e)=>{

const x=(e.clientX/window.innerWidth-.5)*12;

const y=(e.clientY/window.innerHeight-.5)*12;

title.style.transform=

`translate(${x}px,${y}px)`;

});

}

/* Random Sparkle */

setInterval(()=>{

const sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=Math.random()*100+"vw";

sparkle.style.top=Math.random()*100+"vh";

sparkle.style.fontSize=(12+Math.random()*18)+"px";

sparkle.style.pointerEvents="none";

sparkle.style.opacity="1";

sparkle.style.transition="2s linear";

sparkle.style.zIndex="9998";

document.body.appendChild(sparkle);

requestAnimationFrame(()=>{

sparkle.style.transform="translateY(-60px)";

sparkle.style.opacity="0";

});

setTimeout(()=>{

sparkle.remove();

},2000);

},700);

/* Keyboard Shortcut */

document.addEventListener("keydown",(e)=>{

if(e.key==="h"||e.key==="H"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/* Console Message */

console.log(

"%cHappy Birthday Aruu ❤️",

"color:#D4AF37;font-size:24px;font-weight:bold;"

);

console.log(

"%cMade with love by Karan",

"color:pink;font-size:16px;"

);

/* Disable Image Drag */

document.querySelectorAll("img").forEach(img=>{

img.setAttribute("draggable","false");

});

/* Finished */

console.log("Website Loaded Successfully ❤️");

