export const stagesQuery = `... on SectionStages{
  position
  component
  stagesTitle
  stagesSubtitle
  stagesListCollection(limit: 10) {
    items{
      blockTitle
      stagesText
      stagesNum
      stageName
    }
  }
}
`
