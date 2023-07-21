const text1 = document.querySelector(".text-1")
const text2 = document.querySelector(".text-2")
const text3 = document.querySelector(".text-3")
const text4 = document.querySelector(".text-4")
const image= document.getElementById("img-change")

const navbar = document.getElementById("navb");
const z = navbar.offsetHeight
  var prevScroll = window.scrollY;

function hideNavbar() {
    navbar.style.top = "-"+190+"px";
    navbar.style.display = "flex"
   
  }
  
  function showNavbar() {
    // const navbar = document.getElementById("navbar");
    navbar.style.top = "0";
    navbar.style.display="flex"
    navbar.style.position = "fixed"
    navbar.style.backgroundColor=" rgba(15, 15, 15, 0.804)"
 
  }



const change = function(){
    const a = text1.offsetTop - 300
    const b = text2.offsetTop - 300
    const c = text3.offsetTop - 300
    const d = text4.offsetTop - 300
    const y= window.scrollY
    
    if(y>a){
        image.style.transform="translateX(200px)";
        image.setAttribute("src","./images/neopop-fold1.webp")
        image.style.transform="translateX(-200px)";

    }
    if(y>b){
      
        image.setAttribute("src","./images/neopop-fold2.webp")
        image.style.transform="translateX(-200px)";

    }

    if(y>c){
   
        image.setAttribute("src","./images/neopop-fold3.webp")
        image.style.transform="translateX(-200px)";

    }
    if(y>d){
      
        image.setAttribute("src","./images/neopop-fold4.webp")
        image.style.transform="translateX(-200px)";

    }

 if(y>400){
    if (y > prevScroll) {
      hideNavbar();
    } else {
      showNavbar();
    }
    prevScroll = y;

}
}

document.addEventListener("scroll",change)




