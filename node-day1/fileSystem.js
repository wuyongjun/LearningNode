const fs = require('fs');

fs.readFile('./src/index.js', function (err, buffer) {
	if (err) {
		console.log('read file failed!');
	} else {
		console.log(buffer.toString());
		let source = buffer.toString();
		let dest = source.replace(/let/g, 'var');
		fs.writeFile('bundle.js', dest, function (err) {
			if (err) {
				console.log('write file failed');
			} else {
				console.log('write file success')
			}
		});
	}
});