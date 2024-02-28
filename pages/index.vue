<script setup lang="ts">
import { queryOptions, useQuery, useQueryClient } from '@tanstack/vue-query'
import { useRouter } from "vue-router";
//import { itemsQuery } from "@/queries/items";
import { itemsQuery } from '../queries/items';
import { ofetch } from 'ofetch';
import type { Item } from "../types/item";
import { ref } from 'vue';
import { itemQuery } from '~/queries/item';

const router = useRouter()
const queryClient = useQueryClient()

// Nb: we could also have used Nuxt's `useFetch` or VueUse's UseFetch
const data = ref()
const isError = ref(false)
try {
data.value = await $fetch<Item[]>(`/api/products`)
} catch (e) {
  isError.value = true
}

// 1. The query
// const { isError, data, suspense } = useQuery(itemsQuery)

// 4. Prefetch
// const prefetch = (id: number) => queryClient.prefetchQuery(itemQuery(id.toString()))

</script>

<template>
  <main>
    <div v-if="isError">
      <pre>An error happened</pre>
    </div>
    <div v-else class="flex flex-wrap">
      <div v-for="item in data">
        <!--  add prefetch here : @mouseover="prefetch(item.id)" -->
        <Item :product="item"></Item>
      </div>
    </div>
  </main>
</template>
