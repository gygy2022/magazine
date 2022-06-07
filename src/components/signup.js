import react from "react";

const SignUp = () => {
  return (
    <>
    <h1>회원가입페이지</h1>
    <form>
      <label>아이디
      <input type="email"/>
      </label>
      
      <label>비밀번호
      <input type="password"/>
      </label>
      
      <label>비밀번호 확인
      <input type="text"/>
      </label>
      
      <label>닉네임
      <input type="text"/>
      </label>
      
      <button>회원가입</button>
      
    </form>
    </>
  )
}

export default SignUp;