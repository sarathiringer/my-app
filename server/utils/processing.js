

const cleaningText = (data) => {
    data = data.replace(",", "");
    data = data.replace(".", "");
    data = data.replace("\\n", "");

    for (i = 0; i < 20; i++){
        data = data.replace("\\n".concat(i), "");
    };

    data = data.toLowerCase();
    return data;
}

const findTopWord = (array_words) => {
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

return top_word;

}


const getProcessedText = (top_word, original_text_array) => {
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

    return original_text_array;

};
