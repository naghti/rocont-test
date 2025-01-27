<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__wrapper">
        <a href="#" class="header__logo-link">
          <BookSVG />
        </a>

        <HeaderInput />
      </div>

      <div class="header__wrapper">
        <h2 class="header__title">
          Книги в каталоге
          <span class="number">
            {{ titleDescription }}
          </span>
        </h2>

        <HeaderBtn />
      </div>
    </div>
  </header>

  <main class="main">
    <section class="section">
      <div class="container section__container">
        <BooksList />
      </div>
    </section>
  </main>

  <FormAdd v-if="isModal === 1" />
  <FormEdit v-if="isModal === 2" />
</template>

<script setup>
import { computed } from 'vue';

import { useStore } from './stores/store';
import { storeToRefs } from 'pinia';

import useFiltered from './compasables/useFiltered';

import BookSVG from './components/SVG/BookSVG.vue';
import HeaderInput from './components/HeaderInput.vue';
import HeaderBtn from './components/HeaderBtn.vue';
import BooksList from './components/BooksList.vue';
import FormAdd from './components/FormAdd.vue';
import FormEdit from './components/FormEdit.vue';

const store = useStore();
const { isModal, booksData, headerInput } = storeToRefs(store);

const { filteredData } = useFiltered(booksData);

const titleDescription = computed(() => headerInput.value ? `«${headerInput.value}»` : filteredData.value.length);
</script>
