<template>
  <div class="about">
    <TitleComponent :counter="counter" :color="color" />
    <ButtonComponent :buttonText="'Increase'" @onClick="increase" />
    <ButtonComponent :buttonText="'Decrease'" @onClick="decrease" />

    <input type="text" v-model="text" />
    <p>{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useCounter } from '@/hooks/useCounter'
import TitleComponent from '@/components/TitleComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default defineComponent({
  components: {
    TitleComponent,
    ButtonComponent
  },
  setup () {
    const { counter, increase, decrease } = useCounter()

    const color = computed((): string => (counter.value < 0 ? 'red' : 'green'))

    const text = ref<string>('')

    return {
      color,
      text,
      counter,
      increase,
      decrease
    }
  }
})
</script>
