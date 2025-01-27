<template>
  <ul class="section__list list-reset" v-if="isFound">
    <BookItem v-for="book in filteredData" :key="book.id" :id="book.id" :name="book.bookName" :author="book.bookAuthor"
      :year="book.bookYear" :genre="book.bookGenre" />
  </ul>

  <div class="not-found" v-else>
    По вашему запросу ничего не найдено
  </div>
</template>

<script setup>
import { computed } from 'vue';

import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

import useFiltered from '@/compasables/useFiltered';

import BookItem from './BookItem.vue';

const store = useStore();
const { booksData } = storeToRefs(store);

const { filteredData } = useFiltered(booksData);

const isFound = computed(() => filteredData.value.length > 0 ? true : false);
</script>
