<template>
    <nav class="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
                <HomeIcon class="h-6 w-6" aria-hidden="true" />
            </NuxtLink>
        </div>
        <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <SparklesIcon class="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <a v-for="item in navigation" :key="item.name" :href="item.href"
                class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
            <a href="/about">
                A propos
            </a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <button @click="open = true" class="text-sm font-semibold leading-6 text-gray-900">Basket<span
                    aria-hidden="true">&rarr;</span></button>
        </div>
    </nav>
    <TheSlideOver :open="open" />
</template>
  
<script setup lang="ts">
import { SparklesIcon, HomeIcon } from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

const open = ref(false)
</script>