import React, { Fragment } from 'react';

const DefaultTemplate = (contentfulPost) => {
  return (
    <Fragment>
      <h1>{contentfulPost.title}</h1>
      <p>{contentfulPost.description.description}</p>
      {contentfulPost.image ? (
        <img src={contentfulPost.image.file.url} alt={contentfulPost.title} />
      ) : null}
    </Fragment>
  );
};

export default DefaultTemplate;