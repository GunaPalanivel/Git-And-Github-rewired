async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Failed to fetch data!");
      } else {
        resolve({ user: "Guna", age: 21 });
      }
    }, 2000);
  });
}

async function displayUser() {
  try {
    const data = await fetchData();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

displayUser();