// con mèo cần 3s để uống nước
// function uong_nuoc() {
//   setTimeout(() => {
//     console.log("uống nước");
//   }, 3000);
// }

// // con mèo ăn cơm
// function an_com() {
//   console.log("Ăn cơm");
// }

// uong_nuoc();
// an_com();

// function uong_nuoc(sen_cua_meo) {
//   setTimeout(() => {
//     console.log("uống nước");
//     sen_cua_meo(); // lúc sen nhận ra là mèo đã uống nước xong
//   }, 3000);
// }

// // con mèo ăn cơm
// function an_com() {
//   console.log("Ăn cơm");
// }

// // sen đứng cạnh đợi mèo ăn xong rồi đưa khay cơm
// var sen_cua_meo = function () {
//   an_com();
// };

// uong_nuoc(sen_cua_meo);

// promise

// function hua_cho_vui() {
//     return Promise((thuc_hien_loi_hua, that_hua) => {
//         // Sau khi thi đại học xong
//         // Nếu điểm bạn cao
//         if (diem_cao) {
//             // Lúc này trạng thái lời hứa là fulfilled
//             thuc_hien_loi_hua("1000$");
//         } else {
//             // Lúc này trạng thái của lời hứa là rejected
//             that_hua("1$")
//         }
//     });
// }

// // Khi vừa được khởi tạo xong, trạng thái của promise sẽ là pendding
// // Mẹ vừa hứa với bạn xong, đang chờ điểm thi đại học của bạn
// var promise = hua_cho_vui();
// promise
//     .then((li_xi_nhieu) => {
//         ...
//     })
//     .catch((li_xi_it) => {
//         ...
//  });

// const getTodo = async () => {
//   //   let data = await fetch("https://gorest.co.in/public/v2/users");
//   //   console.log(">>> get data :", data);
//   let response = await fetch("https://gorest.co.in/public/v2/users");
//   let data = await response.json();
//   console.log(">>> get data :", data);
// };

// console.log(getTodo());

// const getTodo = async () => {
//   //   let data = await fetch("https://gorest.co.in/public/v2/users");
//   //   console.log(">>> get data :", data);
//   let response = await fetch("https://gorest.co.in/public/v2/users");
//   let data = await response.json();
//   return data;
// };

// getTodo().then((data) => {
//   console.log(">>> check promise:", data);
// });
