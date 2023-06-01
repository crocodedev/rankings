import { e as error } from "../../../../chunks/index.js";
import { c as contentfulFetch, b as heroImageQuery, e as breadcrumpsQuery, s as stagesQuery, a as heroQuery, S as SectionImageWithTextQuery, d as sectionTextContentImageQuery, h as headerQuery, i as footerQuery, g as gridContentQuery, f as formQuery } from "../../../../chunks/heroImage.js";
import { s as sectionRichTextQuery } from "../../../../chunks/richText.js";
const richTextQuery = (id) => `
{
  sectionRichText(id: "${id}") {
    component
    position
    title
    sys {
      id
    }
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
}
`;
const query = (slug) => `
{
  entityCardCollection(limit: 1, where: {
    url: "${slug}"
    
  }) {
    items {
      pageTitle
      tagList
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
      sectionsCollection(limit: 90) {
        items {
          ${heroImageQuery}
          ${breadcrumpsQuery}
          ${stagesQuery}
          ${heroQuery}
          ${SectionImageWithTextQuery}
          ${sectionTextContentImageQuery}
          ${sectionRichTextQuery}
          ${headerQuery}
          ${footerQuery}
          ${gridContentQuery}
          ${formQuery}
        }
      }
    }
  }
}
`;
async function load({ params, url }) {
  const response = await contentfulFetch(query(url.pathname));
  if (!response.ok) {
    return console.log(error);
  }
  const {
    data: {
      entityCardCollection: { items }
    }
  } = await response.json();
  let pageData = items[0];
  const richTextSections = pageData.sectionsCollection.items.filter(
    (el) => el.component === "RichText"
  );
  if (richTextSections.length > 0) {
    const richTextSectionsData = await Promise.allSettled(
      richTextSections.map(
        (el) => contentfulFetch(richTextQuery(el.sys.id)).then((el2) => el2.json())
      )
    ).then((el) => el.map((item) => item.value.data.sectionRichText));
    pageData = {
      ...pageData,
      sectionsCollection: {
        items: pageData.sectionsCollection.items.map((section) => {
          const fullRichText = richTextSectionsData.find(
            (richTextItem) => richTextItem?.sys?.id === section?.sys?.id
          );
          if (!fullRichText)
            return section;
          return {
            ...section,
            ...fullRichText
          };
        })
      }
    };
  }
  return pageData;
}
export {
  load
};
