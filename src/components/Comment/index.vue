<template>
  <div class="comment__detail">
    <div class="comment__avatar">
      <img :src="item.avatar" />
    </div>
    <div class="comment__content">
      <div class="comment__header">
        <div class="comment__title">
          <h4>{{ item.name }}</h4>
        </div>
        <div class="comment__actions">
          <img
            v-if="item.user_id === user.user_id"
            src="https://img.icons8.com/material-outlined/24/000000/edit-image.png"
            style="width:18px"
            @click="editActive"
          />
          <img
            v-if="item.user_id === user.user_id"
            src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
            style="width:18px"
            @click="leftComment"
          />
          <span class="date"> {{ moment(item.date).format("MM/DD/YYYY, h:mm:ss a") }}</span>
        </div>
      </div>
      <div class="comment__text">
        <input v-if="edit" type="text" v-model="comment" />
        <span v-else> {{ item.comment }} </span>
        <button v-if="edit" class="save" @click="putComment">
          <img src="https://img.icons8.com/ios/50/000000/save.png" style="width:15px" />
        </button>
        <button v-if="edit" class="cancel" @click="cancelEdit">
          <img
            src="https://img.icons8.com/material-outlined/24/000000/cancel--v1.png"
            style="width:15px;color: white;"
          />
        </button>
      </div>
      <div class="comment__reactions">
        <span v-if="item.likes > 0">{{ item.likes }} </span>
        <img
          src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-like-instagram-flatart-icons-outline-flatarticons.png"
          class="like"
          @click="newLike(item.id)"
        />

        <span>Ocultar</span>
        <img
          src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-back-arrow-flatart-icons-outline-flatarticons-1.png"
          class="respond"
        />
      </div>
    </div>
  </div>
</template>
<script src="./comment.js"></script>
<style src="./comment.scss" lang="scss"></style>
