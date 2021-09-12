<template>
  <div class="new__comment">
    <div class="title">
      <h4>Tu comentario</h4>
    </div>
    <input type="text" v-model="comment" />
    <div class="actions">
      <button class="cancel" @click="cancelComment">Cancelar</button>
      <button class="save" @click="newComment">Guardar</button>
    </div>
  </div>
</template>
<script src="./newComment.js"></script>
<style src="./newComment.scss" lang="scss"></style>
