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



//this code will output a number that is divisible by 3
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const number of fishCollection) {
        if (number % 3 === 0) {
            //console.log(number)
            holyFish.push(number)
        }
    }

    return holyFish
}
//this code will output a number that is divisible by 5
export const soldierFish = () => {
    const soldiers = []

    // 5, 10, 15, 20, 25, etc... fish
    for (const number of fishCollection) {
        if (number % 5 === 0) {
            //console.log(number)
            soldiers.push(number)
        }
    }
    return soldiers
}

//this code will output a number that is not divisible by 3 0r 5
export const nonHolyFish = () => {
    const regularFish = []

    // Any fish not a multiple of 3 and 5
    for (const number of fishCollection) {
        if (number % 5 !== 0 && number % 5 !== 0) {
            //console.log(number)
            regularFish.push(number)
        }
    }
    return regularFish
}