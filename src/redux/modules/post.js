// action 
import { db } from "../../shared/firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore";


const POST_LOAD = "post/LOAD";
const POST_CREATE = "post/CREATE";

// 기본값
const PostState = {
  list: [{
    text:'텍스트1',
    image_url:'이미지주소1',
    time:'시간1',
    name:'닉네임1',
  }]
};

// action creactor

export const loadPost = (post_collection) => {
  return {type:POST_LOAD, post_collection};
};

export const createPost = (post) => {
  console.log("액션 실행");
  return {type:POST_CREATE, post};
};

// middlewares

export const loadPostFB = () => {
  return async function (dispatch) {
    const post_data = await getDocs(query(collection(db, "posts"), orderBy("time","desc")));
    // console.log("데이터");
    // console.log(post_data);

    let post_data_list = [];
    post_data.forEach((doc) => {
      // console.log(doc.data());
      post_data_list.push({ id: doc.id, ...doc.data()});
    });
    // console.log("post_data_list에 잘 들어갔는지 확인")
    // console.log(post_data_list);

    dispatch(loadPost(post_data_list));
  }
}


export const addPostFB = (post) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "posts"), post);
    // const _post = await getDoc(docRef);
    const post_data = {id : docRef.id, ...post};
    // console.log("포스트 제대로 나오나");
    // console.log(post_data);


    // console.log("docRef 잘 나오니?")
    // console.log((await getDoc(docRef)).data());

    dispatch(createPost(post_data));
  }

}



// reducer

export default function reducer(state=PostState, action={}) {
  switch (action.type) {
    case "post/LOAD": {
      return {list: action.post_collection};

    }
   

    case "post/CREATE": {
      const new_post_list = [...state.list, action.card];
      return {list: new_post_list};

    }

      

    default:
      return state;
  }
}