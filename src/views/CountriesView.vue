<template>
  <h1>List of countries</h1>
  <p v-for="(country, index) in data" :key="index">
    <router-link :to="`/countries/${country?.name?.common}`">
      {{ country?.name?.common }}
    </router-link>
  </p>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Country } from '@/models/Country'
import axios from 'axios'

export default defineComponent({
  setup () {
    const data = ref<Array<Country>>([])

    onMounted(async () => {
      const response = await axios.get<Array<Country>>('https://restcountries.com/v3.1/all')
      data.value = response.data
    })

    return {
      data
    }
  }
})
</script>

<style></style>
