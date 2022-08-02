<template>
  <button type="button" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    buttonText: {
      type: String,
      default: 'Click me'
    }
  },
  setup (props, context) {
    const handleClick = (): void => context.emit('onClick')

    return {
      handleClick
    }
  }
})
</script>

<style></style>
