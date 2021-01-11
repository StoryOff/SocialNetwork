import React from 'react';
import c from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
      </div>
      <div className={c.descriptionBlock}>
        ava descr
      </div>
    </div>
  );
}

export default ProfileInfo
