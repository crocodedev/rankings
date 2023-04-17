export const gridContentQuery = `  ... on SectionGridContent {
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
        imageCard {
          url
        }
        textCard
        contentTypeCard
        categoriesListCollection(limit:7){
          items{
            tagName
            url
            pageName
          }
        }
      }
    }
  }
}
  `
