import { graphql, useStaticQuery } from 'gatsby';

const useTopNavigation = () => {
  const {
    allContentfulPost: { nodes }
  } = useStaticQuery(graphql`
    query TopNavQuery {
      allContentfulPost(
        filter: { navigation: { eq: "top-navigation" } }
        sort: { fields: url }
      ) {
        nodes {
          url
          title
        }
      }
    }
  `);
  return nodes;
};

export default useTopNavigation;