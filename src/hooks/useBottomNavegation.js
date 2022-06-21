import { graphql, useStaticQuery } from 'gatsby';

const useBottomNavigation = () => {
  const {
    allContentfulPost: { nodes }
  } = useStaticQuery(graphql`
    query BottomNavQuery {
      allContentfulPost(
        filter: { navigation: { eq: "bottom-navigation" } }
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

export default useBottomNavigation;