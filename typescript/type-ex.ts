type MemberRole = "admin" | "user";

// type 객체 정의
type Member = {
    id : number;
    name : string;
    age : number;
    role: MemberRole; // 객체가 객체 참조
};

// type 객체 사용
const member1: Member = {
    id : 1,
    name : "우영우",
    age : 30,
    role : "user"
};

const member2: Member = {
    id : 2,
    name : "김철수",
    age : 35,
    role : "admin"
};

console.log(`회원1: ${member1.name}, 나이: ${member1.age}, \권한: ${member1.role}`);
console.log(`회원2: ${member2.name}, 나이: ${member2.age}, \권한: ${member2.role}`);
