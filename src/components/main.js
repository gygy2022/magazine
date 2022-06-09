import React from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth';
import { collection, getDoc } from 'firebase/firestore';
import { auth, db } from '.././shared/firebase';
import { useNavigate } from "react-router-dom";

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
    <div>
    <h1>메인페이지</h1>
    {isLogin ? (
      <TrueButton />
    ) : (
      <FalseButton />
    )}
    <PostList />
    </div>
  )
}

export default Main;