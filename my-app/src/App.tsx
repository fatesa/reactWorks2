import './App.css'
import Greet from './components/Greet'
import Player from './components/Player'

function App() {
  const playerObj = {
    name: '신유빈',
    age: 22
  }

  const clickHandler = () =>{
    alert("안녕하세요");
  }
  return (
    <>
      <section id="center">
        <h2>타입스크립트 기반 React</h2>
        <Greet name="Typescript" />
        <Player player={playerObj} clickHandler={clickHandler}/>

      </section>
    </>
  )
}

export default App
