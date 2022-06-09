import react from "react";
import { useDispatch, useSelector } from "react-redux";



const PostList = () => {

  const post_list = useSelector((state) => state.post.list);



  return (
    <>
    <div>
    {/* <div> 작성자와 작성 시간</div>
      <div>이미지와 텍스트</div> */}

  {post_list.map((post, index) => {
        return (
          <div className="post_card">
          <h4>-닉네임-</h4>
          <span className="post_text" id="post_name">{post_list[index].name}</span>
          <h4>-시간-</h4>
          <span className="post_text" id="post_time">{post_list[index].time}</span>
          <h4>-사진-</h4>
          <img src={post_list[index].image_url} />
          <h4>-글-</h4>
          <span className="post_text" id="post_text">{post_list[index].text}</span>
        </div>

        )
      })}
      
    </div>
    </>
  )

};

export default PostList;