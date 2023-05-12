export const breadcrumpsQuery = `... on SectionBreadcrumps{
    sys{
      id
    }
    component
    position
    breadcrumpsListCollection{
      items{
        title
        link
        noFollow
      }
    }
  }
  `
