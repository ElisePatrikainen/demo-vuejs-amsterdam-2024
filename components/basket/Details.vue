<script setup lang="ts">
import type { Item } from '~/types/item';

const {basket} = useBasket()

const props = defineProps<{ product: Item }>()
const price = computed(() => basket.value[props.product.id] * props.product.price)
</script>

<template>
    <div class="flex items-center justify-between" >
        <dt class="text-sm text-gray-600">{{ product.name }} ({{ product.color }})</dt>
        <dd class="text-sm text-gray-600">x {{ basket[product.id] }}</dd>
        <!-- <dd class="text-sm font-medium text-gray-900">{{ price }} €</dd> -->
    </div>
</template>