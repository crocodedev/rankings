export const headerQuery = `... on Header {
  position
  component
  sys {
    id
  }
  logo {
    url
  }
  navigationCollection {
    items {
      title
      socialIcon{
        title
      }
      link
      noFollow
      subItemsCollection {
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
