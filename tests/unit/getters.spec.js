import getters from "@/store/getters";
import initialState from "@/store/state";

describe("Getters", () => {
  let state;

  beforeEach(() => {
    let comment = {
      id: 1,
      name: "Albert Vilca",
      comment: "example",
      avatar: "http://myUrl.com",
      likes: 0
    };
    state = {
      ...initialState,
      comments: [comment]
    };
  });

  it("gets comments", () => {
    let comments = getters.comments(state);
    expect(comments.length).toBe(1);
  });
});
