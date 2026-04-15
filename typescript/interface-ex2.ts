//변수: 타입
let num:number = 10;
let season:string = 'summer';
let seasons:string[] = ['spring','summer','fall', 'winter'];
console.log(seasons[2]); //fall


//학생(object) 정의
interface Student{
    readonly id: number;
    name: string;
    //subject?: string; // ? - 선택 속성
    subjects:Course[]
}

//student 객체 생성
let student1:Student={
    id:1, // 읽기전용
    name: '김선화',
    subjects:[
        {coursdId:101, coursName:'수학', grade:'B'},
        {coursdId:102, coursName:'영어', grade:'C'}
    ]
}

console.log(`id:${student1.id}, name: ${student1.name}`)

type Grade = 'A' | 'B' | 'C' | 'D' | 'F';

//과목 객체 정의
interface Course{
    coursdId:number;
    coursName:string;
    grade?:Grade
}
student1.subjects.forEach(subject => {
    console.log(`과목명: ${subject.coursName}, 학점: ${subject.grade}`);
});

