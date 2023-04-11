export const stagesQuery = `... on SectionStages{
  position
  component
  stagesTitle
  stagesSubtitle
  stagesListCollection{
    items{
      blockTitle
      stagesText
      stagesNum
      stageName
    }
  }
}
`
