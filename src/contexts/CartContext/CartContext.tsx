 import { createContext, useState } from "react";

// interface CartItemsProps {
//   id: number;
//   discount: number;
//   cover: string;
//   name: string;
//   price: number;
//   qty: number;
// }

 export const CartContext = createContext([]);

// // export const CartProvider = ({ children }: any) => {
// //   const [cartItem, setCartItem] = useState<CartItemsProps[]>([]);

// //   const addToCart = (product: CartItemsProps) => {
// //     const productExit = cartItem.find((item: any) => item.id === product.id);

// //     if (productExit) {
// //       setCartItem(
// //         cartItem.map((item: any) =>
// //           item.id === product.id
// //             ? { ...productExit, qty: productExit.qty + 1 }
// //             : item
// //         )
// //       );
// //     } else {
// //       setCartItem([...cartItem, { ...product, qty: 1 }]);
// //     }
    
// //   };
// //   console.log(cartItem);

//   return (
//     <CartContext.Provider value={{ addToCart, cartItem }}>
//       {children}
//     </CartContext.Provider>
//   );
// };
