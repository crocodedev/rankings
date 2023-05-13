export const heroImageQuery = ` ... on SectionHeroImage {
  sys{
    id
  }
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
  buttonListCollection(limit:5){
    items
    {
      title
      link
    }
  }
}
  `
