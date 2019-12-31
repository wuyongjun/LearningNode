const crypto = require('crypto');

exports.encrypto = function (origin_password, algorithm = 'md5', type = 'hex') {
	let hash = crypto.createHash(algorithm);
	let password = hash.update(origin_password).digest(type);
	return password;
};