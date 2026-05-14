document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector(".gallery-grid");
    const gardensGrid = document.querySelector(".gardens-grid");

    const gardenData = [
        {
            "name": "CapitaSpring",
            "image": "https://en.wikipedia.org/wiki/Dennis_Ritchie#/media/File:Dennis_Ritchie_2011.jpg ",
            "description": "A green oasis in the heart of the city, CapitaSpring is a 51-storey integrated development with a stunning sky garden and urban farm.",
            "location": "88 Market St, Singapore 048948",
            "coords": { "lat": 1.282, "lng": 103.85 }
        },
        {
            "name": "Gardens by the Bay",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg/1920px-Supertree_Grove%2C_Gardens_by_the_Bay%2C_Singapore_-_20120712-02.jpg",
            "description": "An iconic Singapore landmark, Gardens by the Bay features the stunning Supertree Grove, Cloud Forest, and Flower Dome.",
            "location": "18 Marina Gardens Dr, Singapore 018953",
            "coords": { "lat": 1.281, "lng": 103.863 }
        },
        {
            "name": "Funan Mall",
            "image": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
            "description": "A creative intersection of retail, co-working, and community, Funan boasts an urban farm and a rooftop garden with a futsal court.",
            "location": "107 North Bridge Rd, Singapore 179105",
            "coords": { "lat": 1.291, "lng": 103.85 }
        },
        {
            "name": "Skyville @ Dawson",
            "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
            "description": "This award-winning HDB project features a stunning 800m-long rooftop garden connecting several residential blocks.",
            "location": "86 Dawson Rd, Singapore 141086",
            "coords": { "lat": 1.291, "lng": 103.815 }
        },
        {
            "name": "The Pinnacle @ Duxton",
            "image": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
            "description": "The two longest sky gardens in the world are on the 50th floor of this iconic HDB development, offering panoramic views of the city.",
            "location": "1G Cantonment Rd, Singapore 085301",
            "coords": { "lat": 1.277, "lng": 103.84 }
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

    const map = L.map('map').setView([1.283, 103.85], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    gardenData.forEach(garden => {
        L.marker([garden.coords.lat, garden.coords.lng]).addTo(map)
            .bindPopup(`<b>${garden.name}</b><br>${garden.location}`);
    });
});