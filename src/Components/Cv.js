import React from 'react';

function Cv() {
  return (
    <article className="cv">
      <section className="cv-header">
        <section>
          <div className="cv-info_primary">
            <h2>Name</h2>
            <p>Job description</p>
          </div>
          <div className="cv-info-secondary">
            <ul>
              <li>
                <p>phone</p>
              </li>
              <li>
                <a href=".">email</a>
              </li>
              <li>
                <p>city</p>
              </li>
              <li>
                <a href=".">linkedin</a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              dignissimos accusamus magni quis libero consectetur cupiditate.
              Veniam maiores sit, nobis cupiditate voluptatum fuga laudantium
              vitae, illum explicabo maxime rerum qui.
            </p>
          </div>
        </section>
      </section>
      <section className="cv-main__section">
        <div className="cv-experience__container">
          <h3>Professional Experience</h3>
          <div className="cv-company-info">
            <h4 className="cv-title">Company name</h4>
            <p className="cv-location">company location</p>
            <p className="cv-period">period of working in tha company</p>
            <p className="cv-position">position in the company</p>
          </div>
        </div>
        <section className="cv-education-section">
          <div className="cv-education__container">
            <h3>Education</h3>
            <div className="cv-education-info">
              <p className="cv-university">Uni name</p>
              <p className="cv-degree">degree</p>
              <p className="cv-subject">subject</p>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
}

export default Cv;
