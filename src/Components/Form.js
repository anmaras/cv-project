import React from 'react';

function Form() {
  return (
    <article className="form-container">
      <section>
        <div>
          <h3>Personal info</h3>
          <form className="personal-info form">
            <input type="text" name="firstName" placeholder="firstName" />
            <input type="text" name="lastName" placeholder="lastName" />
            <input type="text" name="title" placeholder="job title" />
            <input type="text" name="email" placeholder="email" />
            <input type="text" name="phone" placeholder="phone number" />
            <input type="text" name="city" placeholder="city" />
            <input type="text" name="linkedin" placeholder="linkedin url" />
            <textarea name="description" placeholder="description"></textarea>
          </form>
        </div>
      </section>
      <section>
        <div>
          <h3>Education</h3>
          <form className="education-info form">
            <input type="text" name="university" placeholder="university" />
            <input type="text" name="degree" placeholder="degree" />
            <input type="text" name="subject" placeholder="subject" />
            <input type="text" name="from" placeholder="from" />
            <input type="text" name="to" placeholder="to" />
            <button>add</button>
            <button>delete</button>
          </form>
        </div>
      </section>
      <section>
        <div>
          <h3>Experience</h3>
          <form className="experience-info form">
            <input type="text" name="position" placeholder="position" />
            <input type="text" name="company" placeholder="company" />
            <input type="text" name="city" placeholder="city" />
            <input type="text" name="from" placeholder="from" />
            <input type="text" name="to" placeholder="to" />
            <button>add</button>
            <button>delete</button>
          </form>
        </div>
      </section>
    </article>
  );
}

export default Form;
