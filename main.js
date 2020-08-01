class CustomPromise {
  constructor(executor) {
    executor();
  }
  then() {}
  catch() {}
  finally() {}
}

const promise = new Promise((resolse, reject) => {
  setTimeout(() => {
    resolve("TDD");
  }, 150);
});

promise
  .then((test) => {
    console.log("Done!");
  })
  .catch((error) => {
    console.error("Error", error).finally(() => console.log("Finally"));
  });

module.exports = CustomPromise;
