import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/server/contentful-fetch'
import { stagesQuery } from '../../lib/graphql/sections/stages'
// import { heroQuery } from '../../lib/graphql/sections/hero'

const query = (slug) => `
{
  pageCollection(where: {
    url: "${slug}"
  } limit: 1) {
    items {
      name
      url
      sectionsCollection (limit:100) {
         items{
          ${stagesQuery}
        }
      }
    }
  }
}
`

export async function load({ params }) {
  const response = await contentfulFetch(query(`/${params.slug}`))
  if (!response.ok) {
    return console.log(error)
  }

  const { data } = await response.json()
  return data.pageCollection.items[0]
}
