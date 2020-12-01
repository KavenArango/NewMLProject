path = require('path')
const openBtn = document.getElementById('files')

openBtn.addEventListener('click', function (event) {
    shell.openPath(path.join(__dirname, '../JNotebook'))
    console.log("clicked me")
})