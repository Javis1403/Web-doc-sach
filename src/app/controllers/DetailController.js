const Light_novel = require("../models/Light_novel");
const { mongooseToObject } = require("../../util/mongoose");

class DetailController {
  index(req, res, next) {
    //res.send(req.params.slug);
    Light_novel.findOne({ slug: req.params.slug })
      .then((Light_novel) =>
        res.render("detail", { Light_novels: mongooseToObject(Light_novel) })
      )
      .catch(next);
    //res.render("detail");
  }

  create(req, res, next) {
    res.render("create");
  }

  store(req, res, next) {
    const light_novel = new Light_novel(req.body);
    light_novel
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new DetailController();
