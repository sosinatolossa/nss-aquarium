/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Sima",
        food: "beef heart",
        length: 3,
        location: "Tennessee Aquarium",
        species: "Blue Gill",
        image: "images/fish2.jpg"
    },

    {
        name: "Eko",
        food: "cheetos",
        length: 6,
        location: "Backyard pond",
        species: "Blue Gill",
        image: "images/fish.jpeg"
    }
]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}



//this code will output a fish that is divisible by 3
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const fish of fishCollection) {
        if (fish.length % 3 === 0) {
            //console.log(fish)
            holyFish.push(fish)
        }
    }

    return holyFish
}
//this code will output a fish that is divisible by 5
export const soldierFish = () => {
    const soldiers = []

    // 5, 10, 15, 20, 25, etc... fish
    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !== 0) {
            //console.log(fish)
            soldiers.push(fish)
        }
    }
    return soldiers
}

//this code will output a fish that is not divisible by 3 0r 5
export const nonHolyFish = () => {
    const regularFish = []

    // Any fish not a multiple of 3 and 5
    for (const fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            //console.log(fish)
            regularFish.push(fish)
        }
    }
    return regularFish
}