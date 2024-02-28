import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    // Wait so we can better see what is hapening
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const id = getRouterParam(event, 'id') as string
    const client = await serverSupabaseClient(event)
    const { data } = await client.from('products').select('*').eq('id', id).single()
    return data
})
