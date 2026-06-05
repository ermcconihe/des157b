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

    const diffuse = document.querySelector('blur-overlay');


    creek.addEventListener('click', function(event){
        console.log('click');
        creekOverlay.className = "overlay-onscreen";
        creek.src = "images/creek-clicked.png";
        diffuse.className = ""
    });

    tent.addEventListener('click', function(event){
        console.log('click');
        tentOverlay.className = "overlay-onscreen";
        tent.src = "images/tent-clicked.png";
    });

    deer.addEventListener('click', function(event){
        console.log('click');
        deerOverlay.className = "overlay-onscreen";
        deer.src = "images/deer-clicked.png";
    });

    stump.addEventListener('click', function(event){
        console.log('click');
        stumpOverlay.className = "overlay-onscreen";
        stump.src = "images/stump-clicked.png";
    });

    stove.addEventListener('click', function(event){
        console.log('click');
        stoveOverlay.className = "overlay-onscreen";
        stove.src = "images/stove-clicked.png";
    });

    swing.addEventListener('click', function(event){
        console.log('click');
        swingOverlay.className = "overlay-onscreen";
        swing.src = "images/swing-clicked.png";
    });

    mac.addEventListener('click', function(event){
        console.log('click');
        macOverlay.className = "overlay-onscreen";
        mac.src = "images/mac-clicked.png";
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
    



})();