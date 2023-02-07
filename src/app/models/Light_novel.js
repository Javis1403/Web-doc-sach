const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Light_novel = new Schema({
  ten: { type: String, default: "" },
  anh: { type: String, default: "" },
  anhd: { type: String, default: "" },
  theloai: { type: String, default: "" },
  tacgia: { type: String, default: "" },
  tomtat: { type: String, default: "" },
  noidung: { type: String, default: "" },
  slug: { type: String, default: "" },
});

module.exports = mongoose.model("Light_novels", Light_novel);
