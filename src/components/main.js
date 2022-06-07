import react from "react";
import { useNavigate } from "react-router-dom";

const Main = (props) => {
  const navigate = useNavigate();
  return (
    <>
    <h1>메인페이지</h1>
    <button onClick={() => {navigate("/login")}}>로그인</button>
    <button onClick={() => {navigate("/signup")}}>회원가입</button>
    <div>게시물 리스트</div>
    </>
  )
}

export default Main;