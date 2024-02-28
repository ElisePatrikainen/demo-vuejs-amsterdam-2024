import type { Item } from "~/types/item";
import { queryOptions, useQueryClient } from "@tanstack/vue-query";
import { ofetch } from "ofetch";
import { itemsQuery } from "./items";

// TyseScript issue (cf https://github.com/TanStack/query/issues/6318)
export const itemQuery = (id: string, placeholderData?: Item) => {
  console.log(id);
  
  return queryOptions({
    queryKey: ['item', id],
    queryFn: () => $fetch<Item>(`/api/item/${id}`),
    staleTime: 15000,
    placeholderData
  })
} 
