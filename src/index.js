// const と　letの変数宣言
// var val = "string";
// console.log(val);

// // テンプレート文字列
// const name = "name";
// const age = 28;

// // 従来の方法
// const massage1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(massage1);

// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

// アロー関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(1, 2));

// 分割代入
// const myProfile = {
//   name: "name",
//   age: 1
// };

// const massage1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(massage1);

// const { name, age } = myProfile;
// const massage2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

// const myProfile = ["name", 12];

// const massage3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(massage3);

// const [name, age] = myProfile;

// const massage4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(massage4);

// デフォルト値引数

// const sayHello = (name = "name") => console.log(`今日は${name}さん`);
// sayHello();

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列の結合、コピー
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// mapやfilterを使った配列の処理

const nameArray = ["name", "taro", "toto"];
// const nameArray2 = nameArray.map((name) => {
//   return name;
// });
// console.log(nameArray2);

// nameArray.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArray = [1, 2, 3, 4, 5];
// const newNumArray = numArray.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArray);

// const newNameArray = nameArray.map((name) => {
//   if (name === "name") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
const newNameArray = nameArray.filter((name) => {
  return name === "name";
});
console.log(newNameArray);
