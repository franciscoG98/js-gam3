const HEIGTH = 400; 
const WIDTH = 600; 

// mapa
let target = {
    x: randomNum(WIDTH),
    y: randomNum(HEIGTH),
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;


$map.addEventListener('click', function(e) {

    clicks++;
    let distance = getDistance(e, target)
    let hint = getDistanceHint(distance)

    $distance.innerHTML = `<h1>${hint}</h1>`;


    if(distance < 20) {
        alert(`Found the Treasure in ${clicks} clicks!`)
    }
    console.log('distance', distance,'\n hint:', hint);
})

const resetBtn = document.getElementById('reset')

