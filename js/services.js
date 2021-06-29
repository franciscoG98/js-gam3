let randomNum = (size) => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX -target.x
    let diffY = e.offsetY -target.y
    return Math.sqrt( (diffX * diffX) + (diffY * diffY) )
}

let getDistanceHint = distance => {
    if (distance < 2) {
        return "Found it"
    } else if (distance < 20) {
        return "Boiling HOT!!"
    } else if(distance < 30) {
        return "Really Hot"
    } else if(distance < 60) {
        return "Hot"
    } else if(distance < 90) {
        return "Warm"
    }  else if(distance < 120) {
        return "Cold"
    } else if(distance < 180) {
        return "Really Cold"
    } else {
        return "Freezing!!"
    }
}
