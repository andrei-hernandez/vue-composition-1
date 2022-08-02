<template>
  <h1>Detalle: {{ $route.params.id }}</h1>
  <p>{{ countryData?.name.common }} - {{ countryData?.region }}</p>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Country } from '@/models/Country'
import axios from 'axios'

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (params) {
    const countryData = ref<Country | null>(null)

    onMounted(async (): Promise<void> => {
      const { data } = await axios.get<Array<Country>>(
        `https://restcountries.com/v3.1/name/${params.id}`
      )
      countryData.value = data[0]
    })

    return {
      countryData
    }
  }
})
</script>

<style></style>
