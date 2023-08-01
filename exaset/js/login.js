$( document ).ready(function() {

console.log('lottie')
    let player = document.querySelector("lottie-player");
    let play = document.querySelector("#loginbtn");    

    play.onclick = function () {
        player.setDirection(1);
        player.play(); 
        let animationData = animation.getLottie();
        animationData.playSegments([[45, 75]], true,);
        animation.setLooping(false)
    };

    $("#loginbtn").click(function(){
    })

    let stop = document.querySelector("#winClose");
    stop.onclick = function () {
        player.setDirection(-1);
        player.play();
        let animationData = animation.getLottie();
        animationData.playSegments([[0, 45]], false,);
        animation.setLooping(true)
        animation.setDirection(-1);

        };
        
  }
)
