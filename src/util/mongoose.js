const { default: mongoose } = require("mongoose");

module.exports = {
  mutipleMongoesToObject: function (mongoose) {
    return Light_novels.map((Light_novels) => Light_novels.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
