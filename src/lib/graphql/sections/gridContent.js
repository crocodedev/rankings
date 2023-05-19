export const gridContentQuery = `... on SectionGridContent {
  sys{
    id
  }
  component
  position
  title
  subtitle
  linkMore{
    title
    link
  }
  contentListCollection(limit: 20) {
    items {
      ... on EntityCard {
        seo {
          titleTemplate
          title
          description
          keywords
          image {
            url
            fileName
            description
            width
            height
          }
          ogype
          twittercard
        }
        titleCard
        subtitleCard
        url
        imageCard {
          url
        }
        textCard
        contentTypeCard
        tagList
      }
      ... on BlockListItem {
        icon{
          url
        }
        title
        text
      }
    }
  }
}
  `
