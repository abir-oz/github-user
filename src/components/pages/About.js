import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <p>
        GitHub Profile Finder Using React and GitHub User API API Endpoints that
        has been used: https://api.github.com/users
        https://api.github.com/search/users?q=search_term
        https://api.github.com/users/username
        https://api.github.com/users/username/repos Components - App - pages -
        layout - repos - users Pages - Home - About - Not Found
      </p>
    </Fragment>
  );
};

export default About;
