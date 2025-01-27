<template>
  <button class="header__btn-add btn-reset" @click="useModal(1)">
    <AddSVG />

    Добавить книгу
  </button>
</template>

<script setup>
import useModals from '@/compasables/useModals';

import AddSVG from './SVG/AddSVG.vue';

const { useModal } = useModals();
</script>
