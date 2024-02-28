<script setup lang="ts">
import { computed, ref } from 'vue';
import BasketDetails from './Details.vue';
import { useQuery } from '@tanstack/vue-query';
import { itemsQuery } from '~/queries/items';

const {basket} = useBasket()
const { data: items } = useQuery(itemsQuery)

const products = ref([])

console.log(products.value);

const itemsList = computed(
    () => items.value?.filter(item => basket.value[item.id] > 0)
)
const totalPrice = computed(
    () => itemsList.value?.reduce((acc, product) => acc + product.price * basket.value[product.id], 0)
)

</script>

<template>
    <!-- Order summary -->
    <section aria-labelledby="summary-heading"
        class="w-full mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:mt-0 lg:p-8">
        <h2 id="summary-heading" class="text-lg font-medium text-gray-900">Order summary</h2>

        <dl v-if="products" class="mt-6 space-y-4">
            <template v-for="product in itemsList" :key="product.id">
                <BasketDetails :product="product" />
            </template>
            <div class="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt class="text-base font-medium text-gray-900">Order total</dt>
                <dd class="text-base font-medium text-gray-900">{{ totalPrice }} €</dd>
            </div>
        </dl>

        <div class="mt-6">
            <button type="submit"
                class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Checkout</button>
        </div>
    </section>
</template>