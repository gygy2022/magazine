import React from "react";
import {onAuthStateChanged, signOut} from 'firebase/auth';
import { auth, db } from '.././shared/firebase';
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = React.useState(false);
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
    
    <div>게시물 리스트</div>
    </div>
  )
}

export default Main;