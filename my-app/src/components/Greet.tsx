
// Props 데이터 전달 {} : 타입
const Greet = ({name}:{name:string}) => {
    return <h2>Hello, {name}</h2>
}

export default Greet