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
  const { name, title, email, phone, city, profile } = personalInfo;
  return (
    <section className={style['cv-header']}>
      <section className={style['info-primary__section']}>
        <div className={style['name-job__wrapper']}>
          <h3 className={style.name}>{name ? name : 'your name'}</h3>
          <p className={style.job}>{title ? title : 'your job title'}</p>
        </div>
        <ul className={style['link-list']}>
          <li>
            <p>
              <span>
                <FaPhone />
              </span>
              {phone ? phone : 'Your Telephone'}
            </p>
          </li>
          <li>
            <a href=".">
              <span>
                <MdEmail />
              </span>
              {email ? email : 'Your email'}
            </a>
          </li>
          <li>
            <p>
              <span>
                <FaHome />
              </span>
              {city ? city : 'Your city'}
            </p>
          </li>
        </ul>
        <ul>
          {linkList.length &&
            isLinksOpen &&
            linkList.map((link) => {
              const { socialLinkUrl, socialLink, id } = link;
              return (
                <li key={id}>
                  <a href={socialLinkUrl} target="_blank" rel="noreferrer">
                    <span>
                      {socialLink === 'linkedin' ? (
                        <FaLinkedin />
                      ) : socialLink === 'website' ? (
                        <CgWebsite />
                      ) : socialLink === 'twitter' ? (
                        <FaTwitter />
                      ) : (
                        <FaGithub />
                      )}
                    </span>
                    {socialLink}
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
      <section className={style['info-secondary__section']}>
        <div className={style['description__wrapper']}>
          <h4 className={style.title}>Description</h4>
          <p className={style.description}>
            {profile ? profile : 'Say something about your self'}
          </p>
        </div>
      </section>
    </section>
  );
}

export default CvHeader;
