import React from 'react';

function Cv() {
  return (
    <article className="cv">
      <header className="cv-header">
        <section>
          <div className="cv-header_info_primary">
            <h2>Name</h2>
            <p>Job description</p>
          </div>
          <div className="cv-header_info-secondary">
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
      </header>
      <section className="cv-main__container">
        <section className="experience">
          <h3>Professional Experience</h3>
          <div className="company-info">
            <h4 className="title">Company name</h4>
            <p className="location">company location</p>
            <p className="period">period of working in tha company</p>
            <p className="position">position in the company</p>
          </div>
        </section>
        <section className="education">
          <div className="education-container">
            <h3>Education</h3>
            <div className="education-info">
              <p className="university">Uni name</p>
              <p className="degree">degree</p>
              <p className="subject">subject</p>
            </div>
          </div>
        </section>
      </section>
    </article>
  );
}

export default Cv;
