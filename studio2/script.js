(function (){
    'use strict';
    console.log('reading js');


    const myImg = document.querySelector('#img-container');
    const myTime = document.querySelector('#my-time');
    const myDate = document.querySelector('#my-date');
    const myTemp = document.querySelector('#my-temp');
    const myWeather = document.querySelector('#my-weather');
    const myMood = document.querySelector('#my-mood');
    const tiles = document.querySelectorAll('.tiles');

    //i want the data to populate on click, does the thing for acutally populating the data need to be a separate function - i also don't really understand how to get the data beyond the super basic functions
    //i don't get the global data thing at all 
    


    async function getData(){
        const fetchPromise = await fetch('data/data.json');
        const data = await fetchPromise.json();

        const keys = Object.keys(data);
        // console.log(data);
        console.log(keys);
        populate(data);

        // document.querySelector('#img-container img').src = data.img2.img;
    };

    function populate(data){

        keys.forEach( function(eachPoint){

        });

        for( const tile of tiles){
            tile.addEventListener('click', function(){


                // keys.forEach( function(eachPoint){
                //     myTime.innerHTML = data.point2.time;
                // })
                // myImg.src = data.point.img;
                myTime.innerHTML = data.point.time;
                myDate.innerHTML = data.point.date;
                myTemp.innerHTML = data.point.temperature;
                myWeather.innerHTML = data.point.weather;
                myMood.innerHTML = data.point.mood;

                console.log('return');
            });
        }

        
    }

        // const dataPoints = Object.values(data);
        // dataPoints.forEach( function(point){

        //     for( const tile of tiles){
        //         tile.addEventListener('click', function(){

        //             // myImg.src = data.point.img;
        //             myTime.innerHTML = `${data[point].time}`;
        //             myDate.innerHTML = data.point.date;
        //             myTemp.innerHTML = data.point.temperature;
        //             myWeather.innerHTML = data.point.weather;
        //             myMood.innerHTML = data.point.mood;

        //             console.log('return');
        //         });
        //     }

        // });


    //  const dataPoints = Object.values(data);
    //     dataPoints.forEach( function(point){

    //         tile.addEventListener('click', function(){
    //             myImg.src = data.point.img;
    //             myTime.innerHTML = data.point.time;
    //             myDate.innerHTML = data.point.date;
    //             myTemp.innerHTML = data.point.temperature;
    //             myWeather.innerHTML = data.point.weather;
    //             myMood.innerHTML = data.point.mood;
                

    //             myImg.src = data.point.img;
    //             myTime.innerHTML = `date: ${data.point.time}`;
    //             myDate.innerHTML = data[point].date;
    //             myTemp.innerHTML = data.point.temperature;
    //             myWeather.innerHTML = data.point.weather;
    //             myMood.innerHTML = data.point.mood;
    //         });
    //     });


    // document.querySelector('.tiles').addEventListener('click', )

    getData();

})();