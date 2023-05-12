export const stagesQuery = `... on SectionStages{
  sys{
    id
  }
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
