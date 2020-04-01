
const IncomingForm = require('formidable').IncomingForm
const fs = require('fs');
var processing = require('./utils/processing.js');

module.exports = function upload(req, res) {

const form = new IncomingForm()
let html_processed_text;


form.on('file', (field, file) => {
    // Get text from the file object
    let data = fs.readFileSync(file.path, 'utf8');
    
    // Split into array for later use
    original_text_array = data.split(" ");

    // Remove dots etc
    data = processing.cleaningText(data);
    
    // Split text into array
    let array_words = data.split(" ");

    // Find the most frequent word
    top_word = processing.findTopWord(array_words);

    // Wrap the most frequent word in 'foo' and 'bar'
    foobar = 'foo'.concat(top_word, 'bar');

    // Put the new word into the old array
    original_text_array = processing.getProcessedText(top_word, original_text_array)

    // Turn back to string
    processed_text = original_text_array.join(" ");
    
    // At least it works!
    console.log(processed_text);

    // Different attempts on sending the text
    // res.send(processed_text);
    // Converting to html for send-off
    // html_processed_text = '<p>'.concat(processed_text, '</p>');
    // res.send(html_processed_text);
})



form.on('end', () => {
    res.json()
    // I've also tried putting the res.send attempts here...
})

form.parse(req)



}

