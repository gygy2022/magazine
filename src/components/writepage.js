import React from "react";
import { db , auth, storage } from '.././shared/firebase';
import {addDoc, getDocs, where, query, collection} from "firebase/firestore"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import moment from 'moment';
import styled  from "styled-components";

const Write = (props) => {

  const post_text_ref = React.useRef(null);
  const file_link_ref = React.useRef(null);

  const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');

  const getName = () => {
    console.log(`auth.currentUser`);
    console.log(auth.currentUser);

  }

  

  
  const uploadFB = async (e) => {
    console.log(e.target.files);
    const uploaded_file = await uploadBytes(ref(storage, `images/${e.target.files[0].name}`), e.target.files[0]);

    console.log(uploaded_file);

    const file_url = await getDownloadURL(uploaded_file.ref);
    
    file_link_ref.current = {url : file_url};

   

    const post_doc = await addDoc(collection(db, "posts"), {
      text: post_text_ref.current?.value,
      image_url: file_link_ref.current?.url,
      time: nowTime,
    });

  }



  return (
    <WirteWrap>
    <MainTitle>MAGAZINE</MainTitle>
    <Priview>글 미리보기
    </Priview>
    <label>사진 왼쪽
    <input type="checkbox"/>
    </label>
    <label>사진 오른쪽
    <input type="checkbox"/>
    </label>
    <label>사진 가운데
    <input type="checkbox"/>
    </label>
    <br />
    
    <input type="file" onChange={uploadFB}/>
    <TextBox><textarea ref={post_text_ref}/><br />
    <button onClick={uploadFB}>올리기</button>
    </TextBox>
    
    
    
    </WirteWrap>
  )
}

let WirteWrap = styled.div`
margin:0 auto;
width:600px;
height:700px;
background-color:pink;
`
let MainTitle = styled.div`
background-color: goldenrod;
font-size:50px;
font-weight:bold;
margin-bottom: 20px;
`
let Priview = styled.div`
margin:0 auto;
margin-bottom:40px;
width: 90%;
height:300px;
background-color:#fff;
border:1px solid goldenrod;

`

let TextBox = styled.div`
 textarea {
   width:400px;
   height:100px;
   resize:none;
   border:1px solid goldenrod;
 }
 button {
   width: 100px;
   height: 40px;
   border-radius: 20px;
   border:4px double goldenrod;
   background-color: #fff;
 }
`

export default Write;