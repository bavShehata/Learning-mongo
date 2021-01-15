const assert = require("assert");
const MarioChar = require("../models/mariochar");
describe("Updating records", () => {
  var char;

  beforeEach((done) => {
    char = new MarioChar({ name: "Mario", weight: 60 });
    char.save().then(() => {
      assert(char.isNew === false);
      done();
    });
  });

  // Create tests
  it("Updates a record from the database", (done) => {
    MarioChar.findOneAndUpdate(
      { name: "Mario" },
      { $set: { name: "Luigi" } },
      { new: true },
      (err, res) => {
        assert(res.name === "Luigi");
        done();
      }
    );
  });

  it("Increments weight by one", (done) => {
    MarioChar.updateMany({}, { $inc: { weight: 1 } }, (err, res) => {
      assert(res.nModified >= 1);
      done();
    });
  });
});
