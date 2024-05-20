// spread operators
// 설명 기본에 있던 유저에 뉴 유저를 넣은것? 그렇다고 해서 기존에 있던 유저가 바뀌지않는다
// const user = {
//   name: "르탄이",
// };

// const newUser = { ...user };
// newUser.name = "르순이";
// console.log(user);
// console.log(newUser);

// const first = [1, 2, 3];
// const second = [4, 5, 6];

// const plusNumber = [...first, ...second];
// console.log(plusNumber);

// const obj1 = { name: "르탄이", age: 25 };
// const obj2 = { name: "르순이", email: "ydw8088@naver.com" };

// const mrgedobject = { ...obj1, ...obj2 };
// mrgedobject.name = "원장님";
// console.log(obj1);
// console.log(obj2);
// const socre = 50;

// const grad = socre <= 60 ? "c" : "d";
// console.log(grad);

const myPromise = new Promise(function (a, b) {
  if (false) {
    a("성공");
  } else {
    b("실패");
  }
});
myPromise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (value) {
    console.log(value);
  });
