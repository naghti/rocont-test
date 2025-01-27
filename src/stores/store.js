import { ref } from 'vue';
import { defineStore } from 'pinia';

import createId from '@/helpers/idCreation';

export const useStore = defineStore('store', () => {
  const booksData = ref(JSON.parse(localStorage.getItem('books')) || []);
  const headerInput = ref('');
  const isModal = ref(0);
  const isChecked = ref(false);
  const book = ref({
    bookName: '',
    bookAuthor: '',
    bookYear: '',
    bookGenre: '',
  });
  const opennedBook = ref(null);

  function saveBooks() {
    localStorage.setItem('books', JSON.stringify(booksData.value));
  }

  function addBook(bookName, bookAuthor, bookYear, bookGenre) {
    booksData.value.push({
      id: createId(booksData.value),
      bookName,
      bookAuthor,
      bookYear,
      bookGenre
    });

    book.value.bookName = '';
    book.value.bookAuthor = '';
    book.value.bookYear = '';
    book.value.bookGenre = '';
    isChecked.value = false;

    saveBooks();
  }

  function editBook(bookName, bookAuthor, bookYear, bookGenre) {
    booksData.value.forEach((book) => {
      if (book.id === opennedBook.value.id) {
        book.bookName = bookName;
        book.bookAuthor = bookAuthor;
        book.bookYear = bookYear;
        book.bookGenre = bookGenre;

        saveBooks();
      }
    });

    opennedBook.value = null;
  }

  function deleteBook() {
    booksData.value.forEach((book, i) => {
      if (book.id === opennedBook.value.id) {
        booksData.value.splice(i, 1);

        saveBooks();
      }
    });

    opennedBook.value = null;
  }

  return {
    booksData,
    isModal,
    isChecked,
    book,
    opennedBook,
    headerInput,
    saveBooks,
    addBook,
    editBook,
    deleteBook,
  }
})
