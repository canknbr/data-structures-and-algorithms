const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 3, 9, 10];
function containItem(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
console.log(containItem(arr1, arr2));

// compare two arrays and return true if they have the same items

function containsCommonItem(arr1, arr2) {
  let map = {};
  arr1.forEach(i => {
    if (!map[i]) {
      let item = arr1[i];
      map[item] = true;
    }
  });
  arr2.forEach(i => {
    if (map[i]) {
      return true;
    }
  });
}
// compare two arrays and return true if they have the same items

function hasPairWithSum(arr, num) {
  let set = new Set();
  arr.forEach(i => {
    if (set.has(i)) {
      return true;
    }
    set.add(num - i);
  });
  return false;
}
// google interview question - given an array of numbers, return true if there is a pair of numbers that sum to 0
