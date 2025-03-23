// Feature 1: Closure-based Counter
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
      console.log("Counter:", count);
    },
    decrement: function () {
      count--;
      console.log("Counter:", count);
    },
    getCount: function () {
      return count;
    },
  };
}

// Feature 2: Introduced a Memory Leak
function createLeakyFunction() {
  let hugeArray = new Array(1000000).fill("leak");

  return function () {
    console.log("This function is causing a memory leak!");
    console.log(hugeArray.length);
  };
}
