var slideIndex = 0;
var slide;

function wait(){
    image = "https://picsum.photos/id/29/1920/620";
    document.getElementById('slide').src = image;
    document.getElementById('dot1').style.backgroundColor = "#03d903";
}

const direction = document.querySelectorAll("button");

direction.forEach((button)=>{
    button.addEventListener("click", ()=>{
        const slideMove = button.id;
        
            if(slideMove == "back"){
                slideIndex--;
            }else if(slideMove == "next"){
                slideIndex++;
            }
        
       
        showSlides();

    });
});

function showSlides() {
     let slides = document.getElementById("slide");
     if (slideIndex == 0){
        slides.src = "https://picsum.photos/id/29/1920/620";
        document.getElementById('dot1').style.backgroundColor = "#03d903"
        document.getElementById('dot2').style.backgroundColor = "white"
        document.getElementById('dot3').style.backgroundColor = "white"
        document.getElementById('dot4').style.backgroundColor = "white"
     }else if(slideIndex ==1){
        slides.src = "https://picsum.photos/id/95/1920/620";
        document.getElementById('dot2').style.backgroundColor = "#03d903"
        document.getElementById('dot1').style.backgroundColor = "white"
        document.getElementById('dot3').style.backgroundColor = "white"
        document.getElementById('dot4').style.backgroundColor = "white"
     }else if(slideIndex ==2){
        slides.src = "https://picsum.photos/id/110/1920/620";
        document.getElementById('dot3').style.backgroundColor = "#03d903"
        document.getElementById('dot1').style.backgroundColor = "white"
        document.getElementById('dot2').style.backgroundColor = "white"
        document.getElementById('dot4').style.backgroundColor = "white"
     }else if(slideIndex ==3){
        slides.src = "https://picsum.photos/id/166/1920/620";
        document.getElementById('dot4').style.backgroundColor = "#03d903"
        document.getElementById('dot1').style.backgroundColor = "white"
        document.getElementById('dot3').style.backgroundColor = "white"
        document.getElementById('dot2').style.backgroundColor = "white"
     }
}

