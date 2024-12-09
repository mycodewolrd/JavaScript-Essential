//* Waiting for Multiple Promises to Resolve

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Promise -1 `);
    resolve("Promise - 1 is completed");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Promise -2 `);
    resolve("Promise - 2 is completed");
  }, 4000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Promise -3 `);
    resolve("Promise - 3 is completed");
  }, 6000);
});

Promise.all([promise1, promise2, promise3])
  .then((data) => {
    setTimeout(() => {
      console.log(`All Promises resolved successfully for ${data}`);
    }, 2000);
  })
  .catch((err) => console.log(`Failed to resolve Error: ${err}`));
