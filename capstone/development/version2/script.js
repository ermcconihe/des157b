(function(){
    'use strict';
    console.log('reading js');

    const house = document.querySelector('#house');
    const houseOverlay = document.querySelector('#house-overlay');
    const backArrow = document.querySelector('.fa-solid');

    house.addEventListener('click', function(event){
        console.log('click');
        houseOverlay.className = "overlay-onscreen";
    });

    backArrow.addEventListener('click', function(){
        console.log('click');
        houseOverlay.className = "overlay-offscreen";
    });



})();