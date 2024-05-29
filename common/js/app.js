window.addEventListener('scroll',reveal);

function reveal(){
    const reveals = document.querySelectorAll('.reveal');
    const windowheigth = window.innerHeight;
    
    for(let i = 0; i < reveals.length; i++){
        const revealTop = reveals[i].getBoundingClientRect().top;
        if(revealTop < windowheigth - 92){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
/*-------------------------------------------------------------- */

window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll');
    if (window.scrollY > 300) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});
document.querySelector('.top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
/*-------------------------------------------------------------- */
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('#menu');
const close = document.querySelector('.close')
menuIcon.addEventListener('click',()=>{
    menu.style.right="0"
})
close.addEventListener('click',()=>{
    menu.style.right="-70%"
})

/*-------------------------------------------------------------- */
let slides = document.querySelectorAll('.slide');
let desSlides = document.querySelectorAll('.des-slide');
let currentSlide = 0;

function showSlide() {

    slides[currentSlide].classList.remove('show')
    if (desSlides.length>0) {
    
        desSlides[currentSlide].classList.remove('show');
    }
 

  currentSlide++
  if(currentSlide >= slides.length){currentSlide=0;}
  slides[currentSlide].classList.add('show')
  if (desSlides.length>0) {
    
      desSlides[currentSlide].classList.add('show');
  }
}
if(slides.length>0){
setInterval(showSlide,6000);}
/*-------------------------------------------------------------- */
const navbar = document.querySelector('.NAVBAR');
window.addEventListener('scroll', ()=> {
    if (window.scrollY > 300) {
        navbar.style.backgroundColor = '#0f0e0d';
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
    
});
let prevScrollpos = window.scrollY;
window.addEventListener("scroll",() =>{
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.NAVBAR').style.top = "0";
  } else {
    document.querySelector('.NAVBAR').style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}) 
/*-------------------------------------------------------------- */
document.getElementById('year').innerText=new Date().getFullYear();
/*--------------------------------------------------------------*/
cookies=document.querySelector('.cookies-accept');
cookies2=document.querySelector('.cookies2-accept');
if(cookies){
    cookies.addEventListener("click",()=>{
        document.getElementById("cookies").style.display="none"
        setCookie("nowotch", "nowotch", 356); 
    })
    document.querySelector('.cookies-reject').addEventListener("click",()=>{
        window.close();
    })
    
    
    if (checkCookie("nowotch")) {
        document.getElementById("cookies").style.display="none"
    } 
    }
    
    if(cookies2){
        cookies2.addEventListener("click",()=>{
            document.getElementById("cookies2").style.display="none"
            setCookie("nowotch2", "nowotch2", 356); 
        })
        document.querySelector('.cookies2-reject').addEventListener("click",()=>{
            window.close();
        })
        
        
        if (!checkCookie("nowotch2")) {
            document.getElementById("cookies2").style.display="flex"
        } 
        }

        
// Function to set a cookie
function setCookie(name, value, daysToExpire) {
    var expires = "";
    if (daysToExpire) {
        var date = new Date();
        date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to check if a cookie exists
function checkCookie(cookieName) {
    var cookies = document.cookie.split(';');
    
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName + '=') === 0) {
            return true;
        }
    }
    return false;
}

/*--------------------------------------------------------------*/
const packages = document.querySelectorAll(".package");
const packagesDetails = document.querySelectorAll(".Packages-details");

for (const pack of packages) {
    pack.addEventListener("click", (event) => {
        const clickedPackage = event.currentTarget;
        const index = Array.from(packages).indexOf(clickedPackage);

        for (const package of packages) {
            package.classList.remove("select");
        }

        clickedPackage.classList.add("select");
        details(index);
    });
}

function details(index) {
    for (const detail of packagesDetails) {
        detail.classList.remove("p-show");
    }

    packagesDetails[index].classList.add("p-show");
}
/*--------------------------------------------------------------*/
//after fexing the bug
let nums = document.querySelectorAll(".page1-section2-holder .nb-cercle2");
let section = document.querySelector(".page1-section2-holder");
let started = false;
let countIntervals = []; 

function startCount(el, goal) {
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
  countIntervals.push(count); 
}

if (section && nums.length > 0) {
  let sectionOffset = section.offsetTop;
  let goals = Array.from(nums).map(num => parseInt(num.dataset.goal));

  window.onscroll = function () {
    if (window.scrollY >= sectionOffset-100) {
      if (!started) {
        nums.forEach((num, index) => startCount(num, goals[index]));
      }
      started = true;
    } else {
      nums.forEach((num) => { num.textContent = 0; });
      countIntervals.forEach(clearInterval); 
      countIntervals = []; 
      started = false;
    }
  };
}

//old code

/*
let nums = document.querySelectorAll(".page1-section2-holder .nb-cercle2");
let section = document.querySelector(".page1-section2-holder");
let started = false;

if(section){
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }else{
    
    nums.forEach((num) => {num.textContent=0;});
    started = false;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}}*/


