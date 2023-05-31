import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/server/contentful-fetch'

import { stagesQuery } from '$lib/graphql/sections/stages'
import { heroQuery } from '$lib/graphql/sections/hero'
import { SectionImageWithTextQuery } from '$lib/graphql/sections/sectionimagewithtext'
import { sectionTextContentImageQuery } from '$lib/graphql/sections/textcontentimage'
import { headerQuery } from '$lib/graphql/sections/header'
import { sectionRichTextQuery } from '$lib/graphql/sections/richText'
import { footerQuery } from '$lib/graphql/sections/footer'
import { gridContentQuery } from '$lib/graphql/sections/gridContent'
import { breadcrumpsQuery, formQuery, heroImageQuery } from '$lib/graphql/sections'

export const prerender = true

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
`
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
`

export async function load({ params, url }) {
  const response = await contentfulFetch(query(url.pathname))

  if (!response.ok) {
    return console.log(error)
  }
  const {
    data: {
      entityCardCollection: { items },
    },
  } = await response.json()

  let pageData = items[0]

  const richTextSections = pageData.sectionsCollection.items.filter(
    (el) => el.component === 'RichText'
  )

  if (richTextSections.length > 0) {
    const richTextSectionsData = await Promise.allSettled(
      richTextSections.map((el) =>
        contentfulFetch(richTextQuery(el.sys.id)).then((el) => el.json())
      )
    ).then((el) => el.map((item) => item.value.data.sectionRichText))
    pageData = {
      ...pageData,
      sectionsCollection: {
        items: pageData.sectionsCollection.items.map((section) => {
          const fullRichText = richTextSectionsData.find(
            (richTextItem) => richTextItem?.sys?.id === section?.sys?.id
          )
          if (!fullRichText) return section
          return {
            ...section,
            ...fullRichText,
          }
        }),
      },
    }
  }

  return pageData
}
