var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

// Basic Card
var newCard = new BasicCard('Who was the first President of the United States?', 'George Washington');
// newCard.createCard();

// Cloze card
var newCard2 = new ClozeCard('George Washington was the first President of the United States.', 'George Washington');
newCard2.createCard();

// Cloze card error
var newCard3 = new ClozeCard('George Washington was the first President of the United States', 'Andrew Jackson');
newCard3.createCard();

// Show flash cards stored in JSON file
function showFlashcards() {
    fs.readFile('flashcards.json', function(err, data) {
        if (err) console.log(err);
        console.log("JSON data: " + data);
    });
}