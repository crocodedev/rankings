export function match(param) {
  console.log('cardpage => ', param, 'match => ', /(cases|blog|services)(\/[\w-]*)*$/.test(param))
  return /(cases|blog|services)(\/[\w-]*)*$/.test(param)
}
