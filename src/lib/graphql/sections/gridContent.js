export const gridContentQuery = `... on SectionForm {
    position
    component
    formTitle
    workingEmail
    formNavigationCollection{
      items{
        title
        link
        noFollow
      }
    }
    formLink
    inputName
    inputEmail
    inputMessage
  }
  `
