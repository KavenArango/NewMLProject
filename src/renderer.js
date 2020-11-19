


function sendToPython() {
    // var { PythonShell } = require('python-shell');

    // let options = {
    //     mode: 'text',
    //     // args: [input.value]
    // };

    // console.log("HERE");
    // PythonShell.run('./Python/mkvenv.py', function (err, results) {
    //     if (err) throw err;
    //     // results is an array consisting of messages collected during execution
    //     console.log('results: ', results);
    //     // result.textContent = results[0];
    // });
}



makevenv.addEventListener('click', () => {
    sendToPython();
});


makevenv.dispatchEvent(new Event('click'));

