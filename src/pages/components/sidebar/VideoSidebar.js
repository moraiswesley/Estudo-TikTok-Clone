import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
    /* Exclamação muda a variável para o contrário do que está no momento */
    }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__options" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        {/* Interrogação e dois pontos servem como uma forma simplificada de If e Else respectivamente */}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__options ">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
