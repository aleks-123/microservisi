//* npm install mongoose
const mongoose = require('mongoose');
//*npm install dotenv
const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../config/config.env` });

exports.init = async () => {
  try {
    await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to database');
  } catch (err) {
    console.log(err);
  }
};
