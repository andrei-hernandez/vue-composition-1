<template>
  <div>
    <h1
      :style="{
        color: color
      }"
    >
      Counter: {{ formatMoney }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    counter: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: 'green'
    }
  },
  setup (props) {
    const formatMoney = computed((): string => `$${props?.counter ?? ''}`)

    return {
      formatMoney
    }
  }
})
</script>

<style></style>
