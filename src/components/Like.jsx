import React, { useState } from 'react';

import './Like.css'

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLike}>
      <img src={liked ? '/red-heart.svg' : '/grey-heart.svg'} alt="Like" style={{ width: '24px', height: '24px'}} />
    </button>
  );
}

export default LikeButton;
