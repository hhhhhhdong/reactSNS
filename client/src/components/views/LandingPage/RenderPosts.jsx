import React, { useState, useEffect } from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentTitle,
  ContentContent,
} from "../../FormStyle";
import { POST_SERVER } from "../../Config";
import axios from "axios";
import { withRouter } from "react-router-dom";

const RenderPosts = (props) => {
  const { post, user } = props;
  const [Liked, setLiked] = useState(false);
  const [CountLike, setCountLike] = useState(0);

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
        setCountLike(response.data.count);
        return console.log("push");
      } else {
        setCountLike(response.data.count);
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
    setCountLike(post.liked.length);
  }, [user]);

  const onClickHandler = (e) => {
    if (e.target.tagName === "I") {
      return;
    }
    props.history.push("/postinfo", { post: post });
  };

  return (
    <ContentContainer onClick={onClickHandler}>
      <ContentHeader>
        <div>작성자 : {post.name}</div>
        <div>작성일자 : {post.createdAt.slice(0, 10)}</div>
        <i
          onClick={onClick}
          className={Liked ? "fas fa-heart" : "far fa-heart"}
          style={{ fontSize: 17 }}
        >
          <span>{CountLike}</span>
        </i>
      </ContentHeader>
      <ContentTitle>{post.title}</ContentTitle>
      <ContentContent>{post.content}</ContentContent>
    </ContentContainer>
  );
};

export default withRouter(RenderPosts);
