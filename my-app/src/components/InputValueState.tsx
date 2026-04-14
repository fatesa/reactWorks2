import { useState } from "react"

const InputValueState = () => {
    const [text, setText] = useState<string>('');
    const [num, setNum] = useState<number>(0);

    //입력값 변경 핸들러 함수
    //event의 타입은 React.ChangeEvent<HTMLInputElement> 
    const handleTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    const handleNumChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setNum(Number(e.target.value));
    }

    return (
        <div>
            <h2>InputValueState</h2>
            <input type="text" 
                placeholder="글자를 입력하세요."
                value = {text}
                onChange={handleTextChange}
                />
            <input type="number" 
                placeholder="숫자를 입력하세요."
                value = {num}
                onChange={handleNumChange}
                />    
            <br />
            <p>입력된 글자 : {text}</p>    
            <p>입력된 숫자 : {num+100}</p>
                
        </div>
    )
}

export default InputValueState