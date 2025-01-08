// import React from 'react';
// import { useNavigate } from 'react-router-dom';  // Make sure you have installed react-router-dom

// // import { useNavigate } from 'react-router-dom';
// // const navigateTo = useNavigate();
// // navigateTo('/your-page')


// const HomePage = () => {
//     const navigateTo = useNavigate();

//     // Handle navigation
//     const navigateToTodoList = () => {
//         navigateTo.push('./TodoList');
//     };

//     const navigateToSignUp = () => {
//         navigateTo.push('./SignUp');
//     };

//     return (
//         <div className="container text-center mt-5">
//             <h1>Welcome to the Task Manager App</h1>
//             <p>Choose an option below to get started:</p>

//             <div className="btn-group mt-4">
//                 <button className="btn btn-primary" onClick={navigateToTodoList}>
//                     To-Do List
//                 </button>
//                 <button className="btn btn-success" onClick={navigateToSignUp}>
//                     Sign Up
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default HomePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './HomePage.css';  // Import the custom CSS for styling

const HomePage = () => {
    const navigate = useNavigate();  // Initialize useNavigate

    // Handle navigation
    const navigateToTodoList = () => {
        navigate('/TodoList');
    };

    const navigateToSignUp = () => {
        navigate('/SignUp');
    };

    const navigateToLudoBoard = () => {
        navigate('/LudoBoard');
    };

    return (
        <div className="home-container">
            <div className="overlay">
                <h1 className="title">Task Manager App</h1>
                <p className="subtitle">Manage your tasks efficiently</p>

                <div className="button-group">
                    <button className="btn btn-lg btn-primary animated-button" onClick={navigateToTodoList}>
                        To-Do List
                    </button>

                    <button className="btn btn-lg btn-warning animated-button" onClick={navigateToLudoBoard}>
                        LudoBoard
                    </button>

                    <button className="btn btn-lg btn-success animated-button" onClick={navigateToSignUp}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
