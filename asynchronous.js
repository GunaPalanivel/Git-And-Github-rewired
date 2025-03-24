async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ user: "Guna", age: 21 });
    }, 2000);
  });
}

async function displayUser() {
  const data = await fetchData();
  console.log("User Data:", data);
}

displayUser();