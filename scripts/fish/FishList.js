
import { useFish } from "./FishDataProvider.js"
/**
 *  FishList which renders individual fish objects as HTML
 */

import { Fish } from "./Fish.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")
    const fishes = useFish()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const fish of fishes) {


        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
        fishHTMLRepresentations += Fish(fish)
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += fishHTMLRepresentations
        
}

