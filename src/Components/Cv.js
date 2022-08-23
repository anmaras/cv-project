import React from 'react';
import CvHeader from './CvHeader';
import CvProExperienceList from './CvProExperienceList';
import CvEducationList from './CvEducationList';
function Cv() {
  return (
    <article className="cv">
      <CvHeader />
      <section className="cv-main__section">
        <CvProExperienceList />
        <CvEducationList />
      </section>
    </article>
  );
}

export default Cv;
