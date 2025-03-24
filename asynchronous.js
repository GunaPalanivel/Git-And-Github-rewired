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
    // Simulating a delay for UI responsiveness
    await new Promise((resolve) => setTimeout(resolve, 500));

    const data = await fetchData();

    // Additional validation for empty or undefined data
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
