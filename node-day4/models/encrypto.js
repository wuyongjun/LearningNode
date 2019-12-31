const crypto = require('crypto');

exports.md5 = function (origin_password, type = 'hex') {
	let hash = crypto.createHash('md5');
	let password = hash.update(origin_password).digest(type);
	return password;
};