const imageCon = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x=0;
let timer=0;

prevEl.addEventListener("click",()=>{
    x=x+45;
    clearTimeout(timer);
    updateImage();
});
nextEl.addEventListener("click",()=>{
    x=x-45;
    clearTimeout(timer);
    updateImage();
});

function updateImage(){
    imageCon.style.transform=`perspective(1000px) rotateY(${x}deg)`;
    timer=setTimeout(()=>{
        x=x-45;
        updateImage();
    },3000);
}
updateImage();