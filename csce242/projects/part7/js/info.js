const getDestinations = async () => {
    const url = "https://neelpatel04.github.io/csce242/projects/part6/json/travel.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log("Sorry, something went wrong while fetching destinations.");
    }
};

const showDestinations = async () => {
    const destinations = await getDestinations();
    const destinationGrid = document.getElementById("destinationGrid");

    destinations.forEach((place) => {
        // Section for each destination
        const section = document.createElement("section");
        section.classList.add("destination");

        // Image
        const img = document.createElement("img");
        img.src = place.img;
        img.alt = `${place.city}, ${place.country}`;
        section.append(img);
        // Heading (City, Country)
        const h3 = document.createElement("h3");
        h3.innerHTML = `${place.city}, ${place.country}`;
        section.append(h3);

        // Description
        const p = document.createElement("p");
        p.innerHTML = place.description;
        section.append(p);

        // Cost
        const cost = document.createElement("p");
        cost.innerHTML = `<strong>Cost:</strong> $${place.cost}`;
        section.append(cost);

        // View Details Link
        const a = document.createElement("a");
        a.href = "#";
        a.innerHTML = "View Details";
        section.append(a);

        destinationGrid.append(section);
    });
};

showDestinations();
