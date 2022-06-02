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

function closure() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
let memoized = closure();
console.log(memoized(10));

function fibDynamic() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function bestTimetoBuyandSellStock(arr) {
let profit = 0;
let minProfit = -Infinity
for (let i = 0; i < arr.length; i++) {
    if(arr[i] < minProfit) {
        minProfit = arr[i];
    }
  let currentProfit = arr[i] - minProfit;
    if (currentProfit > profit) {
        profit = currentProfit;
    }

}
return profit;
}


function climbingStairs(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return climbingStairs(n - 1) + climbingStairs(n - 2);
  
}