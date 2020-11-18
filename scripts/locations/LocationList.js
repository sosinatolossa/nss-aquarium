import { useLocation } from "./LocationDataProvider.js"
/*
 LocationList which renders individual fish objects as HTML
 */

import { Location } from "./Location.js"

export const LocationList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".locations")
    const theLocations = useLocation()

    // Generate all of the HTML for all of the fish
    let locationHTMLRepresentations = ""
    for (const loco of theLocations) {


        /*
            Invoke the Location component function
            and pass the current loco object as an argument.
            Each time, add the return value to the
            locationHTMLRepresentations variable with `+=`
        */
        locationHTMLRepresentations += Location(loco)
    }

    // Add a section, and all of the fish to the DOM
    contentElement.innerHTML += locationHTMLRepresentations
        
}