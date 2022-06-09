import react from "react";
import { useDispatch, useSelector } from "react-redux";
import styled  from "styled-components";



const PostList = () => {

  const post_list = useSelector((state) => state.post.list);



  return (
    <>
    <div>
    {/* <div> 작성자와 작성 시간</div>
      <div>이미지와 텍스트</div> */}

  {post_list.map((post, index) => {
        return (
          <Post_card>
            <Name_time>
            <span className="post_text" id="post_name">{post_list[index].name}</span>
            <span className="post_text" id="post_time">{post_list[index].time}</span>
            </Name_time>
          <img src={post_list[index].image_url} id="post_img"/>
          
          <p className="post_text" id="post_text">{post_list[index].text}</p>
        </Post_card>

        )
      })}
      
    </div>
    </>
  )

};

let Post_card = styled.div`
border:1px solid goldenrod;
margin-bottom:20px;

#post_img {
  width:90%;
}
`

let Name_time = styled.div`
margin: 0 auto;
width:90%;
height:50px;
line-height:50px;

  #post_name {
    float:left;
    font-size:14px;
  }

  #post_time {
    float:right;
    font-size:12px;
  }
`

export default PostList;