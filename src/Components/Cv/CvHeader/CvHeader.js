import React from 'react';
import {
  FaPhone,
  FaHome,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { MdEmail } from 'react-icons/md';
import style from './CvHeader.module.css';
import { useGlobalContext } from '../../../Context';

function CvHeader() {
  const { personalInfo, linkList, isLinksOpen } = useGlobalContext();
  const { firstName, lastName, title, email, phone, city, profile } =
    personalInfo;
  return (
    <section className={style['cv-header']}>
      <section className={style['info-primary__section']}>
        <div className={style['name-job__wrapper']}>
          <h2 className={style.name}>
            {firstName || lastName ? `${firstName} ${lastName}` : 'your name'}
          </h2>
          <p className={style.job}>{title ? title : 'your job title'}</p>
        </div>
        <ul className={style['link-list']}>
          <li>
            <p>
              <FaPhone /> {phone ? phone : 'Your Telephone'}
            </p>
          </li>
          <li>
            <a href=".">
              <MdEmail /> {email ? email : 'Your email'}
            </a>
          </li>
          <li>
            <p>
              <FaHome /> {city ? city : 'Your city'}
            </p>
          </li>
        </ul>
        <ul className={style['social-list']}>
          {linkList.length &&
            isLinksOpen &&
            linkList.map((link) => {
              const { socialLinkUrl, socialLink, id } = link;
              return (
                <li className={style['social-list-item']} key={id}>
                  <a
                    className={style['social-list-link']}
                    href={socialLinkUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {socialLink === 'linkedin' ? (
                      <FaLinkedin />
                    ) : socialLink === 'website' ? (
                      <CgWebsite />
                    ) : socialLink === 'twitter' ? (
                      <FaTwitter />
                    ) : (
                      <FaGithub />
                    )}

                    {socialLink}
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
      <section className={style['info-secondary__section']}>
        <div className={style['profile-container']}>
          <h4 className={style['profile-title']}>profile</h4>
          <p className={style.profile}>
            {profile ? profile : 'Say something about your self'}
          </p>
        </div>
      </section>
    </section>
  );
}

export default CvHeader;
