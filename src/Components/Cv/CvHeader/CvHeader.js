import React from 'react';
import { FaPhone, FaHome, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function CvHeader() {
  return (
    <section className="cv-header__container">
      <section className="cv-header__container__info-primary__section">
        <div>
          <h2 className="cv-header__info-primary__name">Anthony Maras</h2>
          <p className="cv-header__info-primary__job-title">
            Junior Web Developer
          </p>
        </div>
        <ul className="cv-header__info-primary_links__container">
          <li>
            <p>
              <span>
                <FaPhone />
              </span>
              phone
            </p>
          </li>
          <li>
            <a href=".">
              <span>
                <MdEmail />
              </span>
              email
            </a>
          </li>
          <li>
            <p>
              <span>
                <FaHome />
              </span>
              city
            </p>
          </li>
          <li>
            <a href=".">
              <span>
                <FaLinkedin />
              </span>
              linkedin
            </a>
          </li>
        </ul>
      </section>
      <section className="cv-header__info-secondary_section">
        <div className="cv-header__info-secondary__container">
          <h3 className="cv-header__info-secondary-title">Description</h3>
          <p className="cv-header__info-secondary-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            dignissimos accusamus magni quis libero consectetur cupiditate.
            Veniam maiores sit, nobis cupiditate voluptatum fuga laudantium
            vitae, illum explicabo maxime rerum qui.
          </p>
        </div>
      </section>
    </section>
  );
}

export default CvHeader;
