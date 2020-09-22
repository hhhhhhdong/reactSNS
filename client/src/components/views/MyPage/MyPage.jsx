import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { POST_SERVER } from "../../Config";
import RenderPosts from "../LandingPage/RenderPosts";

function MyPage() {
  const user = useSelector((state) => state.user);
  const [MyPosts, setMyPosts] = useState([]);
  useEffect(() => {
    user.userInfo && getPost();
  }, [user]);

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
      <RenderPosts
        key={post._id}
        post={post}
        user={user.userInfo}
      ></RenderPosts>
    );
  });

  return <div>{renderMyPosts}</div>;
}

export default MyPage;
