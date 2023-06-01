function match(param) {
  return /(cases|blog|services)(\/[\w-]*)*$/.test(param);
}
export {
  match
};
