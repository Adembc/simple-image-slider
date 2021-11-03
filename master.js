// prepare all variables 

let allImages = Array.from(document.querySelectorAll(".slider-container img")) ; 
let currentImage =0 ; 
let prevBtn = document.querySelector(".slider-controller .prev");
let nextBtn = document.querySelector(".slider-controller .next");
let imgDesc = document.querySelector(".image-des"); 
let bullets = document.querySelectorAll(".numbers li") ; 
// Function Factory 
// add class active to the current image and bullet
function setImage(){

    // remove active class from all images 
    for(let  i = 0 ; i <allImages.length ; i++){
        allImages[i].classList.remove("active") ; 
    } 
    // add active class to the current element
    allImages[currentImage].className = "active"; 
    let bullets = document.querySelectorAll(".numbers li") ; 
    bullets.forEach((bullet)=>{
        bullet.classList.remove("active")
    })
    let bulletActive = document.querySelector(`.numbers li[data-index = "${currentImage+1}"]`);
    bulletActive.className = "active" ; 
    
    // change image desc
    imgDesc.innerHTML = `Image#${currentImage+1}`
    check()
    }

    function check(){
        if(currentImage==0){
            prevBtn.classList.add("stop")
        }else{
            prevBtn.classList.remove("stop")
        }
        if(currentImage==allImages.length-1){
            nextBtn.classList.add("stop")
        }else{
            nextBtn.classList.remove("stop")
        }

    }
    
// Create bullet elements 

let bulletHolder = document.querySelector("ul.numbers") ; 

for(let i= 1 ; i <= allImages.length ; i++){
    let li = document.createElement("li") ; 
    li.setAttribute("data-index",i) ; 
    li.appendChild(document.createTextNode(i)) ; 
    bulletHolder.appendChild(li) ; 
}

//  change image onclick 
setImage()
prevBtn.onclick = ()=>{
    if(currentImage != 0){
        currentImage -= 1 ; 
        setImage()
       
    }
}

nextBtn.onclick = ()=>{
    if(currentImage==allImages.length-1){
        nextBtn.classList.add("stop") ; 
    }else{
        currentImage++ ; 
        setImage()
        
    }
}
window.onload = ()=>{
    let bullets = document.querySelectorAll(".numbers li");
    bullets.forEach((bullet)=>{ 
        bullet.onclick = ()=>{
          currentImage = bullet.getAttribute("data-index")-1 ; 
          setImage()  
        } ; 
    })
}