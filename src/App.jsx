import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import SignUp from './SignUp.jsx'
import { useNavigate } from 'react-router-dom';  // Make sure you have installed react-router-dom
import HomePage from './HomePage.jsx'
import './App.css'  // Make sure you have imported the CSS file in your App.jsx file
import './TodoList.css'







const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />



        <Route path="/LudoBoard" element={<LudoBoard />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      {/* <LudoBoard />
      <TodoList /> */}
    </Router>





  )
}

export default App
