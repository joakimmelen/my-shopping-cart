import CartItem from "../CartItem/CartItem";
//styles
import { Wrapper } from "./Cart.styles";
//types
import { CartItemType } from "../App";
import { Button } from "@mui/material";

type Props = {
    cartItems: CartItemType[];
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
    const calculateTotal = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.quantity * item.price, 0);
    const calculateQuantity = (items: CartItemType[]) => 
    items.reduce((ack: number, item) => ack + item.quantity, 0);

   
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2> <Button size="large">Checkout</Button>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                />
                )
                )
            }
            <Button>Empty cart</Button>
            <div className="cartTotal">
                <p>{calculateQuantity(cartItems)} items</p>
                <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
            </div>
        </Wrapper>
    )
}

export default Cart;