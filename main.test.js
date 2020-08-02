const CustumPromise = require("./main");

describe("Custom promise: ", () => {
  let promise;
  let executor;
  const succesResult = 42;
  const errorResult = "I am error";

  beforeEach(() => {
    executor = jest.fn((resolve) =>
      setTimeout(() => resolve(succesResult), 150)
    );
    promise = new CustumPromise(executor);
  });

  test("Should be exist and to be typeof fuction", () => {
    expect(CustumPromise).toBeDefined();
    expect(typeof CustumPromise).toBe("function");
  });

  test("Intance shold have methods: then,cath, finally", () => {
    expect(promise.then).toBeDefined();
    expect(promise.catch).toBeDefined();
    expect(promise.finally).toBeDefined();
  });

  test("Shold call executor function", () => {
    expect(executor).toHaveBeenCalled();
  });

  test("Shold geting data in then block and do chaining", async () => {
    const result = await promise.then((num) => num).then((num) => num * 2);
    expect(result).toBe(succesResult * 2);
  });

  test("Shold catch error", () => {
    const errorExecutor = (_, resolve) =>
      setTimeout(() => resolve(errorResult), 150);
    const errorPromise = new CustumPromise(errorExecutor);

    return new Promise((resolve) => {
      errorPromise.catch((error) => {
        expect(error).toBe(errorResult);
        resolve();
      });
    });
  });

  test("Shold call method finally", async () => {
    const finallySpy = jest.fn(() => {});
    await promise.finally(finallySpy);
    expect(finallySpy).toBeCalled();
  });
});
