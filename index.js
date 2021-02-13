const validator = require('validator')

const MATCH_COLON_OR_COMMA_SURROUNDED_BY_STRINGS = /\s*(?:[;,])\s*/

function splitTextOnCommasAndSemicolons(text) {
  return text.split(MATCH_COLON_OR_COMMA_SURROUNDED_BY_STRINGS).map(word => word.trim())
}

function isEmailList(emails) {
  return emails
    .split(MATCH_COLON_OR_COMMA_SURROUNDED_BY_STRINGS)
    .map(word => word.trim())
    .map(word => validator.isEmail(word))
    .every(isEmail => isEmail)
}

module.exports = {
  isEmailList,
  splitTextOnCommasAndSemicolons
}
