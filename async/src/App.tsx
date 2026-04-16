
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Todos from './todos/Todos'
import TodoDetail from './todos/TodoDetail'
import AddTodo from './todos/AddTodo'

function App() {

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Todos />} />
            <Route path="/todos/:id" element={<TodoDetail />} />
            <Route path="/todos/add" element={<AddTodo />} />
          </Routes>
        </BrowserRouter>
        
      </section>

    </>
  )
}

export default App
