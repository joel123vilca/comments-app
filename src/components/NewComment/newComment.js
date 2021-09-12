import { mapActions } from "vuex";
export default {
  data() {
    return {
      comment: ""
    };
  },
  methods: {
    ...mapActions({
      saveComment: "SAVE_COMMENT"
    }),
    newComment() {
      this.saveComment({ comment: this.comment });
      this.comment = "";
    },
    cancelComment() {
      this.comment = "";
    }
  }
};
