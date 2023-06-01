const CONTENTFUL_SPACE_ID = "7nazxz33277c";
const CONTENTFUL_ACCESS_TOKEN = "-go2NZ40hWgEl0Bj2ub3J3obyxT6gZOFegkV028UK9s";
const contentfulFetch = async (query) => {
  const url = "https://graphql.contentful.com/content/v1/spaces/" + CONTENTFUL_SPACE_ID;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + CONTENTFUL_ACCESS_TOKEN
    },
    body: JSON.stringify({ query })
  });
  return response;
};
const stagesQuery = `... on SectionStages{
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
`;
const heroQuery = `... on SectionHero{
    sys{
      id
    }
    position
    component
    titleHero
    subtext
    buttonText
    buttonLink
    scrollDownText
    sys {
      id
    }
  }
`;
const SectionImageWithTextQuery = `... on SectionImageWithText{
    sys{
      id
    }
    position
    component
    imageTextTitle
    imageTextText
    buttonLink
    buttonText
    image{
      url
    }
  }
`;
const sectionTextContentImageQuery = `... on SectionTextContentImage {
    sys {
      id
    }
    position
    component
    title
    text
    image{
        url
    }
    textAlign
  }
`;
const headerQuery = `... on Header {
  position
  component
  sys {
    id
  }
  logo {
    url
  }
  socialsCollection (limit:7){
    items{
      link
      socialIcon{
        url
      }
    }
  }
  mobileMenuLinksCollection(limit:5){
    items{
      title
      link
    }
  }
  navigationCollection(limit: 7) {
    items {
      title
      socialIcon{
        title
      }
      link
      noFollow
      subItemsCollection(limit: 9) {
        items {
          title
          link
          noFollow
        }
      }
    }
  }
}
`;
const footerQuery = `... on SectionFooter {
  sys{
    id
  }
  position
  component
  footerRights
  socialLinksCollection(limit: 10) {
    items {
      socialIcon{
        url
      }
      link
      noFollow      
    }
  }
  footerTermsPolicyCollection(limit: 10) {
    items {
      title
      link
      noFollow
    }
  }
}
`;
const gridContentQuery = `... on SectionGridContent {
  sys{
    id
  }
  component
  position
  title
  subtitle
  linkMore{
    title
    link
  }
  contentListCollection(limit: 20) {
    items {
      ... on EntityCard {
        seo {
          titleTemplate
          title
          description
          keywords
          image {
            url
            fileName
            description
            width
            height
          }
          ogype
          twittercard
        }
        titleCard
        subtitleCard
        url
        imageCard {
          url
        }
        textCard
        contentTypeCard
        tagList
      }
      ... on BlockListItem {
        icon{
          url
        }
        title
        text
      }
    }
  }
}
  `;
const breadcrumpsQuery = `... on SectionBreadcrumps{
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
  `;
const formQuery = `... on SectionForm {
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
  `;
const heroImageQuery = ` ... on SectionHeroImage {
  sys{
    id
  }
  position
  component
  text
  title
  percent
  image {
    url
  }
  linkData {
    title
    link
  }
  tagListCollection{
    items{
      title
    }
  }
  buttonListCollection(limit:5){
    items
    {
      title
      link
    }
  }
  diagramListCollection(limit:5){
    items{
      title
      diagramColor
    }
  }
}
  `;
export {
  SectionImageWithTextQuery as S,
  heroQuery as a,
  heroImageQuery as b,
  contentfulFetch as c,
  sectionTextContentImageQuery as d,
  breadcrumpsQuery as e,
  formQuery as f,
  gridContentQuery as g,
  headerQuery as h,
  footerQuery as i,
  stagesQuery as s
};
