import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/server/contentful-fetch'
import { stagesQuery } from '$lib/graphql/sections/stages'
import { heroQuery } from '$lib/graphql/sections/hero'
import { SectionImageWithTextQuery } from '$lib/graphql/sections/sectionimagewithtext'
import { sectionTextContentImageQuery } from '$lib/graphql/sections/textcontentimage'
import { headerQuery } from '$lib/graphql/sections/header'
import { footerQuery } from '$lib/graphql/sections/footer'
import { gridContentQuery } from '$lib/graphql/sections/gridContent'
import { breadcrumpsQuery, formQuery, heroImageQuery } from '$lib/graphql/sections'

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
`

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
`

const chooseCorrectType = {
  Blog: 'blogCard',
  Case: 'caseCard',
  Service: 'serviceCard',
}

export async function load({ params, url }) {
  const response = await contentfulFetch(query(`/${params.slug}`))

  if (!response.ok) {
    return console.log(error)
  }

  const { data } = await response.json()

  const categoryType = chooseCorrectType[data.entityContentCategoryCollection.items[0].contentType]
  const cards = await contentfulFetch(cardsQuery(categoryType))
    .then((res) => res.json())
    .then((res) => res.data.entityCardCollection.items)

  return { pageData: data.entityContentCategoryCollection.items[0], cards }
}
