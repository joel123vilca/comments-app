import mutations from "@/store/mutations";
import initialState from "@/store/state";
import comments from "./fixtures/comments";

describe("Mutations", () => {
  let state;
  beforeEach(() => {
    state = { ...initialState };
  });

  it("set a comments", () => {
    const expectedComments = comments;
    mutations.SET_COMMENTS(state, { comments });
    expect(state.comments.length).toBe(2);
    expect(state.comments).toEqual(expectedComments);
  });
});
