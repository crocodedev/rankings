import { error } from '@sveltejs/kit'
import contentfulFetch from '$lib/contentful-fetch'

export async function load({ params }) {
  console.log(params)
  //   const response = await contentfulFetch(query)
  //   if (!response.ok) {
  //     return {
  //       employees: [],
  //     }
  //   }

  //   const { data } = await response.json()
  //   const { items } = data.employeeCollection
  //   return {
  //     employees: items?.map((e) => {
  //       const options = { month: 'long', year: 'numeric' }
  //       const date = new Date(e.startDate)
  //       const formattedStartDate = new Intl.DateTimeFormat('en-US', options).format(date)

  //       return {
  //         ...e,
  //         startDate: formattedStartDate,
  //       }
  //     }),
  //   }
}

// const query = `
// {
// 	employeeCollection{
//     items{
//       name,
//       jobTitle
//       startDate
//       photo {
//         url(transform: {
//           format: AVIF
//         })
//         description
//       }
//     }
//   }
// }
// `
