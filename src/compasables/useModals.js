import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";

export default function useModals() {
  const store = useStore();
  const { isModal, book, isChecked } = storeToRefs(store);

  const useModal = (value) => {
    book.value.bookName = '';
    book.value.bookAuthor = '';
    book.value.bookYear = '';
    book.value.bookGenre = '';
    isChecked.value = false;

    isModal.value = value;
  };

  return {
    useModal,
  }
}
