import mongoose from "mongoose";

export const basicSetup = () => {
  beforeEach((done) => {
    mongoose.connect("mongodb://deck:27017/deck-of-cards", (error) => done());
    
  });

  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done());
    });
  });
};
