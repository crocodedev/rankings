// export function match(param) {
//   return /(cases|blog|services)\/{0,1}$/.test(param)
// }

export function match(param) {
  console.log('hubpage => ', param, 'match => ', /(cases|blog|services)(\/[\w-]*)*$/.test(param))
  return /(cases|blog|services)(\/[\w-]*)*$/.test(param)
}
