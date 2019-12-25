// 掌握的模块数量和使用模块的熟练程度很重要。
const crypto = require('crypto');

let md5 = crypto.createHash('md5');

md5.update('123456');

console.log(md5.digest('hex'));