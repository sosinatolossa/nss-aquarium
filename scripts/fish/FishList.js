
import { mostHolyFish, soldierFish, nonHolyFish } from "/scripts/fish/FishDataProvider.js"
import { soldierFish } from "/scripts/fish/FishDataProvider.js"
import { nonHolyFish } from "/scripts/fish/FishDataProvider.js"
import { Fish } from "./Fish.js"

/**
 *  FishList which renders individual fish objects as HTML
 */

import { Fish } from "./Fish.js"

export const FishList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList")

    const holyFish = mostHolyFish()
    const soldierFish = soldierFish()
    const nonHolyFish = nonHolyFish()

    
    let fishHTMLRepresentations = ""

    for (const fish of holyFish) {
        fishHTMLRepresentations += Fish(fish)  
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += fishHTMLRepresentations
        
}

    for (const fish of soldiers) {
        const fishHTMLRepresentations = Fish(fish)

    }
    contentElement.innerHTML += fishHTMLRepresentations

    for (const fish of nonHolyFish) {
        const fishHTMLRepresentations = Fish(fish)

    }
    contentElement.innerHTML += fishHTMLRepresentations