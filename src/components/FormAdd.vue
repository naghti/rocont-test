<template>
  <BaseModal>
    <form class="form" @submit.prevent="addBook()">
      <h2 class="form__title">
        Добавить книгу
      </h2>
      <span class="undertitle">
        Заполните все поля и добавьте книгу в список
      </span>
      <label class="form__label">
        <span class="form__label-desc">
          Название
        </span>
        <input type="text" class="form__input" @blur="outBlur(inputName)" placeholder="Название произведения" v-model="book.bookName" ref="inputName">
      </label>
      <label class="form__label">
        <span class="form__label-desc">
          Автор
        </span>
        <input type="text" class="form__input" @blur="outBlur(inputAuthor)" placeholder="Имя и фамилия автора" v-model="book.bookAuthor" ref="inputAuthor">
      </label>
      <label class="form__label">
        <span class="form__label-desc">
          Год
        </span>
        <input type="number" @input="validYear(inputYear)" class="form__input" placeholder="Год выпуска" v-model="book.bookYear" ref="inputYear">
      </label>
      <label class="form__label">
        <span class="form__label-desc">
          Жанр
        </span>
        <input type="text" class="form__input" placeholder="Добавьте жанр произведения" v-model="book.bookGenre">
      </label>
      <label class="form__label">
        <input type="checkbox" class="form__input" @change="useChecked()" v-model="isChecked">
        <span class="form__label-check-desc">
          Я согласен с условиями
          <span class="underborder">
            Политики конфиденциальности
          </span>
        </span>
      </label>
      <button class="form__btn-add btn-reset">
        <AddSVG />
        Добавить
      </button>
    </form>
  </BaseModal>
</template>

<script setup>
import { useTemplateRef } from 'vue';

import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

import useModals from '@/compasables/useModals';
import useCheck from '@/compasables/useCheck';
import useValid from '@/compasables/useValid';

import BaseModal from './UI/BaseModal.vue';
import AddSVG from './SVG/AddSVG.vue';

const store = useStore();
const { isChecked, book } = storeToRefs(store);

const inputName = useTemplateRef('inputName');
const inputAuthor = useTemplateRef('inputAuthor');
const inputYear = useTemplateRef('inputYear');

const { useChecked } = useCheck();
const { useModal } = useModals();
const { outBlur, validYear } = useValid();

const addBook = () => {
  if (book.value.bookName.length > 0 && book.value.bookAuthor.length > 0) {
    store.addBook(
      book.value.bookName,
      book.value.bookAuthor,
      book.value.bookYear,
      book.value.bookGenre,
    );

    useModal(0);
  }
};
</script>
