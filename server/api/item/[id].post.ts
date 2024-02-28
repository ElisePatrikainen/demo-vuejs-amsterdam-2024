import { serverSupabaseClient } from '#supabase/server'
import type { Item } from "../../../types/item";

export default eventHandler(async (event) => {
    // Wait so we can better see what is hapening
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const id = getRouterParam(event, 'id') as string
    const client = await serverSupabaseClient(event)

    const { data: item } = await client.from('products').select('*').eq('id', id).single()
    if (!item) return null
    // @ts-ignore
    const newAvailability = Number(item.availability) - 1;
    const { data, error } = await client
        .from('products')
        // @ts-ignore
        .update({ 'availability': newAvailability })
        .eq('id', id)
        .select()
    return data
})
