Explain your code in detail:

index.html:
    the index contains a marsRoverApp div, the div has a date input for selecting the date and a 
    button that when clicked calls the buttonPressed() function in the script.js 
    it also has empty div containers called heading and photosContainer.

script.js:
The script.js has one constant: API_KEY and 6 functions getRoverPhotos(), parseResponse(), displayRoverPhotos(), clearPhotos(), buttonPressed() and start()

    getRoverPhotos():
        The getRoverPhotos() function takes a date string as an argument and uses that and the API_KEY constant to fetch the Mars rover photos from the NASA API,
        it returns the .json form of the response from the API

    parseResponse():
        The parseResponse() function takes a .json object as an argument and parses what data is needed from that .json object
        this parseResponse function takes full_name, img_src, sol and earth_date from EACH photo in the .json object
        using those variables it calls the displayRoverPhotos() fucntion for each photo

        It Also changes the heading to inform the user if the api didnt return anything

    displayRoverPhotos():
        the displayRoverPhotos() function takes full_name, img_src, sol, earth_date as an argument and appends an image, using {img_src}, and a text that 
        contains the {full_name} of the rover and the {sol} of the picture taken to the photosContainer div
        it also takes the {earth_date} and uses it to change the text in the heading div

    clearPhotos():
        the clearPhotos() function clears the existing child nodes in the photosContainer div

    buttonPressed():
        The buttonPressed() function activates whenever the user clicks the "Show Photos" button, it takes the date selection of the date input and uses it to call 
        the getRoverPhotos() function and send the results of that to the parseResponse() to be displayed

    start():
        The start function gets called everytime the page loads, it calls the getRoverPhotos() function with the date "2015-09-28"
        and changes the headline div to say "Discovery of water on Mars (2015-09-28)"

Reflect on alternative approaches:
    Find a way to not call functions from another function in this case how the paseResponse() function calls the displayRoverPhotos() from within itself
    it would probably remove the need for redundant functions like start() in my code by allowing me to call the functions independedtly. 

Discuss improvements: 
     The heading div is constantly being changed everytime displayRoverPhotos() get called replacing it with the same value.
     its fine for this code because there not a lot of values but it could be bad if theres more values

     The clearPhotos() function could probaly not be a function if i can find a way to only need to call it once.