import { graphql, useStaticQuery } from 'gatsby';

const useLatestEmailPosts = () => {
  const {
    allContentfulPost: { nodes }
  } = useStaticQuery(graphql`
    query latestEmailLinksQuery {
      allContentfulPost(sort: { fields: createdAt, order: DESC }, limit: 3) {
        nodes {
          title
          gatsbyPath(filePath: "/Blog/{contentfulPost.url}")
          createdAt
        }
      }
    }
  `);
  return nodes;
};

export default useLatestEmailPosts;