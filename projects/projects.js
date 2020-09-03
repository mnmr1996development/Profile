function smoothscroll(target, duration){
    
    var target = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition-startPosition;
    var startTime = null;
    function animation(currentTime){
        if(startTime == null){
            startTime = currentTime;
        }

        var timeElapsed = currentTime-startTime;
        var run = ease(timeElapsed,startPosition,distance,duration)
        window.scrollTo(0,run);
        if(timeElapsed < duration){
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d){
        t/= d/2;
        if(t < 1){
            return c/2 *t * t +b;
        }
        t--;
        return -c/2 * (t*(t-2)-1) +b;

    }

    requestAnimationFrame(animation)
}


var java = document.querySelector(".Javapicker");

java.addEventListener('click', function(){
    smoothscroll('#java_based',200)
})

var web = document.querySelector(".Webpicker");

web.addEventListener('click', function(){
    smoothscroll('#web_based',1000)
})

var Python = document.querySelector(".Pythonpicker");

Python.addEventListener('click', function(){
    smoothscroll('#python_based',1000)
})

var ASM = document.querySelector(".Assemblypicker");

ASM.addEventListener('click', function(){
    smoothscroll('#assembly_based',2000)
})

