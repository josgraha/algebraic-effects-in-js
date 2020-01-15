import { add, call, fun } from "../compiler";

describe("basic", () => {
  it("has an AST", () => {
    const doubleFun = fun("x", add("x", "x"));
    const program = call(doubleFun, 10);
    const expectedAST = {
      type: "call",
      funExp: {
        type: "fun",
        param: "x",
        body: {
          type: "add",
          exp1: "x",
          exp2: "x"
        }
      },
      argExp: 10
    };
    expect(program).toEqual(expectedAST);
  });
});
