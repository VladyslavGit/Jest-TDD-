const CustumPromise = require("./main");

describe("Custom promise: ", () => {
  test("Should be exist and to be typeof fuction", () => {
    expect(CustumPromise).toBeDefined();
    expect(typeof CustumPromise).toBe("function");
  });
});
