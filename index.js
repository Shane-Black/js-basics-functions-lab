// Code your solution in this file!
// First, declare a variable for the location of HQ

const hq = 42
function distanceFromHqInBlocks(pickup) {
    //     if (pickup < hq) {
    //         return hq - pickup
    //     }else { 
    //     return pickup - hq
    //     }
    return Math.abs(pickup - hq)
}

console.log(distanceFromHqInBlocks(38))

// 2nd function calculating distance from hq in feet
function distanceTravelledInFeet(start, destination) {
    // if (origin < destination) {
    //     return ((destination - origin)*264)
    // } else {
    //     return (origin - destination)*264
    // }
    return Math.abs(destination - start) * 264
}

//3rd function distance from HQ in feet
function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks(pickup) * 264
}

//4th function calculates fare price
function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination) 
    if (distanceTravelled <= 400) {
        return 0 
    } 
    else if ((distanceTravelled > 400) && (distanceTravelled <= 2000)) {
        return (distanceTravelled - 400) * 0.02
    }
    else if (distanceTravelled > 2000 && distanceTravelled < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}