
// function sum(arr){
//     return arr.reduce((sum, e) => {
//         console.log(`sum:${sum + e}`);
//         return sum + e;
//     }, 0)
// }

// const calcNum = (func, numArr) => {
//     console.log(numArr)
//     return func(numArr);
// }

// console.log(calcNum(sum, [1, 2, 3, 4, 5]));

// const myProfile = {
//     name: 'Westa',
//     age: 200
// }

// const message1 = `私の名前は${myProfile.name}です．年齢は${myProfile.age}歳です．`
// console.log(message1)

// const { name, age } = myProfile
// const message2 = `私の名前は${name}です．年齢は${age}歳です．`
// console.log(message2)

// const myProfile = ["Westa", 200];

// const [name, age] = myProfile;

// const message3 = `私の名前は${name}です．年齢は${age}歳です．`
// console.log(message3)

// const sayHello = (Name = "デフォルト値") => console.log(`こんにちは！${Name}さん！`);
// sayHello("Westa");

// const myProfile = {
//     age: 200
// };
// const { age = 200, name = "デフォルト値" } = myProfile;
// console.log(age);
// console.log(name);

// const name = "Westa";
// const age = 200;

// const myProfile = {
//     name: name,
//     age: age
// };

// console.log(myProfile);

// const name = "Westa";
// const age = 200;

// const myProfile = {
//     name,
//     age
// };
// console.log(myProfile);

// const arr1 = [1, 2, 3];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];


// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // arr7[1] = 15;

// console.log(arr7);