/*  all white text are words made manually by me :)
each "let" variable below is connected to the html like
a CSS element! the document.querySelector is looking for
the '.input' etc in the HTML before it reacts */

let inputField = document.querySelector('.input');
let form = document.querySelector('.form');
let page = document.querySelector('.gamebox');

let page1URL = '/C:/Users/Emmy/Downloads/Babycodes/Babycodes/JS%20game/mainForest.html';
let page2URL = '/C:/Users/Emmy/Downloads/Babycodes/Babycodes/JS%20game/ruinsSouth.html';
let page3URL = '/C:/Users/Emmy/Downloads/Babycodes/Babycodes/JS%20game/streamWest.html';
let page4URL = '/C:/Users/Emmy/Downloads/Babycodes/Babycodes/JS%20game/wallEast.html';
let page5URL = '/C:/Users/Emmy/Downloads/Babycodes/Babycodes/JS%20game/cottageNorth.html';

let pagesOptions = {
    page1: { // mainForest
        Look: ['Treestump'],
        Go: ['East', 'North', 'South', 'West'],
        Get: ['Axe']
    },/* pagesOptions is an object, which has properties "look, Go, Get". 
The values of these properties are ARRAYS (everything in square brackets ever)*/
    page2: { // ruinsSouth
        Look: ['Peaches', 'Bucket', 'Shovel'],
        Go: ['North'],
        Get: ['Peaches', 'Bucket', 'Shovel'],
        Use: ['Peaches']
    },
    page3: { // streamWest
        Look: ['Stream', 'Tree'],
        Go: ['East'],
        Get: ['Key'],
        Use: ['Stream']
    },
    page4: { // wallEast
        Look: ['Moss', 'Ladder'],
        Go: ['West'],
        Use: ['Ladder', 'Key']
    },
    page5: { // cottageNorth
        Look: ['Window'],
        Go: ['South']
        // in the future, Use Axe goes here
    }
}; 

form.addEventListener('submit', function (event) { // submit event is a real thing! it is a property for this function

    let pageId = page.id; // we created page.id using the page variable on line 8 - this is looking for the gamebox div on each page and reacts accordingly to the page nr

    // getting what the user typed and separating into action and search
    let strings = inputField.value.split(' '); // ['look', 'Treestump']
    let action = strings[0]; // action variable is looking for word 1
    let search = strings[1] // search variable is looking for word 2
    let currentPage = pagesOptions[pageId]; // checks the ID on the gamebox div and lets you know which actions work here

    // currentPage[action] === currentPage.look, which is either page1, page2, ...
    let availableOptionsForAction = currentPage[action]; // ['Treestump'] 

    // get .hidden.Look (or .Get / .Go)
    let hiddenText = document.querySelector('.hidden' + '.' + action);

    if (action === 'Look' || action === 'Get' || action === 'Use') {

        if (availableOptionsForAction && availableOptionsForAction.includes(search)) { // ['Treestump'] includes 'Treestump'
            hiddenText.classList.remove('hidden');
        }  else {
            alert('Unknown command, please try again');
        }

    } else if (action === 'Go') {

        if (search === 'North') {
            location.href = page5URL;
        }
        if (search === 'South') {
            location.href = page2URL;
        }
        if (search === 'East') {
            location.href = page4URL;
        }
        if (search === 'West') {
            location.href = page3URL;
        } else {
            alert('Unknown command, please try again');
        }
        

    } else {
        alert('Unknown command, please try again');
    }

    inputField.value = ''; // clears the box once you hit enter
    event.preventDefault(); // Prevents default behavior of the event -  if you don't have this, then when you hit submit it reloads the page
});