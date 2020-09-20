import React, { useEffect, useState } from "react";
import { POST_SERVER } from "../../Config";
import axios from "axios";
import {
  ContentContainer,
  ContentHeader,
  ContentTitle,
  ContentContent,
} from "../../FormStyle";

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
        <ContentHeader>
          <div>작성자 : {post.name}</div>
          <div>작성일자 : {post.createdAt.slice(0, 10)}</div>
        </ContentHeader>
        <ContentTitle>{post.title}</ContentTitle>
        <ContentContent>{post.content}</ContentContent>
      </ContentContainer>
    );
  });

  return <div>{renderPosts}</div>;
};

export default LandingPage;
