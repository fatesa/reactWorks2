//객체의 형태 정의 - interface
/*interface Person{
    name : string;
    age : number;
};

let person2: Person = {
    name : "홍길동",
    age : 25
};
console.log(`이름: ${person2.name}, 나이: ${person2.age}`);

let person3 : Person={
    name : "우영우",
    age : 30
};
console.log(`이름: ${person3.name}, 나이: ${person3.age}`);
*/

// ?(선택적 속성을 의미)
// readonly 속성은 변경할 수 없음
interface User{
    readonly id: number; //읽기 전용
    name: string;
    age?: number;
}

let user1: User = {id: 1, name : "김철수"};
let user2: User = {id: 2, name : "이영희", age: 28};
console.log(`이름 : ${user1.name}`);

user2.name = "박상희"; // name 속성은 변경 가능
console.log(`이름 : ${user2.name}, 나이: ${user2.age}`);

user1.id = 3; // 오류: id는 readonly 속성이므로 변경할 수 없다.


