<template>
  <BaseModal>
    <form class="form" @submit.prevent="editBook()">
      <h2 class="form__title">
        Редактирование
      </h2>
      <span class="undertitle">
        Внесите изменение в карточке
      </span>
      <label class="form__label">
        <span class="form__label-desc">
          Название
        </span>
        <input type="text" class="form__input" @blur="outBlur(inputName)" placeholder="Название произведения" v-model="currentBook.bookName" ref="inputName">
      </label>
      <label class="form__label">
        <span class="form__label-desc">
          Автор
        </span>
        <input type="text" class="form__input" @blur="outBlur(inputAuthor)" placeholder="Имя и фамилия автора" v-model="currentBook.bookAuthor" ref="inputAuthor">
      </label>
      <label class="form__label">
        <span class="form__label-desc">
          Год
        </span>
        <input type="number" @input="validYear(inputYear)" class="form__input" placeholder="Год выпуска" v-model="currentBook.bookYear" ref="inputYear">
      </label>
      <label class="form__label">
        <span class="form__label-desc">
          Жанр
        </span>
        <input type="text" class="form__input" placeholder="Добавьте жанр произведения" v-model="currentBook.bookGenre">
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
      <div class="form__wrapper-btns">
        <button class="form__btn-save btn-reset">
          <SaveSVG />
          Сохранить
        </button>
        <button class="form__btn-delete btn-reset" @click.prevent="deleteBook()">
          <DeleteSVG />
        </button>
      </div>
    </form>
  </BaseModal>
</template>

<script setup>
import { reactive, useTemplateRef } from 'vue';

import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

import useModals from '@/compasables/useModals';
import useCheck from '@/compasables/useCheck';
import useValid from '@/compasables/useValid';

import BaseModal from './UI/BaseModal.vue';
import SaveSVG from './SVG/SaveSVG.vue';
import DeleteSVG from './SVG/DeleteSVG.vue';

const store = useStore();
const { isChecked, opennedBook } = storeToRefs(store);

const inputName = useTemplateRef('inputName');
const inputAuthor = useTemplateRef('inputAuthor');
const inputYear = useTemplateRef('inputYear');

const { useChecked } = useCheck();
const { useModal } = useModals();
const { outBlur, validYear } = useValid();

const currentBook = reactive({
  bookName: opennedBook.value.bookName,
  bookAuthor: opennedBook.value.bookAuthor,
  bookYear: opennedBook.value.bookYear,
  bookGenre: opennedBook.value.bookGenre,
});

const editBook = () => {
  if (currentBook.bookName.length > 0 && currentBook.bookAuthor.length > 0) {
    store.editBook(
      currentBook.bookName,
      currentBook.bookAuthor,
      currentBook.bookYear,
      currentBook.bookGenre,
    )

    useModal(0);
  }
};

const deleteBook = () => {
  store.deleteBook();

  useModal(0);
};
</script>
