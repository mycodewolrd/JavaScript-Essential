// const url = "https://anapioficeandfire.com/api/characters/581";

// function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         console.log(`Fetching status: ${response.status}`);
//         if (response.status !== 200) {
//           throw new Error("Error fetching");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetching data:", data); // log the raw object here
//         resolve(data);
//       })
//       .catch((error) => {
//         console.error(`Fetching Error: ${error}`);
//         reject(error);
//       });
//   });
// }

// fetchData(url)
//   .then((data) => {
//     // Here we log the data object directly (no need to stringify it)
//     console.log("Data display:", data);
//   })
//   .catch((error) => {
//     console.error(`Something went wrong: ${error}`);
//   });

// ***********************************************************************************

const url = "https://finalspaceapi.com/api/v0/episode/";

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        // Check if the response is successful
        if (response.status !== 200) throw new Error("Fetching data failed");
        console.log(`Status: ${response.status}`);

        // Return the parsed JSON from the response
        return response.json();
      })
      .then((data) => {
        // Log the data clearly to inspect its format
        console.log(`Data received: ${JSON.stringify(data, null, 2)}`);
        resolve(data); // Resolve the promise with data
      })
      .catch((error) => {
        // Log the error if something goes wrong
        console.error(`Error: ${error.message}`);
        reject(error); // Reject the promise with the error
      });
  });
}

fetchData(url)
  .then((data) => {
    // Log the data in a readable format
    console.log(`Data fetched: ${JSON.stringify(data, null, 2)}`);
  })
  .catch((error) => {
    // Handle error if fetching fails
    console.error(`Fetching data failed: ${error.message}`);
  });
