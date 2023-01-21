import React from 'react';

export default function Info() {
  return (
    <div className="information-section-light">
      <div className="image-container">
        <img
          className="profile-picture"
          src="https://i.postimg.cc/4Ncsh10x/b14ff37dadca731a0b4ae5d4f9be2673-profile-pictures-dose.jpg"
          alt="proficle-picture"
        />
      </div>

      <div className="info-container-light">
        <h1 className="info-name">Landeri Srujan</h1>
        <h2 className="info-career-light">Frontend Developer</h2>
        <h2 className="info-site-light">
          <a href="https://github.com/srujan-landeri" target="_blank">
            https://github.com/srujan-landeri
          </a>
        </h2>
      </div>

      <div className="social-button-container">
        <a href="mailto:srujanlanderi@gmail.com" target="_blank">
          <button className="email-button">
            <i class="fa-regular fa-envelope"></i>Email
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/srujan-landeri-086a75249/"
          target="_blank"
        >
          <button className="linkedin-button">
            <i class="fa-brands fa-linkedin"></i>Linkedin
          </button>
        </a>
      </div>
    </div>
  );
}
