let burger=document.querySelector(".burger");
let menu=document.querySelector(".bebrik");
burger.addEventListener("click",start);

function start(){
burger.classList.toggle("active");
menu.classList.toggle("show");
}


let logo=document.querySelector(".button");
logo.addEventListener("click",run);

let condition=false;

function run(){
    if(condition==true)
        {let header=document.querySelector("header");
         let body=document.querySelector("body");
         let main=document.querySelector("main");
         let ssilka=document.querySelectorAll("a").forEach(el => {
  el.style.color = "white";});
    header.style.backgroundColor=" rgb(52, 52, 52)";
    body.style.color="white";
    main.style.backgroundColor="gray";
    logo.className="button";
    logo.classList.remove("new-style");
    condition=false}
    
     else{
        let header=document.querySelector("header");
        let body=document.querySelector("body");
        let main=document.querySelector("main");
        let ssilka=document.querySelectorAll("a").forEach(el => {
  el.style.color = "black"; });
    header.style.backgroundColor="lightgray";
    body.style.color="black";
    main.style.backgroundColor="white";
    logo.className="new-style";
    logo.classList.remove("button");
    condition=true
     }
}
window.onscroll = function () {
  const btn = document.getElementById("toTopBtn");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Прокрутка наверх при клике
document.getElementById("toTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});