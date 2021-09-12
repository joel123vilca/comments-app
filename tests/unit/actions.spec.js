import actions from "@/store/actions";
import initialState from "@/store/state";
import comments from "./fixtures/comments";

describe("Store actions", () => {
  let commit;
  let state;
  beforeEach(() => {
    commit = jest.fn();
    state = { ...initialState };
  });

  it("delete comment", async () => {
    const payload = {
      ids: [2]
    };
    actions.DELETE_COMMENT({ state, commit }, payload);
    expect(state.comments.length).toEqual(2);
  });
});
