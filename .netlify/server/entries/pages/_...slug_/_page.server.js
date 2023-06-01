import { e as error } from "../../../chunks/index.js";
import { c as contentfulFetch, h as headerQuery, a as heroQuery, s as stagesQuery, b as heroImageQuery, g as gridContentQuery, d as sectionTextContentImageQuery, S as SectionImageWithTextQuery, f as formQuery, e as breadcrumpsQuery, i as footerQuery } from "../../../chunks/heroImage.js";
import { s as sectionRichTextQuery } from "../../../chunks/richText.js";
const query = (slug) => `
{
  pageCollection(where: {
    url: "${slug}"
  } limit: 1) {
    items {
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
      name
      url
      sectionsCollection (limit:90) {
         items{
          ${headerQuery}
          ${heroQuery}
          ${stagesQuery}
          ${heroImageQuery}
          ${gridContentQuery}
          ${sectionRichTextQuery}
          ${sectionTextContentImageQuery}
          ${SectionImageWithTextQuery}
          ${formQuery}
          ${breadcrumpsQuery}
          ${footerQuery}
        }
      }
    }
  }
}
`;
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
async function load({ params, url }) {
  const response = await contentfulFetch(query(`/${params.slug}`));
  if (!response.ok) {
    return console.log(error);
  }
  const {
    data: {
      pageCollection: { items }
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
