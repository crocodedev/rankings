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
  entityCardCollection(limit: 1, where: {
    url: "${slug}"
  }) {
    items {
      pageTitle
      tagList
      sectionsCollection(limit: 100) {
        items {
          ${heroImageQuery}
          ${breadcrumpsQuery}
          ${stagesQuery}
          ${heroQuery}
          ${SectionImageWithTextQuery}
          ${sectionTextContentImageQuery}
          ${headerQuery}
          ${footerQuery}
          ${gridContentQuery}
          ${formQuery}
        }
      }
    }
  }
}
`

export async function load({ params, url }) {
  const response = await contentfulFetch(query(url.pathname))

  if (!response.ok) {
    return console.log(error)
  }
  const { data } = await response.json()

  return data.entityCardCollection.items[0]
}