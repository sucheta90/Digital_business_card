import React from "react";
export default function Nav() {
  return (
    <div className="nav_element">
      <div>
        <img
          src="/images/Sucheta.jpg"
          className="profile-picture"
          alt="potrait"
        />
      </div>

      <h4 className="subject-name">Sucheta Mukherjee</h4>
      <h6 className="subject-title">Frontend Developer</h6>
      <p className="subject-website">mukherjeesucheta.website</p>
    </div>
  );
}
