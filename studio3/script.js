(function(){
    'use strict';
    console.log('reading js');

    AOS.init();

    new TypeIt("#typing-test", {
        // strings: "Kenjockety",
        speed: 150,
        waitUntilVisible: true,
        afterComplete: function (instance) {
            instance.destroy();
        }
    }).go();

})();