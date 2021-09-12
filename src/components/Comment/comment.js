import { mapGetters, mapActions } from "vuex";
export default {
  props: ["item", "ids"],
  computed: {
    ...mapGetters({ user: "user" })
  },
  data() {
    return {
      comment: "",
      edit: false
    };
  },
  methods: {
    ...mapActions({
      saveLike: "SAVE_LIKE",
      deleteComment: "DELETE_COMMENT",
      editComment: "EDIT_COMMENT"
    }),
    newLike() {
      this.saveLike({ ids: this.ids });
    },
    leftComment() {
      this.deleteComment({ ids: this.ids });
    },
    editActive() {
      this.comment = this.item.comment;
      this.edit = true;
    },
    cancelEdit() {
      this.edit = false;
    },
    putComment() {
      this.editComment({ ids: this.ids, comment: this.comment });
      this.edit = false;
    }
  }
};
