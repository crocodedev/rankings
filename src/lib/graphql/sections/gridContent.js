export const gridContentQuery = `... on SectionGridContent {
  component
  position
  title
  subtitle
  seeMoreText
  contentListCollection(limit: 10) {
    items {
      ... on EntityCard {
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
