import React from 'react';

import Layout from '../components/layout';

const Project = ({ pageContext }) => {
  return (
    <Layout>
      <div>
        <h2>{pageContext.title}</h2>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
      </div>
    </Layout>
  );
};

export default Project;
