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

    const diffuse = document.querySelector('#blur-overlay');

    const topImages = document.querySelectorAll('.top');


    creek.addEventListener('click', function(event){
        console.log('click');
        creekOverlay.className = "overlay-onscreen";
        creek.src = "images/creek-clicked.svg";
        diffuse.className = ".visible"
    });

    tent.addEventListener('click', function(event){
        console.log('click');
        tentOverlay.className = "overlay-onscreen";
        tent.src = "images/tent-clicked.svg";
        diffuse.className = ".visible"
    });

    deer.addEventListener('click', function(event){
        console.log('click');
        deerOverlay.className = "overlay-onscreen";
        deer.src = "images/deer-clicked.svg";
        diffuse.className = ".visible"
    });

    stump.addEventListener('click', function(event){
        console.log('click');
        stumpOverlay.className = "overlay-onscreen";
        stump.src = "images/stump-clicked.svg";
        diffuse.className = ".visible"
    });

    stove.addEventListener('click', function(event){
        console.log('click');
        stoveOverlay.className = "overlay-onscreen";
        stove.src = "images/stove-clicked.svg";
        diffuse.className = ".visible"
    });

    swing.addEventListener('click', function(event){
        console.log('click');
        swingOverlay.className = "overlay-onscreen";
        swing.src = "images/swing-clicked.svg";
        diffuse.className = ".visible"
    });

    mac.addEventListener('click', function(event){
        console.log('click');
        macOverlay.className = "overlay-onscreen";
        mac.src = "images/mac-clicked.svg";
        diffuse.className = ".visible"
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
            diffuse.className = "invisible"
        });
    }

    for( const eachTop of topImages){
        eachTop.addEventListener( 'mouseover', function changePicture(event){
            const thisPicture = event.target;
            //console.log(thisPicture.id);
            thisPicture.className = 'top fadeout';

        } );

        eachTop.addEventListener( 'mouseout', function(event){
            const thisPicture = event.target;
            //console.log(thisPicture.id);
            thisPicture.className = 'top fadein';

        } );
    }

    
    



})();