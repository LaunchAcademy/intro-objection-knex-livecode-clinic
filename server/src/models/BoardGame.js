const { modelPaths } = require("./Model.js")
const Model = require("./Model.js")
// es6 version = import Model from "./Model"

class BoardGame extends Model {
  static get tableName() {
    return "boardgames"
  }
}

module.exports = BoardGame
// es6 version = export default BoardGame
