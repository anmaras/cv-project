import React from 'react';
import CvEducationItem from './CvEducationItem';
function CvEducationList() {
  return (
    <section className="cv-education-section">
      <div className="cv-education__container">
        <h3>Education</h3>
        <CvEducationItem />
      </div>
    </section>
  );
}

export default CvEducationList;
