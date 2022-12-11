import { createContext, useEffect, useState } from "react";

export interface CartItemProps {
  id: number;
  discount?: number | string;
  cover: string;
  name: string;
  price: number | string;
  qty: number | 0;
}

export interface CartProps extends CartItemProps {
  product?: CartItemProps[];
  decreaseQty?: (product: CartItemProps) => void;
}

interface addToCartContext {
  addToCart: (product: CartItemProps) => void;
  decreaseQty: (product: CartItemProps) => void;
  cartItems: CartItemProps[];
  removeFromCart: (product: CartItemProps) => void;
}

export const CartContext = createContext<addToCartContext>({
  addToCart(product: CartItemProps) {},
  decreaseQty(product) {},
  cartItems: [],
  removeFromCart: (product: CartItemProps) => {},
});

/*
  1º: Header, Footer, MainPage, Carrinho
      - MainPage - um grid, na esquerda as categorias, na direita um carrossel mostrando os produtos
      - Carrinho - mostra os itens que serão comprados, usando um contexto, tem que salvar o carrinho 
        ao recarregar a página no localStorage 
        (nota: para manter os dados ao recarregar a página, usar o código do document.readyState).
      - Cada produto do carrinho terá as seguintes propriedades: 
        {
          id: number;
          discount?: number; esse "?" quer dizer que essa propriedade não é obrigatória
          cover: string;
          name: string;
          price: number;
          qty: number;
        }
      - Quando for adicionar um item que já tem no carrinho, aumenta o qty do mesmo, e para retirar a mesma 
        coisa só que ao contrário
  2º: Usar lib de carrossel, sugestões: https://react-slick.neostack.com/
*/

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItem] = useState<CartProps[]>([]);

  const addToCart = (product: CartItemProps) => {
    const productExit = cartItems.find(
      (item: CartItemProps) => item.id === product.id
    );

    if (productExit) {
      setCartItem(
        cartItems.map((item: CartItemProps) =>
          item.id === product.id
            ? { ...item, qty: item?.qty + 1 }
            : { ...item, qty: item?.qty }
        )
      );
    } else {
      setCartItem([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product: CartItemProps) => {
    const productExit = cartItems.find(
      (item: CartItemProps) => item.id === product.id
    );

    if (productExit?.qty === 1) {
      setCartItem(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }
  };

  const removeFromCart = (product: any) => {
    const productFiltered = cartItems.filter(
      (item: any) => item.id !== product.id
    );
    console.log("produto:", product)
    setCartItem(productFiltered)
    console.log("Filtered:", productFiltered);
  };

  useEffect(() => {
    let newCartItems = JSON.parse(localStorage.getItem("CartItems") ?? "");
    setCartItem(newCartItems);
  }, []);

  useEffect(() => {
    if (document.readyState === "complete") {
      localStorage.setItem("CartItems", JSON.stringify(cartItems) ?? []);
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, decreaseQty, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
