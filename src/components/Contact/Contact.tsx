import * as React from 'react';
import BaseLayout from '../BaseLayout/BaseLayout';
import './Contact.scss';

export default () => (
  <BaseLayout>
    <section className="contact">
      <h1>Contact Me!</h1>
      <div className="contact__info">
        <div>
          <h2>email:</h2>
          <p>ryanllewellynjones@gmail.com</p>
        </div>
        <div>
          <h2>linkedIn:</h2>
          <p>https://www.linkedin.com/in/ryanrjjones/</p>
        </div>
        <div>
          <h2>Eli</h2>
          <p><i>Your coworker</i></p>
        </div>
      </div>
    </section>
  </BaseLayout>
)
