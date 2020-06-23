const { async } = require("regenerator-runtime");

describe("CalculatorAPI", function () {
  let near;
  let contract;
  let alice;
  let bob = "bob.near";
  let eve = "eve.near";
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  // Common setup below
  beforeAll(async function () {
    console.log("nearConfig", nearConfig);
    near = await nearlib.connect(nearConfig);
    alice = nearConfig.contractName;
    contract = await near.loadContract(nearConfig.contractName, {
      // NOTE: This configuration only needed while NEAR is still in development
      viewMethods: [],
      changeMethods: ["calculate", "print"],
      sender: alice,
    });
  });

  // Multiple tests can be described below. Search Jasmine JS for documentation.
  describe("simple", function () {
    beforeAll(async function () {
      // There can be some common setup for each test.
    });

    // it("add one digit", async function () {
    //   const params = {
    //     a: "1",
    //     b: "99",
    //   };

    //   const result = await contract.calculate(params);
    //   console.log(result);
    //   expect(result.lastResult).toBe("100");
    // });

    it("print hello world", async function () {
      const result = await contract.print();
      console.log(result);
    });
  });
});
