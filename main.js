
const gallery = document.querySelector(".gallery-grid");
const gardensGrid = document.querySelector(".gardens-grid");

const gardenData = [
    {
        "name": "CapitaSpring",
        "image": "https://images.unsplash.com/photo-1667994883112-3581fc83b632?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A green oasis in the heart of the city, CapitaSpring is a 51-storey integrated development with a stunning sky garden and urban farm.",
        "location": "88 Market St, Singapore 048948",
    },
    {
        "name": "Gardens by the Bay",
        "image": "https://images.unsplash.com/photo-1583292955567-c79a4c14b34c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "An iconic Singapore landmark, Gardens by the Bay features the stunning Supertree Grove, Cloud Forest, and Flower Dome.",
        "location": "18 Marina Gardens Dr, Singapore 018953",
    },
    {
        "name": "Funan Mall",
        "image": "https://images.unsplash.com/photo-1593835252444-a78c5db9e8b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "A creative intersection of retail, co-working, and community, Funan boasts an urban farm and a rooftop garden with a futsal court.",
        "location": "107 North Bridge Rd, Singapore 179105",
    },
    {
        "name": "Skyville @ Dawson",
        "image": "https://live.staticflickr.com/65535/51296997577_a5a735624c_b.jpg",
        "description": "This award-winning HDB project features a stunning 800m-long rooftop garden connecting several residential blocks.",
        "location": "86 Dawson Rd, Singapore 141086",
    },
    {
        "name": "The Pinnacle @ Duxton",
        "image": "https://live.staticflickr.com/5579/14622956298_920030917c_b.jpg",
        "description": "The two longest sky gardens in the world are on the 50th floor of this iconic HDB development, offering panoramic views of the city.",
        "location": "1G Cantonment Rd, Singapore 085301",
    }
];

gardenData.forEach(garden => {
    const galleryImage = document.createElement("img");
    galleryImage.src = garden.image;
    galleryImage.alt = garden.name;
    gallery.appendChild(galleryImage);

    const gardenCard = document.createElement("div");
    gardenCard.classList.add("card");
    gardenCard.innerHTML = `
        <h3>${garden.name}</h3>
        <p>${garden.description}</p>
        <p><strong>Location:</strong> ${garden.location}</p>
    `;
    gardensGrid.appendChild(gardenCard);
});
