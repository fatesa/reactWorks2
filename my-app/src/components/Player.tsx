/*
const Player = ({player}:
    {player:{name:string;age:number}}) => {
    return (
        <div>
            <h2>운동선수</h2>        
            <p>이름: {player.name}</p>
            <p>나이: {player.age}</p>
        </div>
    )
}
*/

type PlayerProps ={
    player:{
        name:string;
        age:number
    };
    clickHandler:()=>void
}

const Player = ({player, clickHandler}:PlayerProps) => {
    return (
        <div>
            <h2>운동선수</h2>        
            <p>이름: {player.name}</p>
            <p>나이: {player.age}</p>
            <button onClick={clickHandler}>클릭</button>
        </div>
    )
}
export default Player