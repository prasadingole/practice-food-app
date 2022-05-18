import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartItem from './CartItem';
const Cart = (props) => {
    
    const cartCtx = useContext(CartContext);
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        let citem = {...item};
        citem.amount = 1;
        cartCtx.addItem(citem);
    };
    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items
        .map(citem => <CartItem key={citem.id} name={citem.name} amount={citem.amount} price={citem.price} onRemove={cartItemRemoveHandler.bind(null,citem.id)} onAdd={cartItemAddHandler.bind(null,citem)} />)}</ul>;
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