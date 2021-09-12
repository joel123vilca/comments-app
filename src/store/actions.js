export default {
  SAVE_COMMENT({ state, commit }, payload) {
    let user = state.user;
    let comments = state.comments;
    let data = {
      id: Math.random(),
      user_id: user.user_id,
      name: user.name,
      avatar: user.avatar,
      comment: payload.comment,
      likes: 0,
      children: [],
      date: new Date()
    };
    comments.push(data);
    commit("SET_COMMENTS", { comments });
  },
  DELETE_COMMENT({ state, commit }, payload) {
    let data = state.comments;
    let comments = [];
    if (payload.ids.length === 1) {
      comments = data.filter(item => item.id !== payload.ids[0]);
    }
    if (payload.ids.length === 2) {
      let comment = data.find(item => item.id === payload.ids[0]);
      let children = comment.children.filter(item => item.id !== payload.ids[1]);
      comments = data.map(item => {
        if (item.id == payload.ids[0]) {
          item.children = children;
        }
        return item;
      });
    }
    commit("SET_COMMENTS", { comments });
  },
  EDIT_COMMENT({ state, commit }, payload) {
    let data = state.comments;
    let comments = [];
    if (payload.ids.length === 1) {
      comments = data.map(item => {
        if (item.id == payload.ids[0]) {
          item.comment = payload.comment;
        }
        return item;
      });
    }
    if (payload.ids.length === 2) {
      let comment = data.find(item => item.id === payload.ids[0]);
      let children = comment.children.map(item => {
        if (item.id == payload.ids[1]) {
          item.comment = payload.comment;
        }
        return item;
      });
      comments = data.map(item => {
        if (item.id == payload.ids[0]) {
          item.children = children;
        }
        return item;
      });
    }

    commit("SET_COMMENTS", { comments });
  },
  SAVE_LIKE({ state, commit }, payload) {
    let data = state.comments;
    let comments = [];
    if (payload.ids.length === 1) {
      comments = data.map((item, i) => {
        if (item.id == payload.ids[0]) {
          item.likes = item.likes + 1;
        }
        return item;
      });
    }
    if (payload.ids.length === 2) {
      let comment = data.find(item => item.id === payload.ids[0]);
      let children = comment.children.map(item => {
        if (item.id == payload.ids[1]) {
          item.likes = item.likes + 1;
        }
        return item;
      });
      comments = data.map(item => {
        if (item.id == payload.ids[0]) {
          item.children = children;
        }
        return item;
      });
    }
    commit("SET_COMMENTS", { comments });
  },
  ANSWER_COMMENT({ state, commit }, payload) {
    let user = state.user;
    let comments = state.comments;
    let data = {
      id: comments.length + 1,
      user_id: user.user_id,
      name: user.name,
      avatar: user.avatar,
      comment: payload.comment,
      likes: 0,
      children: []
    };
    comments.push(data);
    commit("SET_COMMENTS", { comments });
  }
};
