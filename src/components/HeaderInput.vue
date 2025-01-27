<template>
  <label class="header__label">
    <input type="text" class="header__input" placeholder="Найти ту самую книгу" v-model="headerInput">
  </label>
</template>

<script setup>
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

const store = useStore();
const { headerInput } = storeToRefs(store);
</script>
