import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {

    const [title, setTitle] = useState<string>('');
    const navigate = useNavigate();

    //로딩상태 관리
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e:React.FormEvent) =>{
        e.preventDefault();

        //로딩시작
        setIsLoading(true);

        try{
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos',
                    {title, completed: false});
            console.log("할 일 생성 : ", response.data);
            setTitle('');
            alert('할 일이 성공적으로 추가되었습니다.');
            navigate('/');  
        }catch(err){
            console.log("err : ", err);            
        }finally{
            setIsLoading(false); //성공하든 실패하든 네트워크의 로딩을 종료
        }
    }

    return (
        <div>
            <h2>할 일 추가</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value= {title}
                    placeholder="할 일을 입력하세요."
                    onChange={(e) => setTitle(e.target.value)}/>
                <button type='submit' disabled={isLoading}>{isLoading ? '로딩중...' : '추가'}</button>
            </form>
        </div>
    )
}

export default AddTodo