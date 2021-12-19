import request from "supertest";
import app from "../../server";
import { basicSetup } from "../helpers/db.helper";

describe("Post Deck EndPoint", () => {
  basicSetup();
  it("should create a new deck", async () => {
    const res = await request(app).post("/deck").send({
      shuffled: true,
      type: "SHORT",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("deckId");
  });
});
