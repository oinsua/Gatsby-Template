import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import useAllBlogPosts from '../hooks/useAllBlogPosts';

const BlogTemplate = (contentfulPost) => {
  const allBlogPosts = useAllBlogPosts();

  return (
    <Fragment>
      <h1>{contentfulPost.title}</h1>
      <p>{contentfulPost.description.description}</p>
      {contentfulPost.image ? (
        <img src={contentfulPost.image.file.url} alt={contentfulPost.title} />
      ) : null}
      <ul>
        {allBlogPosts.map((node, index) => {
          const { title, gatsbyPath } = node;
          return (
            <li key={index}>
              <Link to={gatsbyPath}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default BlogTemplate;