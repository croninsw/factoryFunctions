const createDoctor = (name, specialty, address) => {
    return {
        doctor: name,
        specialty: specialty,
        address: address
    }
}
 let BowWowKennels = []

 const createPet = (name, breed) => {
    return {
        pet_Name: name,
        pet_Breed: breed
    }
}

BowWowKennels.push(createPet("Gustav", "cattledog"))
BowWowKennels.push(createPet("Pearl", "cat"))
BowWowKennels.push(createPet("Minifridge", "hamster"))
console.log(BowWowKennels)


// Your job is to sign each of these promising young music stars to the appropriate label.

// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.
const JumpStop = []
const Chatten = []
const Polar = []

// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.
function createFunkArtist(name, genre, age) {
    artist = {
        artist_name: name,
        genre: genre,
        artist_age: age
    }
    JumpStop.push(artist)
}
function createRapArtist(name, genre, age) {
    artist = {
        artist_name: name,
        genre: genre,
        artist_age: age
    }
    JumpStop.push(artist)
}
function createCountryArtist(name, genre, age) {
    artist = {
        artist_name: name,
        genre: genre,
        artist_age: age
    }
    Chatten.push(artist)
}
function createBluegrassArtist(name, genre, age) {
    artist = {
        artist_name: name,
        genre: genre,
        artist_age: age
    }
    Chatten.push(artist)
}
function createPopArtist(name, genre, age) {
    artist = {
        artist_name: name,
        genre: genre,
        artist_age: age
    }
    Polar.push(artist)
}

// Bruce Atikins is a Country artist and is 23 years old
createCountryArtist("Bruce Atikins", "country", 23)
// Jensen Brown is a Pop artist and is 20 years old
createPopArtist("Jensen Brown", "pop", 20)
// Dre Funkz is a Funk artist and is 25 years old
createFunkArtist("Dre Funkz", "funk", 25)
// Dusta Grimes is a Rap artist and is 21 years old
createRapArtist("Dusta Grimes", "rap", 21)
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
createBluegrassArtist("Bartholomew Danielson", "bluegrass", 23)
// Avilee Dallas is a Country artist and is 19 years old
createCountryArtist("Avilee Dallas", "country", 19)
// Austin Kinkaid is a Pop artist and is 22 years old
createPopArtist("Austin Kinkaid", "pop", 22)
// Loyoncé Branis is a Rap artist and is 27 years old
createRapArtist("Loyonce Branis", "rap", 27)

console.log(Polar)
console.log(Chatten)
console.log(JumpStop)
