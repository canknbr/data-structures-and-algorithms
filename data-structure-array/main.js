class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

function reverseString(str) {
  let arr = new myArray();
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  let reversed = '';
  for (let i = 0; i < arr.length; i++) {
    reversed += arr.pop();
  }
  return reversed;
}

function reverseStringwithReverseMethod(str) {
  if (!str || str.length < 2 || typeof str !== 'string')
    return 'string is not valid';
  return str.split('').reverse().join('');
}

function mergeTwoArrays(arr1, arr2) {
  let arr = new myArray();
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    arr.push(arr2[i]);
  }
  return arr;
}

function mergeTwoArrayswithConcat(arr1, arr2) {
  return arr1.concat(arr2);
}
function mergeTwoArrayswithSpread(arr1, arr2) {
  return [...arr1, ...arr2];
}

// sample question
function twoSum(nums, target) {
  let arr = [];
  nums.forEach((num, index) => {
    let temp = target - num;
    if (nums.indexOf(temp) !== -1) {
      arr.push(index, nums.indexOf(temp));
    }
  });
  return arr;
}
function maximumSubarray(arr) {
  return arr.filter(item => item > 0).reduce((acc, item) => acc + item, 0);
}
function moveToEndZero(arr) {
  let zeros = arr.filter(item => item === 0);
  let nonZeros = arr.filter(item => item !== 0);
  return [...nonZeros, ...zeros];
}

function containsDuplicate(nums) {
  let set = new Set(nums);
  return set.size !== nums.length;
}
function rotateArray(arr, k) {
  let temp = arr.slice(0, k);
  return [...arr.slice(k), ...temp];
}

function longestWord(str) {
  let arr = str.split(' ');
  let longest = '';
  arr.forEach(item => {
    if (item.length > longest.length) {
      longest = item;
    }
  });
  return longest;
}
