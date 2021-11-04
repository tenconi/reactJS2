import './CartWidget.css'

export const  CartWidget = () =>{
    return(
        <a href="" className="widget">
            <i className="icon-basket"></i>
            <p className="cart-counter">0</p>
        </a>
    )
}
export default CartWidget;