import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export interface Todo{
    id:number;
    title:string;
    completed:boolean;
}

const Todos = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
/*
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(err => console.log(err));
    },[]);
*/
    useEffect(() => {
        const fetchTodos = async() => {
            //try{실행문} catch(err){오류 처리 메시지}
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodos(response.data);
            }catch(err){
                console.log("오류가 발생했습니다. => ", err);
            }
        }
        // 함수 호출
        fetchTodos();
    },[]);

    return (
        <div>
            <h2>할 일 목록</h2>
            <ul>
                {todos.map(todo=>(
                    <li key={todo.id}>
                       <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}                
            </ul>
        </div>
    )
}

export default Todos