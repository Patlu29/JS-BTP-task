// fibonacci series using recursion

function recurse(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  let recurseNumber = recurse(num - 1) + recurse(num - 2);

  return recurseNumber;
}

console.log(recurse(10))
