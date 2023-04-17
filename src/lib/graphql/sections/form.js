export const formQuery = `... on SectionForm {
    position
    component
    formTitle
    workingEmail
    formNavigationCollection (limit:7){
      items{
        title
        link
        noFollow
      }
    }
    formLink
    buttonText
    policyText
    inputName
    inputEmail
    inputMessage
  }
  `
