import React from "react";
import "./style.css";

function Profile(props) {
  return (
    <div className="profile text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Profile;
