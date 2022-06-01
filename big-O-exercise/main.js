function exerciseOne(input) {
  let a = 10;
  a = 50 + 3;
  for (let i = 0; i < input; i++) {
    a += 1;
  }
  return a;
}

// exerciseOne big-O complexity: O(n) - linear because it has to loop through the input number of times
