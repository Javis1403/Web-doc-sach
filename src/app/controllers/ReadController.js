const Light_novel = require("../models/Light_novel");
const { mongooseToObject } = require("../../util/mongoose");

class DetailController {
  index(req, res, next) {
    //res.send(req.params.slug);
    Light_novel.findOne({ slug: req.params.slug })
      .then((Light_novel) =>
        res.render("read", { Light_novels: mongooseToObject(Light_novel) })
      )
      .catch(next);
  }

  read(req, res, next) {
    Light_novel.findOne({ slug: req.params.slug })
      .then((Light_novel) =>
        res.render("read", { Light_novels: mongooseToObject(Light_novel) })
      )
      .catch(next);
  }
}

module.exports = new DetailController();
