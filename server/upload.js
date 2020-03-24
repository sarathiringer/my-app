
const IncomingForm = require('formidable').IncomingForm

module.exports = function upload(req, res) {

var form = new IncomingForm()



form.on('file', (field, file) => {
    // Do something with the file
    // you can access it using file.path
    var fs = require('fs');


})

form.on('end', () => {
    res.json()
})

form.parse(req)

}

