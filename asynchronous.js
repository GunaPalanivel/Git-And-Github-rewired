function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { user: "Guna", age: 21 };
      resolve(data);
    }, 2000);
  });
}

fetchData().then((data) => console.log("User Data:", data));

