import React from 'react';

function Form() {
  return (
    <article>
      <section>
        <div>
          <h3>Personal info</h3>
          <form className="form personal-info">
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
    </article>
  );
}

export default Form;
