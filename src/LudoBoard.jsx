import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const LudoBoard = () => {
  const [scores, setScores] = useState({ success: 0, warning: 0, info: 0, primary: 0 });


  const [isLiked, setIsLiked] = useState(false);
  const handleISLinkedBlue = () => {
    console.log("Blue Handle is Linked");
    setIsLiked(!isLiked);
  };

  const handleISLinkedGreen = () => {
    console.log("Green Handle is Linked");
    setIsLiked(!isLiked);
  };

  const handleISLinkedRed = () => {
    console.log("Red Handle is Linked");
    setIsLiked(!isLiked);
  };

  const handleISLinkedprimary = () => {
    console.log("dark blue Handle is Linked");
    setIsLiked(!isLiked);
  };

  const handleIncrement = (color) => {
    setScores((prevScores) => ({ ...prevScores, [color]: prevScores[color] + 1 }));
  };



  return (

    <center>
      <div>
        <h2>welcome to ludoBoard</h2>

        <h2>   <i class="fa-sharp fa-solid fa-heart"></i> </h2>

        <h6>green : {scores.success}</h6>
        <button className="btn btn-success" onClick={() => {
          handleIncrement('success');
          handleISLinkedGreen();
        }}>+1</button>

        <h6>yellow : {scores.warning}</h6>
        <button className="btn btn-warning" onClick={() => {
          handleIncrement('warning');
          handleISLinkeyellow();
        }}>+1</button>

        <h6>blue : {scores.info}</h6>
        <button className="btn btn-info" onClick={() => {
          handleIncrement('info');
          handleISLinkedinfo();
        }}>+1</button>

        <h6>Blue : {scores.primary}</h6>
        <button className="btn btn-primary" onClick={() => {
          handleIncrement('primary');
          handleISLinkedprimary();
        }}>+1</button>

      </div>
    </center>
  )
}


export default LudoBoard;
