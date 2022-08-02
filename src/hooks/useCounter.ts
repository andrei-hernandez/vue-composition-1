import { ref } from 'vue'

export function useCounter () {
  const counter = ref<number>(0)

  const increase = (): void => {
    counter.value++
  }

  const decrease = (): void => {
    counter.value--
  }

  return {
    counter,
    increase,
    decrease
  }
}
