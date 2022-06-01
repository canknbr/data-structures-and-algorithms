let user = {
  age: 20,
  name: 'John',
  magic: true,
  scream() {
    console.log('lorem ipsum');
  },
};
user.age; // o(1)
user.spell = 'abra kadabra'; // o(1)

user.scream(); // o(1)

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          if (!keysArray.includes(this.data[i][j][0])) {
            keysArray.push(this.data[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }
}
function firstRecurringCharacter(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      return arr[i];
    }
  }
  return undefined;
} // using hash table and bigO of O(n)
function firstRecurringCharacterwithForEach(input) {
  const char = input.forEach(item =>
    input.forEach(item2 => {
      if (item === item2) {
        return item;
      }
    })
  );
  if (char.length === 0) {
    return undefined;
  }
  return char.join('');
} // using forEach and bigO of O(n^2)
