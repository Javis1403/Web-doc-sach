const Light_novel = require("../models/Light_novel");
//const { mutipleMongoesToObject } = require("../../util");
const { mongooseToObject } = require("../../util/mongoose");

class ManagerController {
  stored(req, res, next) {
    Light_novel.find({})
      .then((Light_novels) => {
        Light_novels = Light_novels.map((Light_novels) =>
          Light_novels.toObject()
        );

        res.render("manager", {
          Light_novels,
        });
      })
      .catch((error) => next(error));
  }
  edit(req, res, next) {
    Light_novel.findById(req.params.id)
      .then((Light_novel) =>
        res.render("edit", { Light_novels: mongooseToObject(Light_novel) })
      )
      .catch(next);
  }
  delete(req, res, next) {
    Light_novel.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new ManagerController();
