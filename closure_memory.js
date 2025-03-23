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
    },
  };
}

// Feature 4: Introduced a Security Flaw (Returns ***** instead of actual secret data.)
function createSecureStorage() {
    let secretData = "SuperSecret";

    return {
        getSecret: function () {
            console.log("Access Denied!");
            return "*****";
        },
        setSecret: function (newSecret) {
            secretData = newSecret;
        }
    };
}

// Feature 5: Lazy Loader with Caching
function createCachedLoader() {
    let cache = null;
    
    return {
        fetchData: function () {
            if (!cache) {
                console.log("Fetching data...");
                cache = { user: "John Doe", age: 30 };
            } else {
                console.log("Returning cached data.");
            }
            return cache;
        }
    };
}