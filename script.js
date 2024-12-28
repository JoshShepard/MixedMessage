/* 
    TO-DO: 
        element within array will change randomly
        display all 3 messages together in a log to console
*/


// Object stores 3 arrays containing 5 random hobbies, animes, locations
const randomMessage = {
    hobbies: ['coding', 'video games', 'golfing', 'stocks', 'fitness'],
    animes: ['Naruto', 'Naruto Shippuden', 'My Hero Academia', 'Attack on Titans', 'Demon Slayer'],
    locations: ['Seattle', 'New York', 'Los Angeles', 'Chicago', 'Houston'],

    // Add new hobby if not in array
    addHobby(hobby) {
        if (!this.hobbies.includes(hobby.toLowerCase())) {
            this.hobbies.push(hobby.toLowerCase());
        } else {
            console.log(`Error: ${hobby} is already in list.`);
        }
    },

    // Delete hobby if in array
    removeHobby(hobby) {
        const hobbyIndex = this.hobbies.indexOf(hobby.toLowerCase());
        if (hobbyIndex !== -1) {
            this.hobbies.splice(hobbyIndex, 1);
        } else {
            console.log(`Error: ${hobby} is not in list.`);
        }
    },

    // Add new anime if not in array 
    addAnime(anime) {
        if (!this.animes.includes(anime)) {
            this.animes.push(anime);
        } else {
            console.log(`Error: ${anime} is already in list.`);
        }
    },

    // Delete anime if in array
    removeAnime(anime) {
        const animeIndex = this.animes.indexOf(anime);
        if (animeIndex !== -1) {
            this.animes.splice(animeIndex, 1);
        } else {
            console.log(`Error: ${anime} is not found in list`);
        }
    },

    // Add new location if not in array
    addLocation(location) {
        if (!this.locations.includes(location)) {
            this.locations.push(location);
        } else {
            console.log(`Error: ${location} is already in list`);
        }
    },

    // Delete location if in array
    removeLocation(location) {
        const locationIndex = this.locations.indexOf(location);
        if (locationIndex !== -1) {
            this.locations.splice(locationIndex, 1);
        } else {
            console.log(`Error: ${location} is not found in list`);
        }
    },
    
    // Generate random message
    generateMessage() {
        // Placeholders for random words in message
        const randomHobby = this.hobbies[Math.floor(Math.random() * 5)];
        const randomAnime = this.animes[Math.floor(Math.random() * 5)];
        const randomLocation = this.locations[Math.floor(Math.random() * 5)];

        // Generate random strings
        console.log(`The next hobby you should learn is ${randomHobby}. While you're taking a break from your hobby, relax by watching ${randomAnime}. Before the year ends visit ${randomLocation}!`);
    }
};


console.time('loopTime');

for (let i = 0; i < 10000; i++) {
    randomMessage.generateMessage();
}

console.timeEnd('loopTime');