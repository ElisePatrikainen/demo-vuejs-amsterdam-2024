import { queryOptions } from "@tanstack/vue-query";
import type { Item } from "~/types/item";

// TypeScript issue (cf https://github.com/TanStack/query/issues/6318)
export const itemsQuery = queryOptions({
    queryKey: ['items'],
    queryFn: () => $fetch<Item[]>(`/api/products`),
    staleTime: 15000
})
