// memo
let cache = {};
function memoizedAddto80(n) {
  if (n in cache) return cache[n];
  else {
    cache[n] = n + 80;
    return cache[n];
  }
}
console.log(memoizedAddto80(10));
