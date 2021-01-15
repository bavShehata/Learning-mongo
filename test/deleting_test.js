const assert = require("assert");
const MarioChar = require("../models/mariochar");
describe("Deleting records", () => {
  var char;

  beforeEach((done) => {
    char = new MarioChar({ name: "Mario", weight: 60 });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });

  // Create tests
  it("Deletes a record from the database", (done) => {
    MarioChar.findOneAndDelete({ name: "Mario" }, (err, res) => {
      assert(res !== null);
      done();
    });
  });
});
