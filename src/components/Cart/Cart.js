import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items
    .map(citem => <li>{citem.name}</li> )}</ul>;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    return <Modal onClick={props.onCloseCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
};

export default Cart;