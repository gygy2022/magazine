import React from "react";
import {auth, db} from '.././shared/firebase';
import {signInWithEmailAndPassword} from "firebase/auth";
import {getDocs, where, query, collection} from "firebase/firestore"
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);

  const loginFB = async () => {
    const user = await signInWithEmailAndPassword(auth, id_ref.current.value, pw_ref.current.value);

    console.log(user);

    const user_docs = await getDocs(query(
      collection(db, "users"), where("user_id","==", user.user.email)
    ));

    const get_name = user_docs.forEach ( u => {
      console.log(u.data());
    })
    
    navigate("/");
    
  }

  

  return (
    <>
    <div>
    <label>아이디(이메일)
    <input type="email" ref={id_ref}/>
    </label>

    <label>비밀번호
    <input type="password" ref={pw_ref}/>
    </label>
    <button onClick={loginFB}>로그인</button>
    </div>
    </>
  )
}

export default Login;