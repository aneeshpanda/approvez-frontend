import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.page";
import Login from "./pages/Login/Login.page";
import Campaigns from "./pages/Campaigns/Campaigns.page";
import Posts from "./pages/Posts/Posts.page";
import Post from "./pages/Post/Post.page";
import NewCampaign from "./pages/NewCampaign/NewCampaign.page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<Post />} />
        <Route path="/newcampaign" element={<NewCampaign />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
