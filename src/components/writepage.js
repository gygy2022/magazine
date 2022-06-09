import React from "react";
import { db , auth, storage } from '.././shared/firebase';
import {addDoc, getDocs, where, query, collection} from "firebase/firestore"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import moment from 'moment';

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
    <>
    <h1>글 작성 페이지</h1>
    <div>글 미리보기
    </div>
    <textarea ref={post_text_ref}/>
    <input type="file" onChange={uploadFB}/>
    <button onClick={uploadFB}>올리기</button>
    </>
  )
}

export default Write;