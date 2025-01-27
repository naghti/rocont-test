<template>
  <li class="section__item">
    <div class="section__item-wrapper">
      <h3 class="section__item-title">
        {{ props.name }}
      </h3>
      <button class="section__item-btn-edit btn-reset" @click="openBook()">
        <EditSVG />
      </button>
    </div>
    <span class="section__item-desc">
      {{ props.author }}
    </span>
    <span class="section__item-desc">
      {{ props.year }}
    </span>
    <span class="section__item-desc">
      {{ props.genre }}
    </span>
  </li>
</template>

<script setup>
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

import useModals from '@/compasables/useModals';

import EditSVG from './SVG/EditSVG.vue';

const props = defineProps({
  id: Number,
  name: String,
  author: String,
  year: String,
  genre: String,
});

const store = useStore();
const { opennedBook, booksData } = storeToRefs(store);

const { useModal } = useModals();

const openBook = () => {
  opennedBook.value = booksData.value.find((book) => book.id === props.id)

  useModal(2);
};
</script>
