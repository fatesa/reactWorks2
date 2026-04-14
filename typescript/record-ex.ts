// Record<K,T> -> 유틸리티 타입
// K - keys(키, 속성), T - type

type StringMap = Record<string, string>

const translations:StringMap = {
    hello: '안녕하세요',
    goodbye: '안녕히 가세요'
};


//출력
console.log(translations.hello); // 안녕하세요 
console.log(translations.goodbye); //안녕히 가세요

type fruit = 'apple' | 'banana' | 'orange';

const prices:Record<fruit, number>={
    apple : 1000,
    banana : 500,
    orange : 2000
};

console.log(`사과 가격 : ${prices.apple}`);
console.log(`바나나 가격 : ${prices.banana}`);
console.log(`오렌지 가격 : ${prices.orange}`);

//for(변수 in 객체){}
for(const fruit in prices){
    console.log(`${fruit} : ${prices[fruit as fruit]}`);
    
}

