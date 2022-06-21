import React from 'react';
import { graphql } from 'gatsby';

import HomeTemplate from '../templates/homeTemplate';
import BlogTemplate from '../templates/blogTemplate';
import DefaultTemplate from '../templates/defaultTemplate';

const getTemplate = (contentfulPost) => {
  const { template } = contentfulPost;

  switch (template) {
    case 'home':
      return <HomeTemplate {...contentfulPost} />;
    case 'blog':
      return <BlogTemplate {...contentfulPost} />;

    default:
      return <DefaultTemplate {...contentfulPost} />;
  }
};

const Page = ({ data: { contentfulPost } }) => {
  return <main>{getTemplate(contentfulPost)}</main>;
};

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPost(id: { eq: $id }) {
      template
      title
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

export default Page;