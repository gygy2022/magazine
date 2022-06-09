import React from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth';
import { collection, getDoc } from 'firebase/firestore';
import { auth, db } from '.././shared/firebase';
import { useNavigate } from "react-router-dom";
import styled  from "styled-components";

import PostList from './postList';

const Main = (props) => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = React.useState(false);
  console.log(`auth.currentUser`);
  console.log(auth.currentUser);

  const loginCheck = async (user) => {
    if (user) {
      setIsLogin(true);
      console.log("-로그인 함-")
    } else {
      setIsLogin(false);
      console.log("-로그인 없음-")
    }
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, loginCheck);

  }, [])



  const FalseButton = () => {
    return (
      <>
       <button onClick={() => {navigate("/login")}}>로그인</button>
       <button onClick={() => {navigate("/signup")}}>회원가입</button>
      </>
    )
  }

  const TrueButton = () => {
    return (
      <>
      <button onClick={() => { signOut(auth) }}>로그아웃</button>
      <button onClick={() => {navigate("/write")}}>글쓰기</button>
      </>
    )
  }

  return (
    <MainWrap>
    <MainTitle>MAGAZINE</MainTitle>
    <Buttons>
    {isLogin ? (
      <TrueButton />
    ) : (
      <FalseButton />
    )}
    </Buttons>
    <PostList />
    </MainWrap>
  )

 
}

let MainWrap = styled.div`
width:60%;
position:relative;
margin:0 auto;
`
let MainTitle = styled.div`
background-color: goldenrod;
font-size:50px;
font-weight:bold;
margin-bottom: 20px;
`

let Buttons = styled.div`

button {
   margin:0 5px;
   width: 100px;
   height: 40px;
   border-radius: 20px;
   border:4px double goldenrod;
   background-color: #fff;
   
 }
 width:220px;
 margin-left:80%;
 
`

export default Main;