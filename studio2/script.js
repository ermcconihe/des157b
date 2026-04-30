(function (){
    'use strict';
    console.log('reading js');

    async function getData(){
        const fetchPromise = await fetch('data.json');
        const data = await fetchPromise.json();

        console.log(data);

        document.querySelector('#img-container img').src=data.img2.img;
    };

    getData();

})();