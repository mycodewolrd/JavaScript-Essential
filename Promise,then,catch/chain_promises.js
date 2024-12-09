// const url = "https://anapioficeandfire.com/api/characters/581";

// function step1(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       fetch(url)
//         .then((response) => {
//           console.log(`Data Port: ${response.status}`);
//           if (response.status !== 200)
//             throw new Error(`Faild ${response.status}`);
//           return response.json();
//         })
//         .then((data) => {
//         //   console.log(`Fetching success response ${JSON.stringify(data,null,2)}`);
//           resolve("First Step completed successfully");
//         })
//         .catch((error) => {
//           console.log(`Fetching error response`);
//           reject(error);
//         });
//     }, 2000);
//   });
// }
// function step2(dataTwo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         // console.log(`Second Step is completed ${dataTwo}`);
//         resolve(" Second Step completed successfully ");
//       } catch (error) {
//         console.log(`somthing wrong ${error}`);
//         reject(error);
//       }
//     }, 2000);
//   });
// }
// function step3(dataThree) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         console.log(`Third Step is completed ${dataThree}`);
//         resolve("Third Step completed successfully");
//       } catch (error) {
//         console.log(`somthing wrong ${error}`);
//         reject(error);
//       }
//     }, 5000);
//   });
// }

// step1(url)
//   .then((data) => {
//     console.log(`Step 1 is completed Data: ${data}`);
//     step2(data);
//   })
//   .then((data) => {
//     step3(data);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(`Error: ${error}`);
//   });

const url = "https://anapioficeandfire.com/api/characters/581";

function step1(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          console.log(`Data Port: ${response.status}`);
          if (response.status !== 200)
            throw new Error(`Failed ${response.status}`);
          return response.json();
        })
        .then((data) => {
          console.log(
            `Fetching success response: ${JSON.stringify(data, null, 2)}`
          );
          resolve("First Step completed successfully");
        })
        .catch((error) => {
          console.log(`Fetching error response`);
          reject(error);
        });
    }, 2000);
  });
}

function step2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(`Second Step is completed: ${data}`);
        resolve("Second Step completed successfully");
      } catch (error) {
        console.log(`Something went wrong: ${error}`);
        reject(error);
      }
    }, 2000);
  });
}

function step3(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(`Third Step is completed: ${data}`);
        resolve("Third Step completed successfully");
      } catch (error) {
        console.log(`Something went wrong: ${error}`);
        reject(error);
      }
    }, 5000);
  });
}

// Chain the promises properly
step1(url)
  .then((data) => {
    console.log(`Step 1 is completed. Data: ${data}`);
    return step2(data); // Return the promise to chain
  })
  .then((data) => {
    console.log(`Step 2 is completed. Data: ${data}`);
    return step3(data); // Return the promise to chain
  })
  .then((data) => {
    console.log(`Step 3 is completed. Data: ${data}`);
    return data;
  })
  .then((data) => {
    console.log(`Final step is completed: ${data}`);
  })
  .catch((error) => {
    console.error(`Error: ${error}`);
  });
