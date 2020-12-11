path = require('path')
const basicsBtn = document.getElementById('basicsFolder')
const regressionBtn = document.getElementById('regressionFolder')
const classificationBtn = document.getElementById('classificationFolder')
const unsupervisedBtn = document.getElementById('unsupervisedFolder')
const advancedBtn = document.getElementById('advancedFolder')
const devBtn = document.getElementById('devFolder')
const csvBtn = document.getElementById('csvFolder')


basicsBtn.addEventListener('click', function (event) {
    shell.openPath(path.join(__dirname, '../JNotebook/The_basics/'))
})

regressionBtn.addEventListener('click', function (event) {
    shell.openPath(path.join(__dirname, '../JNotebook/Supervised_Learning/Regression/'))
})

classificationBtn.addEventListener('click', function (event) {
    shell.openPath(path.join(__dirname, '../JNotebook/Supervised_Learning/Classification/'))
})

unsupervisedBtn.addEventListener('click', function (event) {
    shell.openPath(path.join(__dirname, '../JNotebook/Unsupervised_Learning/'))
})

advancedBtn.addEventListener('click', function (event) {
    shell.openPath(path.join(__dirname, '../JNotebook/Advanced_Topics/'))
})

devBtn.addEventListener('click', function (event) {
    shell.openPath(path.join(__dirname, '../JNotebook/Development/'))
})

csvBtn.addEventListener('click', function (event) {
    shell.openPath(path.join(__dirname, '../JNotebook/CSV/'))
})