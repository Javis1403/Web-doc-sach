const detailRouter = require("./detail");
const managerRouter = require("./manager");
const siteRouter = require("./site");
const readRouter = require("./read");

function route(app) {
  app.use("/read", readRouter);
  app.use("/manager", managerRouter);
  app.use("/detail", detailRouter);
  app.use("/", siteRouter);
}

module.exports = route;
