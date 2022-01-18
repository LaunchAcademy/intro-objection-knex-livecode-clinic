const Model = require("./Model.js")

class BoardGame extends Model {
  static get tableName() {
    return "boardgames"
  }
}

module.exports = BoardGame