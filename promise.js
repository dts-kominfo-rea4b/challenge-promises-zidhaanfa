const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
// const promiseOutput = async () => {
//   const xxi = await promiseTheaterIXX();
//   const vgc = await promiseTheaterVGC();
//   const outout = new Promise((resolve) => {
//     const hasil = xxi.concat(vgc);
//     marah = hasil.filter((item) => item.hasil === "marah").length;
//     tidakMarah = hasil.filter((item) => item.hasil === "tidak marah").length;
//     console.log(tidakMarah);
//     console.log(marah);
//   });
//   return outout;
// }
const promiseOutput = async (emosi) => {
  const xxi = await promiseTheaterIXX();
  const vgc = await promiseTheaterVGC();
  if(emosi === "marah"){
    const marah = new Promise((resolve) => {
      const hasil = xxi.concat(vgc);
      const marah = hasil.filter((item) => item.hasil === "marah").length;
      resolve(marah);
    })
    return marah;
  }else if(emosi === "tidak marah"){
    const tidakMarah = new Promise((resolve) => {
      const hasil = xxi.concat(vgc);
      const tidakMarah = hasil.filter((item) => item.hasil === "tidak marah").length;
      resolve(tidakMarah);
    })
    return tidakMarah;
  }
}
promiseOutput("tidak marah").then((result) => console.log(result));
promiseOutput("marah").then((result) => console.log(result));
// Masih bingung caranya, hasil sudah keluar
// tapi benar tidaknya belum tahu
module.exports = {
  promiseOutput,
};
