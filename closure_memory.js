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

// Feature 2: Introduced a Memory Leak (Fixed Memory Leak)
function createFixedFunction() {
    return function () {
        let hugeArray = new Array(1000000).fill("temporary data");
        console.log("Function executed with temporary data.");
        console.log(hugeArray.length);
        hugeArray = null; // Free memory
    };
}

// Feature 3: Added Secure Storage
function createSecureStorage() {
    let secretData = "SuperSecret";

    return {
        getSecret: function () {
            console.log("Access Denied!");
            return "*****"; // Prevents direct access
        },
        setSecret: function (newSecret) {
            secretData = newSecret;
        }
    };
}