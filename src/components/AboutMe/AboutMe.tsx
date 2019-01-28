import * as React from 'react';
import BaseLayout from '../BaseLayout/BaseLayout';
import './AboutMe.scss';

export default () => {
  return (
  <BaseLayout>
  <section className="about">
    <section className="title">
      <h1>Ryan Jones</h1>
    </section>
    <section className="profile">
      <div className="profile__content">
        <h2>I didn't exactly hit the ground running</h2>
        <p>My career in development was more like I 'smashed into the ground at Mach 3 upon takeoff.'</p>
        <p>Despite the bumps and bruises along the way, I've managed to keep busy. In the past two years, I've:
          <ul>
            <li>Managed a team of three to develop a mobile analytics app for a major investment firm with over $250 billion in equity.</li>
            <li>Managed and led the development of a multi-screen SEAN-stack visual hub for a ground-breaking medical research center, which was personally approved of by the Qatari Minister of Public Health</li>
            <li>Launched an internal and client-facing website for a Fortune 500 company</li>
          </ul>
        </p>
      </div>
      <div className="profile__image" />
    </section>
    <section className="personal">
      <div className="personal__image"/>
      <div className="personal__content">
        <h2>Something inspirational</h2>
        <p>I was going to think of something clever to say, but then I lost electricity for much of the weekend and so I was forced battle Chrome download limits than impress with you words.</p>
        <p>Since I didn't get everything done that I would have liked to do, here's what I would have done to complete the project</p>
        <ul>
          <li>
            I would ideally have ejected it so that I could configure and streamline its webpack, not just for production builds, 
            but also to create aliases for file paths
          </li>
          <li>
            Use a context to handle screen resizing; thus providing a more sophisticated way of handling the navbar in mobile
          </li>
          <li>
            Add unit tests, which is something I intend to do anyways because I want the practice
          </li>
        </ul>
      </div>
    </section>
  </section>
  </BaseLayout>)
}
