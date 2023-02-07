const Light_novel = require("../models/Light_novel");
//const { mutipleMongoesToObject } = require("../../util");

class SiteController {
  index(req, res, next) {
    Light_novel.find({})
      .then((Light_novels) => {
        Light_novels = Light_novels.map((Light_novels) =>
          Light_novels.toObject()
        );

        res.render("home", {
          Light_novels,
        });
      })
      .catch((error) => next(error));
    //res.render("home");
  }
}

module.exports = new SiteController();
