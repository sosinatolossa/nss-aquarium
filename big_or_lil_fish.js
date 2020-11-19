
const numbers = [4,1,5,8,6,4,2,2,4,6,7,7,8,9,7,5,3,2,1,3,4,2,1,3,5,7,76,5,9,4,23,5,3,2,6,8,98,65,3,1,3,4]


//this code will output a number that is divisible by 3
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (const number of  numbers) {
        if (number % 3 === 0) {
            console.log(number)
            holyFish.push(number)
        }
    }

    return holyFish
}
//this code will output a number that is divisible by 5
export const soldierFish = () => {
    const soldiers = []

    // 5, 10, 15, 20, 25, etc... fish
    for (const number of numbers) {
        if (number % 5 === 0) {
            console.log(number)
            soldiers.push(number)
        }
    }
    return soldiers
}

//this code will output a number that is not divisible by 3 0r 5
export const nonHolyFish = () => {
    const regularFish = []

    const regularFish = []

    // Any fish not a multiple of 3 or 5
    for (const number of numbers) {
        if (number % 5 !== 0 || number % 5 !=== 0) {
            console.log(number)
            regularFish.push(number)
        }
    }
    return regularFish
}
