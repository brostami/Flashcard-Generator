var BasicCard = require('./BasicCard.js');
var fs = require('fs');

var ClozeCard = function (text, cloze) {
    this.cloze = cloze;
    this.partial = text.split(cloze).pop(); 
    this.fullText = text;
    this.createCard = function() {
        if (!text.search(this.partial)) {
            console.log("Error: Cloze deletion does not appear in input text");
            console.log('\n-----------------------\n')
        }
        else {
            console.log('Full Text: ' + this.fullText);
            var newFlashcard = new BasicCard(this.partial, this.cloze);
            var object = {
                table: []
            };
            object.table.push({front: newFlashcard.front, back: newFlashcard.back});
            var json = JSON.stringify(object.table);
            // Store in a JSON file
            fs.appendFile('flashcards.json', json + ',', function (err) {
                if (err) console.log(err);
                // console.log('Flash Card Saved!');
            });
        }
    };
};

module.exports = ClozeCard;