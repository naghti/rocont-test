<template>
  <div class="modal">
    <div class="modal__content">
      <BtnClose />
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import BtnClose from './BtnClose.vue';
</script>
