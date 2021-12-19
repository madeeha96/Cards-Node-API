import mongoose from "mongoose";

export const basicSetup = () => {
  beforeEach((done) => {
    mongoose.connect("mongodb://localhost:27017/deck-of-cards", () => done());
  });

  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done());
    });
  });
};
