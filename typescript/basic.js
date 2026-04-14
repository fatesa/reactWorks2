"use strict";
//문자열 
let message = "Hello, World";
console.log(message);
//숫자
let age = 30;
console.log(`나이: ${age}세`);
//불리언
let isStudent = true;
console.log(`학생인가요? ${isStudent}`);
//배열1. string[]
let carts = ["사과", "바나나", "오렌지"];
console.log(`장바구니: ${carts.join(", ")}`);
//배열2. Array<string>
//<T> - 제네릭(generic) 표기
let carts2 = ["사과", "바나나", "오렌지"];
console.log(`장바구니2: ${carts2.join(", ")}`);
//any - 모든 타입 환영
let value = 10;
value = "hahahah";
value = true;
console.log(`val : ${value}`);
