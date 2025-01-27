import { computed } from 'vue';

import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';

export default function useFiltered(books) {
  const store = useStore();
  const { headerInput } = storeToRefs(store);

  const filteredData = computed(() => {
    let copyBooksData = books.value;

    if (headerInput.value) {
      copyBooksData = copyBooksData.filter((book) =>
        book.bookName.split(' ')
          .some((item) =>
            item.toString().toLowerCase().includes(headerInput.value.toLowerCase()))
      )
    };

    return copyBooksData;
  });

  return {
    filteredData,
  };
}
