import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/server/contentful-fetch'

const query = (slug) => `
{
  pageCollection(where: {
    url: "${slug}"
  } limit: 1) {
    items {
      name
      url
      sectionsCollection (limit:100) {
        items {
          logo {
            url
          }
          navigationCollection (limit: 15) {
            items {
              noFollow
              link
              title
            }
          }
        }
      }
    }
  }
}
`

export async function load({ params }) {
  const response = await contentfulFetch(query(`/${params.slug}`))
  console.log(response)
  if (!response.ok) {
    return {}
  }

  const { data } = await response.json()
  return data
}
