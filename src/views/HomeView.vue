<template>
  <div class="home">
    <h1>Counter: {{ counter }}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      counter: 0 as number
    }
  },
  methods: {
    increase (): void {
      this.counter++
    },
    decrease (): void {
      this.counter--
    }
  }
})
</script>
