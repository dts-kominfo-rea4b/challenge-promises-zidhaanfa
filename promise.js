const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async () => {
  const xxi = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();
  const outout = new Promise((resolve) => {
    const hasil = xxi.concat(vgc);
    marah = hasil.filter((item) => item.hasil === "marah").length;
    tidakMarah = hasil.filter((item) => item.hasil === "tidak marah").length;
    resolve('marah: ' + marah + ', tidak marah: ' + tidakMarah);
  });
  return outout;
}
// Masih bingung caranya, hasil sudah keluar
// tapi benar tidaknya belum tahu
module.exports = {
  promiseOutput,
};
