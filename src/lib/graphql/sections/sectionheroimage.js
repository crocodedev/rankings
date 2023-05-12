export const sectionHeroImageQuery = `... on SectionHeroImage{
    sys{
      id
    }
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
