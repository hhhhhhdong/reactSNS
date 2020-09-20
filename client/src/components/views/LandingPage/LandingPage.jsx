import React, { useEffect, useState } from "react";
import { POST_SERVER } from "../../Config";
import axios from "axios";
import { useSelector } from "react-redux";
import RenderPosts from "./RenderPosts";

const LandingPage = () => {
  const user = useSelector((state) => state.user);
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    getPost();
  }, [user]);

  const getPost = () => {
    axios.get(`${POST_SERVER}/posts`).then((response) => {
      if (response.data.success) {
        setPosts(response.data.postInfo);
      }
    });
  };

  const renderPosts = Posts.map((post) => {
    return (
      <RenderPosts
        key={post._id}
        post={post}
        user={user.userInfo}
      ></RenderPosts>
    );
  });

  return <div>{renderPosts}</div>;
};

export default LandingPage;
