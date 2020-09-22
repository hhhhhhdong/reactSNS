import React, { useEffect, useState } from "react";
import {
  ContentContainer,
  ContentHeader,
  ContentTitle,
  ContentContent,
  ComentForm,
  ComentLabel,
  ComentInput,
  ComentButton,
} from "../../FormStyle";
import axios from "axios";
import { useSelector } from "react-redux";
import { POST_SERVER } from "../../Config";
import RenderComents from "./RenderComents";

const PostInfo = (props) => {
  const user = useSelector((state) => state.user);
  const post = props.location.state.post;
  const [Coment, setComent] = useState("");
  const [Coments, setComents] = useState([]);

  const onComentHandler = (e) => {
    setComent(e.target.value);
  };

  useEffect(() => {
    setComents(post.coments);
  }, [user]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!user.userInfo.logged) {
      return alert("로그인 후 이용 가능합니다.");
    }

    if (!Coment) {
      return alert("글을 작성해 주세요.");
    }

    const body = {
      writerId: user.userInfo._id,
      writerName: user.userInfo.name,
      coment: Coment,
      postId: post._id,
    };

    axios.post(`${POST_SERVER}/postinfo`, body).then((response) => {
      if (response.data.writerId) {
        const newComents = [...Coments, response.data];
        setComents(newComents);
        setComent("");
        alert("Success to coment");
      } else {
        alert("Fail to upload");
      }
    });
  };

  return (
    <>
      <ContentContainer>
        <ContentHeader>
          <div>작성자 : {post.name}</div>
          <div>작성일자 : {post.createdAt.slice(0, 10)}</div>
        </ContentHeader>
        <ContentTitle>{post.title}</ContentTitle>
        <ContentContent>{post.content}</ContentContent>
      </ContentContainer>
      <ComentForm onSubmit={onSubmit}>
        <ComentLabel>Coment</ComentLabel>
        <ComentInput type="text" value={Coment} onChange={onComentHandler} />
        <ComentButton>등록</ComentButton>
      </ComentForm>
      <RenderComents coments={Coments} />
    </>
  );
};

export default PostInfo;
