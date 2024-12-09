// * API Error Handling

// Example - 1
async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    let data = await response.json();
    console.log(data);
    console.log(data.results[0].gender);
    console.log(data.results[0].name);
  } catch (error) {
    console.log(`Fetching data failed: ${error.message}`);
    // Handle the error appropriately
  }
}
// const dataIs = fetchData("https://randomuser.me/api/");

//? Example - 2

async function fetchNewData(url) {
  try {
    let data = await fetch(url);
    if (data.status !== 200) {
      throw new Error(` Failed to Fetching : ${data.status}`);
    }
    let resultDataIs = await data.json();
    // console.log(resultDataIs);
    objectIdIs(resultDataIs);
  } catch (error) {
    console.log(`Fetching data failed: ${error.message}`);
  }
}
fetchNewData('https://collectionapi.metmuseum.org/public/collection/v1/objects/546303')

function objectIdIs(objectId) {
    console.log(`ObjectId is: ${objectId.objectID}`);
    
}