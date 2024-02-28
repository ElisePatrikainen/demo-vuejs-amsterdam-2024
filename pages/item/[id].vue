<script setup lang="ts">
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon } from '@heroicons/vue/24/outline'

import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { useRoute } from "vue-router";
import { itemQuery } from "~/queries/item"
import { itemsQuery } from "~/queries/items";

const route = useRoute()
const queryClient = useQueryClient()

let currentId = route.params.id as string
onBeforeRouteUpdate((to) => currentId = to.params.id as string)

// const getPlaceholderData = (id: string) => {
//   return queryClient.getQueryData(itemsQuery.queryKey)?.find(item => item.id === Number(id))
// }
// const placeholderData = computed(() => getPlaceholderData(currentId))

// Query depending on an ID
const { data: item } = useQuery(itemQuery(currentId))

const { mutate } = useMutation({
  mutationFn: () => $fetch(`/api/item/${currentId}`, { method: "POST" }),
  // onMutate: async () => {
  //   // Cancel any outgoing refetches
  //   // (so they don't overwrite our optimistic update)
  //   await queryClient.cancelQueries(itemQuery(currentId))
  //   if (!item.value) return
  //   // Optimistically update to the new value
  //   queryClient.setQueryData(itemQuery(currentId).queryKey, () => {
  //     const newItem = { ...item.value }
  //     newItem.availability = item.value.availability - 1
  //     return newItem
  //   })
  //   return item
  // },
  // onError: (err, mutationArg, item) => {
  //   queryClient.setQueryData(itemQuery(currentId).queryKey, item?.value)
  // },
  // onSuccess: () => {
  //   queryClient.invalidateQueries(itemQuery(currentId, placeholderData.value))
  //   queryClient.invalidateQueries(itemsQuery)
  // }
})

const bookItem = () => {
  mutate()
}

// TODO: loader

</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <img :src="item?.imagesrc" class="h-full w-full object-cover object-center sm:rounded-lg" />

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ item?.name }}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">{{ item?.price }} €</p>
          </div>

          <!-- Reviews -->
          <div class="mt-3">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div v-if="item?.rating" class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                  :class="[item?.rating > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                  aria-hidden="true" />
              </div>
              <p class="sr-only">{{ item?.rating }} out of 5 stars</p>
            </div>
          </div>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-gray-700" v-html="item?.description" />
          </div>

          <div>Availability: {{ item?.availability }}</div>

          <div class="mt-10 flex">
            <button @click="bookItem"
              class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">
              Add to bag
            </button>
            <button type="button"
              class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <span class="sr-only">Add to favorites</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
