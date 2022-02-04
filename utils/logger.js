/*Object Spread ...
Object spread ominaisuus kopio olion uudeksi vanhoilla arvoilla,
josta tarvitsee päivittää vain muuttuneet kentät.*/

// Object spread (...) välittää kaikki params-parametrin kentät nuolifunktion parametreiksi.
const info = (...params) => {
  console.log(...params)
}

const error = (...params) => {
  console.error(...params)
}

module.exports = {
  info, error
}