var carouselimage = document.querySelectorAll(".carouselimage");
var carousno=0;var moveCarousVar;var interval=10000;
function carobtnleft(){
  if(carousno >= 1 && carousno <= 3){carousno--;}
  else{carousno = 3;}
  DestroyCarous(carousno);
  clearInterval(moveCarousVar);
  mvCarousBody();
}
function carobtnright(){
  if(carousno >= 0 && carousno <= 2){carousno++;}
  else{carousno = 0;}
  DestroyCarous(carousno);
  clearInterval(moveCarousVar);
  mvCarousBody();
}
mvCarousBody();
function mvCarousBody(){moveCarousVar = setInterval(moveCarousFuns, interval);}
function moveCarousFuns(){carobtnright();}
function DestroyCarous(no){
  for(var a=0;a<4;a++){if(a != no){$(carouselimage[a]).fadeOut(800);}}
  $(carouselimage[no]).fadeIn(1000);
}
var navbar = document.querySelector(".navbar");
window.onscroll = function(e) {
  let scroll = this.scrollY;
  console.log(scroll);
  if(this.oldScroll > this.scrollY){$(navbar).fadeIn(300);}
  else{if(scroll > 600){$(navbar).fadeOut(300);}}
  this.oldScroll = this.scrollY;
}
var ahhlink = document.querySelectorAll(".ahhlink");
var spndecor = document.querySelectorAll(".spndecor");
var resahhlink = document.querySelectorAll(".resahhlink");
var respndecor = document.querySelectorAll(".respndecor");
ahhlink[0].addEventListener('mouseover',() => {navmouseover(0)});
ahhlink[0].addEventListener('mouseout',() => {navmouseout(0)});
ahhlink[1].addEventListener('mouseover',() => {navmouseover(1)});
ahhlink[1].addEventListener('mouseout',() => {navmouseout(1)});
ahhlink[2].addEventListener('mouseover',() => {navmouseover(2)});
ahhlink[2].addEventListener('mouseout',() => {navmouseout(2)});
ahhlink[3].addEventListener('mouseover',() => {navmouseover(3)});
ahhlink[3].addEventListener('mouseout',() => {navmouseout(3)});
ahhlink[4].addEventListener('mouseover',() => {navmouseover(4)});
ahhlink[4].addEventListener('mouseout',() => {navmouseout(4)});
ahhlink[5].addEventListener('mouseover',() => {navmouseover(5)});
ahhlink[5].addEventListener('mouseout',() => {navmouseout(5)});
resahhlink[0].addEventListener('mouseover',() => {navmouseover(0)});
resahhlink[0].addEventListener('mouseout',() => {navmouseout(0)});
resahhlink[1].addEventListener('mouseover',() => {navmouseover(1)});
resahhlink[1].addEventListener('mouseout',() => {navmouseout(1)});
resahhlink[2].addEventListener('mouseover',() => {navmouseover(2)});
resahhlink[2].addEventListener('mouseout',() => {navmouseout(2)});
resahhlink[3].addEventListener('mouseover',() => {navmouseover(3)});
resahhlink[3].addEventListener('mouseout',() => {navmouseout(3)});
resahhlink[4].addEventListener('mouseover',() => {navmouseover(4)});
resahhlink[4].addEventListener('mouseout',() => {navmouseout(4)});
resahhlink[5].addEventListener('mouseover',() => {navmouseover(5)});
resahhlink[5].addEventListener('mouseout',() => {navmouseout(5)});
function navmouseover(no){
  spndecor[no].style.left = "0px";
  spndecor[no].style.right = "";
  respndecor[no].style.left = "0px";
  respndecor[no].style.right = "";
}
function navmouseout(no){
  spndecor[no].style.right = "0px";
  spndecor[no].style.left = "";
  respndecor[no].style.right = "0px";
  respndecor[no].style.left = "";
}
function clickbars(){$(".respnavbar").toggle("fade",400);$(".mainbody").toggle("fade",400);}
function clicktimes(){$(".respnavbar").toggle("fade",400);$(".mainbody").toggle("fade",400);}
var listlink = document.querySelectorAll(".listlink");
var abtspan = document.querySelectorAll(".abtspan");
var aboutuscont = document.querySelectorAll(".aboutuscont");
clickabtusbtn(0);
function clickabtusbtn(no){
  listlink[no].style.color = "#cd9b33";
  abtspan[no].style.width = 100 + "%";
  aboutuscont[no].style.display = "inline-block";
  for(var a=0;a<3;a++){
    if(a != no){
      listlink[a].style.color = "#000";
      abtspan[a].style.width = 0 + "%";
      aboutuscont[a].style.display = "none";
    }
  }
} 
var setlunchbtn = document.querySelectorAll(".setlunchbtn");
var p1r3contentright = document.querySelectorAll(".p1r3contentright");
var fasetlunchicon = document.querySelectorAll(".fasetlunchicon");
setlunchbtn[0].addEventListener('click',()=>{clikcSetLunch(0)});
setlunchbtn[1].addEventListener('click',()=>{clikcSetLunch(1)});
setlunchbtn[2].addEventListener('click',()=>{clikcSetLunch(2)});
setlunchbtn[3].addEventListener('click',()=>{clikcSetLunch(3)});
setlunchbtn[4].addEventListener('click',()=>{clikcSetLunch(4)});
clikcSetLunch(0);
function clikcSetLunch(no){
  for(var a=0;a<5;a++){
    p1r3contentright[a].style.display = "none";
    setlunchbtn[a].style.color = "#979797";
    fasetlunchicon[a].style.color = "#979797";
  }
  p1r3contentright[no].style.display = "inline-block";
  setlunchbtn[no].style.color = "#cd9b33";
  fasetlunchicon[no].style.color = "#cd9b33";
}    
var ratingpersonbtn = document.querySelectorAll(".ratingpersonbtn");
var fastaricon = document.querySelectorAll(".fastaricon");
var ratingpersoninfo = document.querySelector(".ratingpersoninfo");
var stariconarr = [4,3,5];
var ratingownername = [];
ratingownername[0] = "<span>Rouben Zabel</span>- CEO & Founder Invision";
ratingownername[1] = "<span>Sargis Rouben</span>- CEO & Founder Invision";
ratingownername[2] = "<span>Keghart Harutyun</span>- CEO & Founder Invision";
var ratingimage = document.querySelector(".ratingimage");
var inrp1room4 = document.querySelector(".inrp1room4");
clickratingbtn(0);
function clickratingbtn(no){
  for(var a=0;a<3;a++){ratingpersonbtn[a].style.width = "16px";ratingpersonbtn[a].style.backgroundColor = "#bfbab3";}
  ratingpersonbtn[no].style.width = "70px";
  ratingpersonbtn[no].style.backgroundColor = "#cd9b33";
  if(no == 0){ratingimage.src = "image/girl1.jpg";}
  else if(no == 1){ratingimage.src = "image/girl2.jpg";}
  else if(no == 2){ratingimage.src = "image/girl3.jpg";}
  ratingpersoninfo.innerHTML = ratingownername[no];
  for(var b=0;b<5;b++){fastaricon[b].style.color = "#d2d2d2";}
  for(var c=0;c<stariconarr[no];c++){fastaricon[c].style.color = "#cd9b33";}
}

    