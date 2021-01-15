const assert = require("assert");
const MarioChar = require("../models/mariochar");
var char;
describe("Finding records", () => {
  beforeEach((done) => {
    char = new MarioChar({ name: "Mario", weight: 60 });
    char.save().then(() => {
      done();
    });
  });
  // Create tests
  it("Finds a record by name from the database", (done) => {
    MarioChar.findOne({ name: "Mario" }).then((res) => {
      assert(res.name === "Mario");
      done();
    });
  });

  it("Finds a record by ID from the database", (done) => {
    MarioChar.findOne({ _id: char._id }).then((res) => {
      assert(res._id.toString() === char._id.toString());
      done();
    });
  });
});
