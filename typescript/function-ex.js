"use strict";
//함수의 매개변수 타입
//함수의 형태 - return 이 있는 함수, return 이 없는 함수
//return이 있는 함수
/*
function add(x:number, y:number){
    return x + y;
}
*/
const add = (x, y) => {
    return x + y;
};
//함수 호출
const sum = add(5.5, 10);
console.log(`합계: ${sum}`);
//return 이 없는 함수 - 반환값이 없음(void)
const greet = (name) => {
    console.log(`Hello, ${name}!`);
};
greet("TypeScript");
//객체를 반환하는 함수
const createUser = (id, name) => {
    return { id, name };
};
//createUser 함수는 id와 name을 받아서 User 객체를 반환
const user1 = createUser(1, "Alice");
console.log(`사용자 ID: ${user1.id}, 이름: ${user1.name}`);
const multiply = (a, b) => a * b;
const value1 = multiply(5, 10);
console.log(`곱: ${value1}`);
const divide = (a, b) => a / b;
const value2 = divide(1000, 2.5);
console.log(`나누기: ${value2}`);
