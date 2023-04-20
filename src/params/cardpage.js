export function match(param) {
  console.log('cardpage => ', param)
  return /(cases|blog|services)(\/[\w-]*)*$/.test(param)
}
