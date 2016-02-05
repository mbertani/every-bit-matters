var speedtest = require('speedtest-net');
var test = speedtest();
var fileSystem = require('fs');
var fileName = __dirname + '/history.json';
var history = JSON.parse(fileSystem.readFileSync(fileName));

test.on('data', function (data) {
    var result = {
        download: data.speeds.download,
        upload: data.speeds.upload,
        ping: data.server.ping,
        date: Date.now()
    };

    history.push(result);
    var jsonResult = JSON.stringify(history);
    fileSystem.writeFile(fileName, jsonResult, function (err) {
        if (err) {
            console.log('Something went wrong: ' + err);
        } else {
            console.log('Speedtest finished');
        }    
	});
	//console.log(jsonResult);
});

/*
test.on('downloadprogress', function(progress) {
  console.log('Download progress:', progress);
});

test.on('uploadprogress', function(progress) {
  console.log('Upload progress:', progress);
});
*/
test.on('error', function (err) {
    console.error(err);
});

console.log('This is printed first!');