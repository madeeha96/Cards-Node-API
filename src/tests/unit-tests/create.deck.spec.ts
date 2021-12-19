import request from "supertest";

describe("Post Deck EndPoint", () => {
  it("should create a new deck", async () => {
    const res = await request("http://localhost:3333").post("/deck").send({
      shuffled: true,
      type: "SHORT",
    });
    expect(res.statusCode).toEqual(200);
    expect(Object(res.body)).toBeTruthy();
    expect(res.body).toHaveProperty("deckId");
  });
});
