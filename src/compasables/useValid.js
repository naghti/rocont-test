export default function useValid() {
  const outBlur = (input) => {
    if (input.value.length === 0) {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  }

  const validYear = (input) => {
    const maxYear = new Date().getFullYear();

    input.value = input.value > maxYear ? maxYear : input.value;
  }

  return {
    outBlur,
    validYear,
  }
}
