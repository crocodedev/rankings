export const sectionHeroImageQuery = `... on SectionHeroImage{
    position
    component
    image{
      url
    }
    title
    text
    buttonListCollection(limit: 10) {
      items{
        title
        link
        noFollow
      }
    }
  }

`
