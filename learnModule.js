var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {
	var extension = '.' + ext;
	fs.readdir(dir, function(err, lines) {
		if (err) {
			callback(err, null);
		}
		else {
			results = [];
			lines.forEach(function(file) {
				if (path.extname(file) === extension) {
					results.push(file);
				}
			});
			callback(null, results);
		}
	});
};