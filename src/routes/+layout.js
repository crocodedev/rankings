export const prerender = 'auto'
export const load = ({ url }) => {
  const { pathname } = url

  return {
    pathname,
  }
}
