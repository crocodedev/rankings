export const stagesQuery = `... on SectionStages{
    position
    component
    stagesTitle
    stagesSubtitle
    stagesListCollection{
      items{
        stagesText
        stagesNum
        stageName
      }
    }
  }
`
