
const IncomingForm = require('formidable').IncomingForm
const fs = require('fs');
module.exports = function upload(req, res) {

const form = new IncomingForm()


form.on('file', (field, file) => {
    // Get text from the file object
    let data = fs.readFileSync(file.path, 'utf8')
    
    // Split into array for later use
    original_text_array = data.split(" ");

    // Remove dots, commas and newline + maks small letters
    data = data.replace(",", "");
    data = data.replace(".", "");
    data = data.replace("\\n", "");

    for (i = 0; i < 20; i++){
        data = data.replace("\\n".concat(i));
    };

    data = data.toLowerCase();
    
    // Split text into array
    let array_words = data.split(" ");

    // Find the most frequent word
    let top_word;
    let comparison = -1;
    let count = {};

    for (let i = 0; i < array_words.length; i++){
        
        if (count[array_words[i]] === undefined){
            count[array_words[i]] = 0;
        } else {
            count[array_words[i]]++;
        };

        if (count[array_words[i]] > comparison){
            comparison = count[array_words[i]];
            top_word = array_words[i]
        };
    };

    // Wrap the most frequent word in 'foo' and 'bar'
    foobar = 'foo'.concat(top_word, 'bar');
    console.log(foobar);

    // Put the new word into the old array
    let top_word_capital = top_word.charAt(0).toUpperCase();

    for (let i = 0; i < original_text_array.length; i++){
        if (original_text_array[i] === top_word){
            original_text_array[i] = foobar;
        } else if (original_text_array[i] === top_word.concat(",")){
            original_text_array[i] = foobar.concat(",");
        } else if (original_text_array[i] === top_word.concate(".")){
            original_text_array[i] = foobar.concat(".");
        } else if (original_text_array[i].includes("\\n") && original_text_array[i].includes(top_word)){
            let nr = original_text_array[i].slice(-1);
            original_text_array[i] = foobar.concat("\\n", nr);
        } else if (original_text_array[i] === top_word_capital){
            original_text_array[i] = foobar;
        } else if (original_text_array[i] === top_word_capital.concat(",")){
            original_text_array[i] = foobar.concat(",");
        } else if (original_text_array[i] === top_word_capital.concate(".")){
            original_text_array[i] = foobar.concat(".");
        } else if (original_text_array[i].includes("\\n") && original_text_array[i].includes(top_word_capital)){
            let nr = original_text_array[i].slice(-1);
            original_text_array[i] = foobar.concat("\\n", nr);
        }
    };

    // Turn back to string
    let processed_text = original_text_array.join(" ");


})



form.on('end', () => {
    res.json()
})

form.parse(req)

}

