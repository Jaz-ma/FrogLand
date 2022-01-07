
   
    let bob = document.getElementById("character")
    let block = document.getElementById("block")
    function jump(){
        if (character.classList.contains("animate")){return}

        if(character.classList !="animate"){
            bob.classList.add("animate")
        }
        setTimeout(function(){
           bob.classList.remove("animate")
        }, 500);
    }
    var score = 0;
    var highscore =localStorage.getItem("highscore")
    document.getElementById("highscore").innerHTML="Highscore :  "+highscore
    var countscore = setInterval(() => {
        score++;
        document.getElementById("score").innerHTML=score
    }, 50);
     setInterval(function() {
        var characterTop= parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var blocKleft= parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      
        if(blocKleft<20 && blocKleft>0 && characterTop>=130){
            if( score>=highscore){
                localStorage.setItem("highscore",score)
            }
            if(confirm('You lose \n \n Score : '+ score+' \n \n Play Again?')){
                location.reload();
            }
            else{
                block.style.animation = "none"
                clearInterval(countscore)
            }            
        }
    }, 10);
    document.addEventListener("keypress", function(event) {
        if (event.key == ' ') {
          jump()
        }
      });
 
