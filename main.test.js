const CustumPromise = require("./main");

describe("Custom promise: ", () => {
  let promise;
  let executor;

  beforeEach(() => {
    executor = jest.fn(() => {});
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
});
