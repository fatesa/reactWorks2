import { useState } from "react"

const Counter = () => {
    //<T> : 실행 중에 타입을 결정(제네릭 표현법)
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h2>Counter</h2>
            <p>현재 카운트 : {count}</p>
            <button onClick={()=>{setCount(count+1)}}>증가</button>{' '}
            <button onClick={()=>{setCount(count-1)}}>감소</button>{' '}
            <button onClick={()=>{setCount(0)}}>초기화</button>
        </div>
    )
}

export default Counter