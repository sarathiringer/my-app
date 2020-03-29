
const IncomingForm = require('formidable').IncomingForm
const fs = require('fs');
const { cleaningText } = require('./utils/processing.js');
const { findTopWord } = require('./utils/processing.js');
const { getProcessedText } = require('./utils/processing.js');


module.exports = function upload(req, res) {

const form = new IncomingForm()


form.on('file', (field, file) => {
    // Get text from the file object
    let data = fs.readFileSync(file.path, 'utf8')
    
    // Split into array for later use
    original_text_array = data.split(" ");

    // Remove dots etc
    data = cleaningText(data);
    
    // Split text into array
    let array_words = data.split(" ");

    // Find the most frequent word
    top_word = findTopWord(array_words);

    // Wrap the most frequent word in 'foo' and 'bar'
    foobar = 'foo'.concat(top_word, 'bar');
    console.log(foobar);

    // Put the new word into the old array
    original_text_array = getProcessedText(top_word, original_text_array)

    // Turn back to string
    let processed_text = original_text_array.join(" ");
    
    
    console.log(processed_text);

    res.send(processed_text);

})



form.on('end', () => {
    res.json()
})

form.parse(req)

}

