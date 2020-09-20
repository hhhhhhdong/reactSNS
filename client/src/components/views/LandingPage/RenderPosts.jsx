import React, { useState, useEffect } from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentTitle,
  ContentContent,
} from "../../FormStyle";
import { POST_SERVER } from "../../Config";
import axios from "axios";

const RenderPosts = ({ post, user }) => {
  const [Liked, setLiked] = useState(false);
  const onClick = () => {
    if (!user.logged) {
      return alert("로그인 후 이용 가능합니다.");
    }
    setLiked(Liked ? false : true);

    const body = {
      userId: user._id,
      postId: post._id,
      Liked,
    };

    axios.post(`${POST_SERVER}/likepost`, body).then((response) => {
      if (response.data.liked) {
        return console.log("push");
      } else {
        return console.log("pull");
      }
    });
  };

  useEffect(() => {
    user &&
      post.liked.map((likeduser) => {
        if (likeduser.postId === user._id) {
          setLiked(true);
        }
      });
  }, [user]);

  return (
    <ContentContainer>
      <ContentHeader>
        <div>작성자 : {post.name}</div>
        <div>작성일자 : {post.createdAt.slice(0, 10)}</div>
        <i
          onClick={onClick}
          className={Liked ? "fas fa-heart" : "far fa-heart"}
        ></i>
      </ContentHeader>
      <ContentTitle>{post.title}</ContentTitle>
      <ContentContent>{post.content}</ContentContent>
    </ContentContainer>
  );
};

export default RenderPosts;
