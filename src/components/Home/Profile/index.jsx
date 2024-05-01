import React from "react";

function Profile({ user }) {
  if (!user) return null;

  return (
    <div>
      <h2>{user.name || "not found"}</h2>
      <img src={user.avatar_url} alt="avatar" width="100" />
      <p>{user.bio || "not found"}</p>
    </div>
  );
}

export default Profile;
