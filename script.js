window.addEventListener('scroll', function(){
     var scroll = document.querySelector('.Back-to-top');
     scroll.classList.toggle("active",this.window.scrollY > 750 )
 })
 function scrollToTop(){
     window.scrollTo({
         top:0,
         behavior:"smooth"
        
     })
 }
 window.onload=function(){
   
    var btt =document.getElementById('Logo');
 btt.addEventListener("click",function(){
 var menu = document.getElementsByClassName('.column');
         for(var i = 0; i<menu.length; i++){
             menu.classList.toggle("menu-down")       
            }
 })
  }

