import React from 'react';

function CvHeader() {
  return (
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
  );
}

export default CvHeader;
