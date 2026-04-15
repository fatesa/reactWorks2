"use strict";
//변수: 타입
let num = 10;
let season = 'summer';
let seasons = ['spring', 'summer', 'fall', 'winter'];
console.log(seasons[2]); //fall
//student 객체 생성
let student1 = {
    id: 1, // 읽기전용
    name: '김선화',
    subjects: [
        { coursdId: 101, coursName: '수학', grade: 'B' },
        { coursdId: 102, coursName: '영어', grade: 'C' }
    ]
};
console.log(`id:${student1.id}, name: ${student1.name}`);
student1.subjects.forEach(subject => {
    console.log(`과목명: ${subject.coursName}, 학점: ${subject.grade}`);
});
