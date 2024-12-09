function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         console.log(`Response status: ${response.status}`); // Debugging statement
//         if (response.status !== 200) throw new Error("Fetching data failed");
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Data received:", data); // Debugging statement
//         resolve(data);
//       })
//       .catch((error) => {
//         console.error("Error during fetch:", error); // Debugging statement
//         reject(error);
//       });
//   });
// }

// fetchData(url)
//   .then((data) => console.log(`Data fetched: ${JSON.stringify(data)}`)) // Use JSON.stringify to properly format the output
//   .catch((error) => console.error(`Fetching data failed: ${error.message}`)); // Improved error message
