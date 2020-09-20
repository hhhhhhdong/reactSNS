import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { POST_SERVER } from "../../Config";
import { ContentContainer } from "../../FormStyle";

function MyPage() {
  const user = useSelector((state) => state.user);
  const [MyPosts, setMyPosts] = useState([]);
  useEffect(() => {
    user.userInfo && getPost();
  }, []);

  const getPost = () => {
    axios
      .get(`${POST_SERVER}/myposts?id=${user.userInfo._id}`)
      .then((response) => {
        if (response.data.success) {
          setMyPosts(response.data.postInfo);
        }
      });
  };
  const renderMyPosts = MyPosts.map((post) => {
    return (
      <ContentContainer key={post._id}>
        <div>
          <div>{post.name}</div>
          <div>{post.createdAt}</div>
        </div>
        <div>{post.title}</div>
        <div>{post.content}</div>
      </ContentContainer>
    );
  });

  return <div>{renderMyPosts}</div>;
}

export default MyPage;
