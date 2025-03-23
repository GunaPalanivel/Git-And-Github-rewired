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
    getSecret: function (auth) {
      if (auth === "admin") {
        return secretData; // Only authorized users can access the secret
      }
      console.log("Access Denied!");
      return "*";
    },
    setSecret: function (newSecret, auth) {
      if (auth === "admin") {
        secretData = newSecret;
        console.log("Secret updated successfully.");
      } else {
        console.log("Unauthorized attempt to modify secret.");
      }
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
    },
  };
}

// Feature 5: Lazy Loader with Caching
function createCachedLoader() {
  let cache = null;
  let cacheTime = null;
  const CACHE_DURATION = 5000;

  return {
    fetchData: function () {
      const currentTime = Date.now();
      if (!cache || (cacheTime && currentTime - cacheTime > CACHE_DURATION)) {
        console.log("Fetching fresh data...");
        cache = { user: "John Doe", age: 30 };
        cacheTime = currentTime;
      } else {
        console.log("Returning cached data.");
      }
      return cache;
    },
    invalidateCache: function () {
      console.log("Cache invalidated.");
      cache = null;
      cacheTime = null;
    },
  };
}

// Feature 6: Introduced a Loader
function createOptimizedLoader() {
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
    },
  };
}

// Feature 7: Expiring Cache Feature
function createExpiringCacheLoader() {
  let cache = null;
  let cacheTime = null;
  const CACHE_DURATION = 5000;

  return {
    fetchData: function () {
      const currentTime = Date.now();
      if (!cache || (cacheTime && currentTime - cacheTime > CACHE_DURATION)) {
        console.log("Fetching fresh data...");
        cache = { user: "John Doe", age: 30 };
        cacheTime = currentTime;
      } else {
        console.log("Returning cached data.");
      }
      return cache;
    },
  };
}

// Feature 8: Rate Limiter
function createRateLimiter(limit, interval) {
  let callCount = 0;
  let startTime = Date.now();

  return {
    execute: function (fn) {
      const currentTime = Date.now();
      if (currentTime - startTime > interval) {
        startTime = currentTime;
        callCount = 0;
      }

      if (callCount < limit) {
        callCount++;
        fn();
      } else {
        console.log("Rate limit exceeded. Try again later.");
      }
    },
  };
}
