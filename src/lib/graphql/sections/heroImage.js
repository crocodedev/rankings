export const heroImageQuery = ` ... on SectionHeroImage {
  position
  component
  text
  title
  image {
    url
  }
  linkData {
    title
    link
  }
  tagListCollection{
    items{
      title
    }
  }
}
  `
