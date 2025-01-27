import { useStore } from "@/stores/store";
import { storeToRefs } from "pinia";

export default function useCheck() {
  const store = useStore();
  const { isChecked } = storeToRefs(store);

  const useChecked = () => isChecked.value === false ? true : false;

  return {
    useChecked,
  };
}
