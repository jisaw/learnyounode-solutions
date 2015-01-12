var fs = require('fs');
fs.readFile(process.argv[2], function getNewLines (err, data) {
	var newLines = data.toString().split("\n").length -1;
	console.log(newLines);
});