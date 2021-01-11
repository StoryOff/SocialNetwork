import React from 'react';
import c from './Post.module.css';

function Post(props) {
  return (
    <div className={c.item}>
      <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
      {props.message}
      <div>
        <span>Liked:</span> { props.likesCount }
      </div>
    </div>
  );
}

export default Post
