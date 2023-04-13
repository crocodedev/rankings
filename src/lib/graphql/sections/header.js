export const headerQuery = `... on Header {
  position
  component
  sys {
    id
  }
  logo {
    url
  }
  navigationCollection(limit: 7) {
    items {
      title
      socialIcon{
        title
      }
      link
      noFollow
      subItemsCollection(limit: 9) {
        items {
          title
          link
          noFollow
        }
      }
    }
  }
} 
`
