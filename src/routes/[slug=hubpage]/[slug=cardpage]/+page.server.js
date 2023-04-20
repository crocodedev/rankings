import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/server/contentful-fetch'

import { stagesQuery } from '$lib/graphql/sections/stages'
import { heroQuery } from '$lib/graphql/sections/hero'
import { SectionImageWithTextQuery } from '$lib/graphql/sections/sectionimagewithtext'
import { sectionTextContentImageQuery } from '../../lib/graphql/sections/textcontentimage'
import { headerQuery } from '../../lib/graphql/sections/header'
import { footerQuery } from '../../lib/graphql/sections/footer'
import { gridContentQuery } from '../../lib/graphql/sections/gridContent'
import { formQuery } from '../../lib/graphql/sections'

const query = (slug) => `
{
  entityCardCollection {
    items {
      titleCard
      subtitleCard
      imageCard {
        url
      }
      categoriesListCollection {
        items {
          url
					tagName
        }
      }
      contentTypeCard
    }
  }
}
`

export async function load({ params, url }) {
  // console.log(params.slug)
  // console.log(url.pathname)
  const response = await contentfulFetch(query(`/${params.slug}`))

  if (!response.ok) {
    return console.log(error)
  }
  const { data } = await response.json()
  return {} // data.entityCardCollection.items[0]
}
