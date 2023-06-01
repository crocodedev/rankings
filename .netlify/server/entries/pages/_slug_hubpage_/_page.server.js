import { e as error } from "../../../chunks/index.js";
import { c as contentfulFetch, a as heroQuery, b as heroImageQuery, e as breadcrumpsQuery, h as headerQuery, s as stagesQuery, g as gridContentQuery, d as sectionTextContentImageQuery, S as SectionImageWithTextQuery, f as formQuery, i as footerQuery } from "../../../chunks/heroImage.js";
const query = (slug) => `
{
	entityContentCategoryCollection(where: {
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
      pageName
      url
      contentType
      sectionsCollection (limit:90){
        items {
          ${heroQuery}
          ${heroImageQuery}
          ${breadcrumpsQuery}
          ${headerQuery}
          ${stagesQuery}
          ${gridContentQuery}
          ${sectionTextContentImageQuery}
          ${SectionImageWithTextQuery}
          ${formQuery}
          ${footerQuery}
        }
      }
    }
  }
}
`;
const cardsQuery = (categoryType) => `
{
  entityCardCollection(where: {
    contentTypeCard: "${categoryType}"
  }) {
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
      titleCard
      textCard
      subtitleCard
      tagList
      url
      imageCard {
        url
      }
      blogCardVariation
    }
  }
}
`;
const chooseCorrectType = {
  Blog: "blogCard",
  Case: "caseCard",
  Service: "serviceCard"
};
async function load({ params, url }) {
  const response = await contentfulFetch(query(`/${params.slug}`));
  if (!response.ok) {
    return console.log(error);
  }
  const { data } = await response.json();
  const categoryType = chooseCorrectType[data.entityContentCategoryCollection.items[0].contentType];
  const cards = await contentfulFetch(cardsQuery(categoryType)).then((res) => res.json()).then((res) => res.data.entityCardCollection.items);
  return { pageData: data.entityContentCategoryCollection.items[0], cards };
}
export {
  load
};
