export const useBasket = () => {
    const basket = useState<Record<number, number>>('basket', () => ({}))
    const addItemToBasket = (itemId: number) => {
        const itemQuantity = basket.value[itemId]
        if (itemQuantity) basket.value[itemId] = itemQuantity + 1
        else basket.value[itemId] = 1
    }
    const setItemQuantity = (itemId: number, itemQuantity: string) => {
        const _itemQuantity = Number(itemQuantity)
        console.log(itemQuantity);
        console.log(_itemQuantity);
        
        basket.value[itemId] = _itemQuantity
    }
    return {
        basket,
        addItemToBasket,
        setItemQuantity
    }
}
