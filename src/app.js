const commentClick = document.getElementById("comment-click");
const popupText = document.getElementById("popup-text");

commentClick.addEventListener("click",function(){
    popupText.classList.toggle("hidden");
    
})
