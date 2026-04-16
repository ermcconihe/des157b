(function(){
    'use strict';
    console.log('reading js');

    const myVideo = document.querySelector('#myVideo');
    const fs = document.querySelector('.fa-expand');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const cover = document.querySelector('#cover');
    const breakFree = document.querySelector('#hover-area');
    const calm = document.querySelector('#calm');

    const poem = {
    start: [1, 6, 11, 16],
    stop: [21, 21, 21, 21],
    line: [line1, line2, line3, line4]
    }

    const intervalID = setInterval(checkTime, 1000);

    function checkTime() {
        console.log(parseInt(myVideo.currentTime));
        
        if (poem.start[0] < myVideo.currentTime && myVideo.currentTime < poem.stop[0]) {
            poem.line[0].className = "showing";
        } else {
            poem.line[0].className = "hidden";
        }
        if (poem.start[1] < myVideo.currentTime && myVideo.currentTime < poem.stop[1]) {
            poem.line[1].className = "showing";
        } else {
            poem.line[1].className = "hidden";
        }
        if (poem.start[2] < myVideo.currentTime && myVideo.currentTime < poem.stop[2]) {
            poem.line[2].className = "showing";
        } else {
            poem.line[2].className = "hidden";
        }
        if (poem.start[3] < myVideo.currentTime && myVideo.currentTime < poem.stop[3]) {
            poem.line[3].className = "showing";
        } else {
            poem.line[3].className = "hidden";
        }
    }

    breakFree.addEventListener('mouseover', function(){

        cover.removeAttribute('class');
        calm.removeAttribute('class');
        breakFree.style.color = "black";
        myVideo.pause();
    })

    breakFree.addEventListener('mouseout', function(){

        cover.className = "hidden";
        calm.className = "hidden";
        breakFree.style.color = "antiquewhite";
        myVideo.play();
    })



    fs.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();

        }
    });


})();