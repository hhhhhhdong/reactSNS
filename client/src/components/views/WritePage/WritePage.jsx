import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userPost } from "../../../_actions/user_actions";
import { withRouter } from "react-router-dom";
import { POST_SERVER } from "../../Config";
import axios from "axios";
import { useSelector } from "react-redux";

const WritePage = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const onTilteHandler = (event) => {
    setTitle(event.target.value);
  };

  const onContentHandler = (event) => {
    setContent(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const toMypost = {
      title: Title,
      content: Content,
      user: user.userInfo.email,
    };

    dispatch(userPost(toMypost)).then((response) => {
      if (response.payload.success) {
        props.history.push("/");
      } else {
        alert("err");
      }
    });

    const toUpload = {
      writer: user.userInfo._id,
      name: user.userInfo.name,
      title: Title,
      content: Content,
    };

    axios.post(`${POST_SERVER}/`, toUpload).then((response) => {
      if (response.data.success) {
        alert("Success to upload");
        props.history.push("/");
      } else {
        alert("Fail to upload");
      }
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" vlaue={Title} onChange={onTilteHandler} />
        <label htmlFor="content">Content</label>
        <textarea
          cols="30"
          rows="10"
          vlaue={Content}
          onChange={onContentHandler}
        ></textarea>
        <button>Post</button>
      </form>
    </div>
  );
};

export default withRouter(WritePage);
