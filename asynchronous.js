async function fetchData() {
  const controller = new AbortController();
  const signal = controller.signal;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (signal.aborted) {
        reject("Request was aborted");
      } else {
        resolve({ user: "Guna", age: 21 });
      }
    }, 2000);
  });
}

// Cancel the request before it resolves
const controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

async function displayUser() {
  try {
    const data = await fetchData();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error:", error); // Fixed bug (removed .message)
  }
}

displayUser();