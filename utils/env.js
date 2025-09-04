const dotenv = require('dotenv');
dotenv.config({ path: `.env.${process.env.ENV || 'qa'}` });
module.exports = dotenv;
