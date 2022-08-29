import React from 'react';
import style from './CvEducation.module.css';

function CvEducationItem({ university, subject, degree, yearFrom, yearTo }) {
  const from = yearFrom ? yearFrom : 'from';
  const to = yearTo ? yearFrom : 'to';
  const uniName = university ? university : 'University Name';
  const studiesSubject = subject ? subject : 'Studies Subject';
  const uniDegree = degree ? degree : 'Degree';

  return (
    <div className={style['education-list-item']}>
      <p className={style.period}>
        <span>{from}</span> - <span>{to}</span>
      </p>
      <div className={style['list-item-detail']}>
        <p className={style.subject}>{studiesSubject}</p>
        <p className={style.uni}>{uniName}</p>
        <p className={style.degree}>{uniDegree}</p>
      </div>
    </div>
  );
}

export default CvEducationItem;
