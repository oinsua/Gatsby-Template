import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import useLatestBlogPosts from '../hooks/useLatestEmailPosts';

const HomeTemplate = (contentfulPost) => {
  const latestBlogPosts = useLatestBlogPosts();
  console.log({contentfulPost});
  console.log({latestBlogPosts});
  return (
    <>
      <h1>{contentfulPost.title}</h1>
      <p>{contentfulPost.description.description}</p>
      {contentfulPost.image ? (
        <img src={contentfulPost.image.file.url} alt={contentfulPost.title} />
      ) : null}
      <h2>Latest Posts</h2>
      <ul>
        {latestBlogPosts.slice(0, 3).map((node, index) => {
          const { title, gatsbyPath } = node;
          return (
            <li key={index}>
              <Link to={gatsbyPath}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomeTemplate;