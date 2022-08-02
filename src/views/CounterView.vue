<template>
  <TitleComponent :counter="counter" />
  <ButtonComponent :buttonText="'Increase'" @onClick="increase" />
  <ButtonComponent :buttonText="'Decrease'" @onClick="decrease" />
</template>

<script lang="ts">
import TitleComponent from '@/components/TitleComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import { defineComponent } from 'vue'
import { useCounter } from '@/hooks/useCounter'

export default defineComponent({
  components: { TitleComponent, ButtonComponent },
  setup () {
    const { counter, increase, decrease } = useCounter()
    return { counter, increase, decrease }
  }
})
</script>

<style></style>
