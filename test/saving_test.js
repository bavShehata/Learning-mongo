const assert = require("assert");
const MarioChar = require("../models/mariochar");
describe("Saving records", () => {
  // Create tests
  it("Saves a record to the database", (done) => {
    const char = new MarioChar({ name: "Mario", weight: 60 });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });
});
