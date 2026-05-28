(function(){
    'use strict';
    console.log('reading js');

    const creek = document.querySelector('#creek');
    const tent = document.querySelector('#tent');
    const deer = document.querySelector('#deer');
    const stump = document.querySelector('#stump');
    const stove = document.querySelector('#stove');
    const swing = document.querySelector('#swing');
    const mac = document.querySelector('#mac');
    const creekOverlay = document.querySelector('#creek-overlay');
    const tentOverlay = document.querySelector('#tent-overlay');
    const deerOverlay = document.querySelector('#deer-overlay');
    const stumpOverlay = document.querySelector('#stump-overlay');
    const stoveOverlay = document.querySelector('#stove-overlay');
    const swingOverlay = document.querySelector('#swing-overlay');
    const macOverlay = document.querySelector('#mac-overlay');
    const backArrows = document.querySelectorAll('.fa-solid');

    creek.addEventListener('click', function(event){
        console.log('click');
        creekOverlay.className = "overlay-onscreen";
    });

    tent.addEventListener('click', function(event){
        console.log('click');
        tentOverlay.className = "overlay-onscreen";
    });

    deer.addEventListener('click', function(event){
        console.log('click');
        deerOverlay.className = "overlay-onscreen";
    });

    stump.addEventListener('click', function(event){
        console.log('click');
        stumpOverlay.className = "overlay-onscreen";
    });

    stove.addEventListener('click', function(event){
        console.log('click');
        stoveOverlay.className = "overlay-onscreen";
    });

    swing.addEventListener('click', function(event){
        console.log('click');
        swingOverlay.className = "overlay-onscreen";
    });

    mac.addEventListener('click', function(event){
        console.log('click');
        macOverlay.className = "overlay-onscreen";
    });

    for (const arrow of backArrows){
        arrow.addEventListener('click', function(){
            console.log('click');
            creekOverlay.className = "overlay-offscreen";
            tentOverlay.className = "overlay-offscreen";
            deerOverlay.className = "overlay-offscreen";
            stumpOverlay.className = "overlay-offscreen";
            stoveOverlay.className = "overlay-offscreen";
            swingOverlay.className = "overlay-offscreen";
            macOverlay.className = "overlay-offscreen";
        });
    }


    document.querySelector('.close').addEventListener('click', function(){
        document.querySelector('#overlay').className = 'hidden';
    });



})();