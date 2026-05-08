(function (){
    'use strict';
    console.log('reading js');


    const myImg = document.querySelector('#img-container img');
    const myTime = document.querySelector('#my-time');
    const myDate = document.querySelector('#my-date');
    const myTemp = document.querySelector('#my-temp');
    const myWeather = document.querySelector('#my-weather');
    const myMood = document.querySelector('#my-mood');

    const tiles = document.querySelectorAll('.tiles');
    const des = document.querySelector('#description');

    async function getData(){
        const fetchPromise = await fetch('data/data.json');
        const data = await fetchPromise.json();

        console.log(data);
        populate(data);
    };

    function populate(data){

        for(const tile of tiles){
            tile.addEventListener('click', function (event) {
                event.preventDefault();

                // console.log(tile.id);

                myImg.classList.toggle('fade-in');

                myImg.src = data[tile.id].img;
                myImg.style.visibility = 'visible';
                myTime.innerHTML = `time: ${data[tile.id].time}`;
                myDate.innerHTML = `date: ${data[tile.id].date}`;
                myTemp.innerHTML = `temperature: ${data[tile.id].temperature}`;
                myWeather.innerHTML = `weather: ${data[tile.id].weather}`;
                myMood.innerHTML = `mood: ${data[tile.id].mood}`;
                des.style.visibility = 'hidden';

            });
        }
 
    }

    getData();

})();