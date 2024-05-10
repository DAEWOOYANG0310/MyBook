// function testfunction() {
//   const test = "hello world";
//   if (true) {
//     const test = "world hello";
//   }
//   console.log(test);
// }
// testfunction();
//

// const user = {
//   name: "르탄이",
//   age: 30,
//   Admin: true,
// };

// const userDetail = {
//   직업: "개발자",
//   gender: "남자",
// };

// const 직업 = Object.assign(user, userDetail);
// console.log(직업);

// const fruits = ["apple", "banana"];
// console.log(fruits);
// fruits.push("orange");
// console.log(fruits);

// const lastFruits = fruits.pop();
// console.log("-------");
// console.log(lastFruits);
// console.log(fruits);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squerd = numbers.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(squerd);

// const 동영상리스트 = [
//   { 이름: "동1", 아이디: 2, 이미지: "img111111" },
//   { 이름: "동2", 아이디: 3, 이미지: "img111111" },
//   { 이름: "동3", 아이디: 4, 이미지: "img111111" },
//   { 이름: "동4", 아이디: 5, 이미지: "img111111" },
// ];

// const 필터링된동영상 = 동영상리스트.filter(function (영상) {
//   return 영상.아이디 === 4;
// });

// console.log(필터링된동영상);

////////////////////////////////////////////////////
// reduce
// const numbers = [1, 2, 3, true, 5, 6, 12312, 3, "안녕"];

// const result = numbers.reduce(function (입력된값, 누적된값) {
//   return 입력된값 + 누적된값;
// });

// console.log("result=>" + result);

///////////////////////////
//sort

// const fruits = ["banana", "apple", "mango", "cherry"];
// console.log(fruits);
// const asd = fruits.sort();
// console.log(asd);

// const numbers = [1, 300, 23, 56, 200];

// numbers.sort(function (a, b) {
//   console.log(b);
//   return a - b;
// });
////////////////////////////////////////
// 템플릿 리터널스

// console.log(
//   "감사합니다 " +
//     customer.name +
//     " 님 " +
//     item.name +
//     " " +
//     item.price +
//     "원 입니다."
// );

// console.log(
//   `감사합니다! ${customer.name}님 ${item.name}를 ${item.price}원에 구매하셨습니다`
// );

// const orderDetails =
//   "고객:" +
//   customer.name +
//   "\n" +
//   "상품:" +
//   item.name +
//   "\n" +
//   "가격:" +
//   item.price;
// console.log(orderDetails);

// const orderDetails = `
// 고객 : ${customer.name}
// 상품 : ${item.name}
// 가격 : ${item.price}`;

// console.log(orderDetails);
// const customer = {
//   name: "르탄이",
// };
// //destructuring
// const item = {
//   name: "커피",
//   price: "4000",
// };
// const { name, price } = item;

// console.log("name=>" + name);
// console.log("price=>" + price);

// function greet({ name, age }) {
//   console.log(`안녕 나는 ${name} 이고 나이는 ${age} 이야`);
// }

// const person = {
//   name: "르순이",
//   age: 32,
// };

// greet(person);
// const numbers = [10, 20, 30, 40, 50];
// const [first, , third, , ,] = numbers;

// console.log(first);
// console.log(third);

function confirmReservation(user) {
  const { name, rommType, date: firstDate } = user;
  return `${name} 고객님의 ${rommType}룸 입실날짜는 ${firstDate} 입니다.`;
}

const userInfo = {
  name: "james",
  rommType: "Deluxe",
  date: "2023-05-30",
};
const result = confirmReservation(userInfo);
console.log(result);
