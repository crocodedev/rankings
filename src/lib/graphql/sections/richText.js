export const sectionRichTextQuery = `... on SectionRichText {
  component
  position
  title
  richText {
    json
    links {
      assets {
        block {
          url
          sys {
            id
          }
        }
      }
      entries {
        block {
          sys {
            id
          }
        }
      }
    }
  }
}
`
