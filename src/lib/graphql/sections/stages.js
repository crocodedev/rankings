export const stagesQuery = `... on SectionStages{
  position
  component
  stagesTitle
  stagesSubtitle
  stagesListCollection(limit: 5) {
    items{
      blockTitle
      stagesText
      stagesNum
      stageName
    }
  }
}
`
