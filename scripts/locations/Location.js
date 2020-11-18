/*
 Location which renders individual location objects as HTML
 */
export const Location = (location) => {
    return `
        <section class="location">
            <div><img  class="location__image" src="images/${location.locationImageSource}" alt="Tennessee Aquarium"></div>
            <div class="location__name">${location.locationName}</div>
            <div class="location__url"><a href="https://tnaqua.org/"></a>${location.locationWebsite}</div>
            <div class="location__description">${location.locationDescription}</div>
        </section>
    `
}