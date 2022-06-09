import './App.css';
import React from 'react';
import Main from './components/main';
import SignUp from './components/signup';
import Login from './components/login';
import Write from './components/writepage';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loadPostFB } from "./redux/modules/post";


function App() {

  const dispatch = useDispatch();
  React.useEffect( () => {
    
    dispatch(loadPostFB());

  }, []);



  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
