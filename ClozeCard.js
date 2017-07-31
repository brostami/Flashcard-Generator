var BasicCard = require('./BasicCard.js');
var fs = require('fs');

var ClozeCard = function (text, cloze) {
    this.cloze = cloze;
    this.partial = text.split(cloze).pop(); 
    this.fullText = text;
    this.createCard = function() {
        if (!text.search(this.partial)) {
            console.log("Error: Cloze deletion does not appear in input text");
        }
        else {
            var newFlashcard = new BasicCard(this.partial, this.cloze);
            var object = {
                table: []
            };
            object.table.push({front: newFlashcard.front, back: newFlashcard.back});
            console.log("Object Front: " + object.table[0].front);
            console.log('Object Back: ' + object.table[0].back);
            var json = JSON.stringify(object.table);
            fs.appendFile('flashcards.json', json + ',', function (err) {
                if (err) console.log(err);
                console.log('Flash Card Saved!');
            });
        }
    };
};

var myCard = new ClozeCard('Cats are the best.', 'Cats');
var myCard2 = new ClozeCard('Pepper is a good girl.', 'Pepper');
// console.log('myCard Q: ' + myCard.partial);
// console.log('myCard A: ' + myCard.cloze);
myCard.createCard();
myCard2.createCard();
fs.readFile('flashcards.json', function(err, data) {
    if (err) console.log(err);
    console.log("JSON data: " + data);
});

module.exports = ClozeCard;