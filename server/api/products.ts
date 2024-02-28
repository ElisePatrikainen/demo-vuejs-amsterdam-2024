// import { Product } from "~/types/Product";

// const products: Product[] = [
//   {
//     id: "1",
//     name: "Basic Tee",
//     href: "#",
//     price: 32,
//     color: "Sienna",
//     inStock: true,
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
//   {
//     id: "2",
//     name: "Basic Tee",
//     href: "#",
//     price: 32,
//     color: "Black",
//     inStock: true,
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
//   {
//     id: "3",
//     name: "Basic Tee",
//     href: "#",
//     price: 32,
//     color: "White",
//     inStock: true,
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
//   {
//     id: "4",
//     name: "Basic Tee",
//     href: "#",
//     price: 32,
//     color: "Grey",
//     inStock: true,
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
//     imageAlt:
//       "Front of men's Basic Tee in shttps://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpgienna.",
//   },
//   {
//     id: "5",
//     name: "Basic Tee",
//     href: "#",
//     price: 32,
//     color: "Pink",
//     inStock: true,
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
//   {
//     id: "6",
//     name: "Basic Tee",
//     href: "#",
//     price: 32,
//     color: "Multi",
//     inStock: true,
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-05.jpg",
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
//   {
//     id: "7",
//     name: "Basic Tee",
//     href: "#",
//     price: 32,
//     color: "Drawn multi",
//     inStock: true,
//     size: "Large",
//     imageSrc:
//       "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
//     imageAlt: "Front of men's Basic Tee in sienna.",
//   },
// ];

// export default defineEventHandler(() => {
//   return products   ;
// });


import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  const client = await serverSupabaseClient(event)
  // Wait so we can better see what is hapening
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { data } = await client.from('products').select('id,name,color,imagesrc,price,availability')
  return data
})
