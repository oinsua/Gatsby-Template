import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

const Page = ({ data: { contentfulPost } }) => {
  return (
    <Fragment>
      <h1>{contentfulPost.title}</h1>
      <code>{JSON.stringify(contentfulPost, null, 2)}</code>
    </Fragment>
  );
};

export const data = graphql`
  query postQueryEmail($id: String) {
    contentfulPost(id: { eq: $id }) {
      title
      url
      type
      navigation
      template
    }
  }
`;

export default Page;