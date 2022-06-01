const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 3, 9, 10];
function containItem(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
console.log(containItem(arr1, arr2));

// compare two arrays and return true if they have the same items
