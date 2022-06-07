import React from "react";
import {auth, db} from '.././shared/firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const id_ref = React.useRef(null);
  const pw_ref = React.useRef(null);
  const nickname_ref = React.useRef(null);

const signupFB = async () => {
  const user = await createUserWithEmailAndPassword(
    auth,
    id_ref.current.value,
    pw_ref.current.value,
  );
  console.log(user);

  const user_doc = await addDoc(collection(db,"users"),{
    user_id : user.user.email,
    name: nickname_ref.current.value,
  })

  alert("회원가입을 축하드려요!");
  navigate("/");

};



  return (
    <>
    <h1>회원가입페이지</h1>
    <div>
      <label>아이디(이메일)
      <input type="email" ref={id_ref}/>
      </label>

      <label>비밀번호
      <input type="password" ref={pw_ref}/>
      </label>
      
      <label>비밀번호 확인
      <input type="password" />
      </label>
      
      <label>닉네임
      <input type="text" ref={nickname_ref}/>
      </label>
      
      <button onClick={signupFB}>회원가입</button>
      
    </div>
    </>
  )
}

export default SignUp;