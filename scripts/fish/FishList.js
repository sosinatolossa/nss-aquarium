
import { mostHolyFish, soldierFish, nonHolyFish } from "/scripts/fish/FishDataProvider.js"
import { Fish } from "./Fish.js"

/**
 *  FishList which renders individual fish objects as HTML
 */

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")

    const holyFish = mostHolyFish()
    const theSoldier = soldierFish()
    const theNonHolyFish = nonHolyFish()

    
    let fishHTMLRepresentations = ""

    for (const fish of holyFish) {
        fishHTMLRepresentations += Fish(fish)  
    }

    // Add a section, and all of the fish to the DOM
    

    for (const fish of theSoldier) {
        fishHTMLRepresentations += Fish(fish)
    }
    

    for (const fish of theNonHolyFish) {
        fishHTMLRepresentations += Fish(fish)
    }


    contentElement.innerHTML += fishHTMLRepresentations

        
}

    