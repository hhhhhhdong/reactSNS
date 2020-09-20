import React, { useEffect, useState } from "react";
import { POST_SERVER } from "../../Config";
import axios from "axios";
import { ContentContainer } from "../../FormStyle";

const LandingPage = () => {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    axios.get(`${POST_SERVER}/posts`).then((response) => {
      if (response.data.success) {
        setPosts(response.data.postInfo);
      }
    });
  };

  const renderPosts = Posts.map((post) => {
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

  return <div>{renderPosts}</div>;
};

export default LandingPage;
