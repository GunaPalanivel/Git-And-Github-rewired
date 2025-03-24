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
  console.log("Loading...");

  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const data = await fetchData();

    if (!data || Object.keys(data).length === 0) {
      throw new Error("No user data available");
    }

    console.log("User Data:", data);
  } catch (error) {
    console.error("Error:", error.message || error);
  } finally {
    console.log("Process Completed.");
  }
}

displayUser();
