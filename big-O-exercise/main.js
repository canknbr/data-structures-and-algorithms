function exerciseOne(input) {
  let a = 10;
  a = 50 + 3;
  for (let i = 0; i < input; i++) {
    a += 1;
  }
  return a;
}

// exerciseOne big-O complexity: O(n) - linear because it has to loop through the input number of times

function exerciseTwo(input) {
  let a = 10;
  let b = 1;
  let c = 11;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i * 2;
    let z = i + 2;
  }
  for (let j = 0; j < input; j++) {
    let x = j + 1;
    let y = j * 2;
    let z = j + 2;
  }
  let str = 'Lorem, ipsum dolor.';
  return str;
}
// bigO(4 + 5n) = O(n)
// exerciseTwo big-O complexity: O(n) - linear because it has to loop through the input number of times