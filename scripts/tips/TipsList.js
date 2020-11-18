import { useTip } from "./TipsDataProvider.js"
/**
 *  TipList which renders individual tip objects as HTML
 */

import { Tip } from "./Tip.js"

export const TipList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".tipList")
    const tips = useTip()

    // Generate all of the HTML for all of the fish
    let tipHTMLRepresentations = ""
    for (const tip of tips) {


        /*
            Invoking the Tip component function
            and passing the current tip object as an argument.
            Each time, we'll add the return value to the
            tipHTMLRepresentations variable with `+=`
        */
       tipHTMLRepresentations += Tip(tip)
    }

    // Add a section, and all of the tip to the DOM
    contentElement.innerHTML += tipHTMLRepresentations
       
}