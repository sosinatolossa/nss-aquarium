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
        length: "3-inch",
        location: "Tennessee Aquarium",
        species: "Blue Gill",
        image: "images/fish2.jpg"
    },

    {
        name: "Eko",
        food: "cheetos",
        length: "2.5-inch",
        location: "Backyard pond",
        species: "Blue Gill",
        image: "images/fish.jpeg"
    }
]

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}