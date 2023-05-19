export const formQuery = `... on SectionForm {
  sys{
    id
  }
  position
  component
  formTitle
  workingEmail
  formNavigationCollection(limit: 7) {
    items {
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
  contactItemsCollection(limit: 5) {
    items {
      title
      icon {
        url
      }
      text
      socialItemsCollection(limit:5){
        items{
          link
          title
          socialIcon{
            url
          }
        }
      }
    }
  }
}
  `
