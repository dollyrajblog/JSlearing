// let ss = "";
// for (let i = 0; i < 5; i++) {
//   ss += "*";
//   for (let j = 0; j < 5; j++) {
//     if (i == 0 || i == 4) {
//       ss += "*";
//     } else if ((j == 4) & (i != 0)) {
//       ss += "*";
//     } else {
//       ss += " ";
//     }
//   }
//   console.log(ss);
//   ss = "";
// }

// let ss = "";
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (i == 0 || i == 4 || j == 0 || j == 4) {
//       ss += "*";
//     } else if ((i == 1 || i == 3) & (j == 3 || j == 1)) {
//       ss += "*";
//     } else if ((i == 2) & (j == 2)) {
//       ss += "*";
//     } else {
//       ss += " ";
//     }
//   }
//   console.log(ss);
//   ss = "";
// }

// let wave = "";
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j < 10; j++) {
//     // wave += "*";
//     if ((i == 1) & (j % 2 == 0)) {
//       //   console.log("===>", j % 2);
//       wave += "*";
//     } else if ((i >= 2) & (j % 2 != 0)) {
//       wave += "*";
//     } else {
//       wave += " ";
//     }
//   }
//   console.log(wave);
//   wave = "";
// }
// let rect = "";
// for (i = 1; i <= 5; i++) {
//   for (j = 1; j <= 5; j++) {
//     if ((i == 1 || i == 5) & (j == 3)) {
//       rect += "*";
//     } else if ((i == 2 || i == 4) & (j == 2 || j == 4)) {
//       rect += "*";
//     }
//     else if ((i == 3) & (j == 1 || j == 5)) {
//       rect += "*";
//     } else {
//       rect +=" ";
//     }
//   }
//   console.log(rect);
//   rect="";
// }
let rect = "";
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    if (j == 3 || i == 3) {
      rect += "*";
    } else if ((j == 2 || j == 4) & (i == 2 || i == 4)) {
      rect += "*";
    } else {
      rect += " ";
    }
  }
  console.log(rect);
  rect = "";
}
