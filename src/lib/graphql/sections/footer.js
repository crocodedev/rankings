export const footerQuery = `... on SectionFooter {
  position
  component
  footerRights
  socialLinksCollection(limit: 10) {
    items {
      socialIcon{
        url
      }
      link
      noFollow
    }
  }
  footerTermsPolicyCollection(limit: 10) {
    items {
      title
      link
      noFollow
    }
  }
}
`
