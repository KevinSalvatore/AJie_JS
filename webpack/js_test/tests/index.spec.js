const { add } = require("../index");

const expect = require("chai").expect;

describe("Add two nums!", () => {
  it("Two strings add to nums", () => {
    expect(add("11", "22")).to.equal(33);
  });
  it("If the parameters has errors, then return NaN", () => {
    expect(add(0, null)).to.be.NaN;
  });
});
