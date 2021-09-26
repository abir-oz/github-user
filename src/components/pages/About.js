import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <p>
        GitHub Profile Finder Using React and GitHub User API <br />
        API Endpoints that has been used: <br /> https://api.github.com/users{' '}
        <br />
        https://api.github.com/search/users?q=search_term <br />
        https://api.github.com/users/username <br />
        https://api.github.com/users/username/repos <br />
      </p>
      <ul>
        <strong>Components</strong>
        <li>- App</li>
        <li>- pages</li>
        <li>- layout</li>
        <li>- repos</li>
        <li>- users</li>
      </ul>
      <ul>
        <strong>Pages</strong>

        <li>- Home</li>
        <li>- About</li>
        <li>- Not Found</li>
      </ul>
    </Fragment>
  );
};

export default About;
