require("dotenv/config");
const mongoose = require("mongoose");
const dbURI = process.env.dbURI;

//Connecting to database be4 test runs
before((done) => {
  mongoose
    .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connection made");
      done();
    })
    .catch("error", (error) => console.log("Error: ", error));
});

// Drop the collection before each test
beforeEach((done) => {
  // Drop the collection
  mongoose.connection.collections.mariochars.drop(() => {
    done();
  });
});
