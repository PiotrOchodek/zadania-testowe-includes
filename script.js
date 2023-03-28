const example = [0, 1, 2, 3, 4, 5];
// const includesExample = example.includes(1, 0);
// console.log(includesExample);

const includes = (array, eleToFind, fromIndex) => {
  for (let i = fromIndex; i < array.length; i++) {
    if (eleToFind === i) {
      return true;
    }
  }
};
console.log(includes(example, 2, 2));
