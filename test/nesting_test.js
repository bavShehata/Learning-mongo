const assert = require("assert");
const mongoose = require("mongoose");
const Author = require("../models/author.js");

// Describe tests
describe("Nesting records", () => {
  beforeEach((done) => {
    mongoose.connection.collections.authors.drop(() => {
      done();
    });
  });
  //Create tests
  it("Create an author with sub-documents", (done) => {
    var pat = new Author({
      name: "Patrick R.",
      age: 42,
      books: [{ title: "Name of the wind", pages: 400 }],
    });

    pat.save().then((res) => {
      assert(res.name === "Patrick R.");
      done();
    });
  });

  it("Add a book to an author", (done) => {
    var pat = new Author({
      name: "Patrick R.",
      age: 42,
      books: [{ title: "Name of the wind", pages: 400 }],
    });

    pat.save().then(() => {
      Author.findOne({ name: "Patrick R." }, (err, res) => {
        //add a book
        res.books.push({ title: "Wise Man's Fear", pages: 500 });
        res.save((err, res) => {
          console.log("Found the book: ", res);
          assert(res.books.length === 2);
          done();
        });
      });
    });
  });
});
