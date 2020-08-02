function noop() {}

class CustomPromise {
  constructor(executor) {
    this.queue = [];
    this.handleError = noop;
    this.finallyHandler = noop;
    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this));
    } catch (err) {
      this.handleError(err);
    } finally {
      this.finallyHandler();
    }
  }

  onResolve(data) {
    this.queue.forEach((callback) => {
      data = callback(data);
    });
    this.finallyHandler();
  }
  onReject(error) {
    this.handleError(error);
    this.finallyHandler();
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }
  catch(fn) {
    this.handleError = fn;
    return this;
  }
  finally(fn) {
    this.finallyHandler = fn;
    return this;
  }
}

const promise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("TDD");
  }, 150);
});

promise
  .then((test) => test.toUpperCase())
  .then((test) => console.log("Done!", test))
  .catch((error) =>
    console.error("Error", error).finally(() => console.log("Finally"))
  );

module.exports = CustomPromise;
