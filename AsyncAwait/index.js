// Callback Hell = situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read
// old pattern to handle asynchronous functions
// use Promises + async/await to avoid callback hell

// Promise = an object that manages asynchronous operations
// wrap a Promise object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;

      if (dogwalked) {
        resolve("You walk the dog 🐕");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean the kitchen 🧹");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You take out the trash");
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores");
  })
  .catch((error) => console.error(error));

// Async/Await = Async = makes a function return a promise
// Await = makes an async function wait for a promise
// allows you to write asynchronous code in a synchronous manner
// async doesn't have resolve or reject parameters
// everything after await is placed in an event queue

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished all the chores");
  } catch (error) {
    console.error(error);
  }
}

doChores();
