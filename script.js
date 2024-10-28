const API_KEY = "RwhssaAdj7GaxkttDMHuRpAtNx7p0OSHFUACDD3A"
const heading = document.getElementById("heading")
const displayPhotos = document.getElementById("photosContainer")

async function buttonPressed() {
    const dateSelection = document.getElementById("earthDate").value

    clearPhotos()
    fetchPhotos = await getRoverPhotos(dateSelection)
    parseResponse(fetchPhotos)
}


async function displayRoverPhotos(full_name, img_src, sol, earth_date) {

    const image = document.createElement("img")
    const text = document.createElement("p")

    heading.textContent = `Photos from ${earth_date}`

    image.src = img_src
    text.textContent = `Taken by ${full_name} on sol ${sol}`

    displayPhotos.appendChild(image)
    displayPhotos.appendChild(text)
}


async function getRoverPhotos(date) {
    console.log("Fetching data...")
    
    const fetchLink = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`
    console.log(fetchLink)
    try {
        const response = await fetch(fetchLink);
        if(response.ok){
            console.log("Data fetched!")
            return response.json();
        } else {
            throw new Error(`HTTP Error! status: ${response.status}`)
        }
    } catch (error){
        console.error("Failed to fetch data: ", error.message);
    }
}


async function parseResponse(response) {
    try{
        dateTaken = response.photos[0].earth_date
        heading.textContent = `Photos from ${dateTaken}`

        response.photos.forEach(photo => {
            const{
                camera: {full_name},
                img_src,
                sol,
                earth_date
            } = photo
    
            displayRoverPhotos(full_name, img_src, sol, earth_date)
        })
    } catch {

        heading.textContent = `No photos found on this date, Try Again.`
        clearPhotos()
    }
}

async function start() {
    waterDiscovery = await getRoverPhotos("2015-09-28")
    parseResponse(waterDiscovery)
    heading.textContent = "Discovery of water on Mars (2015-09-28)"
}


function clearPhotos() {
    while (displayPhotos.firstChild){
        displayPhotos.removeChild(displayPhotos.firstChild)
    }
}

start()
