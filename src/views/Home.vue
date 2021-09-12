<template>
  <div class="home">
    <div class="home__header">
      <h2>Comments {{ getComments.length }}</h2>
      <div>
        order by:
        <select v-model="order">
          <option value="asc">Date Asc</option>
          <option value="desc" selected>Date Desc</option>
        </select>
      </div>
    </div>
    <div v-for="(data, i) in getComments" :key="i" class="comments">
      <div>
        <Comment :item="data" :ids="[data.id]" />
        <div v-if="data.children.length > 0" class="comment__children">
          <div v-for="(item, index) in data.children" :key="index">
            <Comment :item="item" :ids="[data.id, item.id]" />
            <div v-if="item.children.length > 0" class="comment__children">
              <Comment
                v-for="(info, index) in item.children"
                :key="index"
                :item="info"
                :ids="[data.id, item.id, info.id]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <NewComment />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import Comment from "@/components/Comment";
import NewComment from "@/components/NewComment";

export default {
  name: "Home",
  data() {
    return {
      order: "asc"
    };
  },
  components: {
    Comment,
    NewComment
  },
  computed: {
    ...mapGetters({ comments: "comments" }),
    getComments() {
      let comments = this.comments;
      if (this.order === "asc") {
        comments = comments.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      } else {
        comments = comments.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
      return comments;
    }
  }
};
</script>
<style lang="scss">
.home__header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  h2 {
    margin: 0px;
  }
}
.comments {
  margin-top: 10px;
  width: 100%;
  background: white;
  -webkit-box-shadow: 0 8px 6px -6px rgba(99, 99, 99, 0.2);
  -moz-box-shadow: 8px 8px 6px -6px rgba(99, 99, 99, 0.2);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  .comment__children {
    margin-left: 45px;
  }
}
</style>
