(function(){
    'use strict';
    console.log('reading js');

    const house = document.querySelector('#house');
    const houseOverlay = document.querySelector('#house-overlay');

    house.addEventListener('click', function(event){
        console.log('click');
        houseOverlay.className = "overlay-onscreen";
    });

})();