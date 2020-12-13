import gql from 'graphql-tag';

const PAGE_QUERY = gql`
query{
 homePages{
  id
  introTitle1
  introTitle2
  jobDescription
  bioTitle1
  bioTitle2
  bioDescription
  createdAt
  introImages{
   id
   url
  }
  parallaxImages{
   id
   url
  }
 }
}
`;

export default PAGE_QUERY;