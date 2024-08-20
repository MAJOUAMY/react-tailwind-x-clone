import React from "react";
import HomeNav from "../components/Home/HomeNav";
import PostForm from "../components/Home/PostForm";
import Post from "../components/Home/post/Post";
function Home() {
  return (
    <div>
      <HomeNav />
      <PostForm />
      <div className="p-4">
        <Post />
      </div>
    </div>
  );
}

export default Home;
