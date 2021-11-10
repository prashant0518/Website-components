
import CartContainerItem from "./cartcontaineritem";
import { useGlobalContext } from "./cart";
import './cart.css';
const CartContainer = () => {
    const { amount, clearcart, cart,total } = useGlobalContext();

    if (cart.length == 0) {
        return <h3 className="text-danger display-6 fs-3 mt-5 fw-light text-center">Your Cart is empty</h3>
    }

    return <div className="container mt-5 ">
        <div className="row">
            <div className="col">
                <h1 className="text-uppercase text-center">Your Bag</h1>
                <div>
                    {

                        cart.map((item, index) => {

                            return <CartContainerItem key={item.id} {...item} />
                        })}
                </div>
                <div className="bg-info mx-auto" style={{ height: ".1rem", width: "50rem" }}></div>
                <div className="d-flex justify-content-between fs-4 mt-4">
                    <h5 style={{ marginLeft: "13em" }}  >Total</h5>
                    <p className="" style={{ marginRight: "10em" }}>${total}</p>


                </div>
                <button type="button" className="btn btn-outline-danger xtra-btn " onClick={clearcart}>Clear cart</button>
            </div>
        </div>
    </div>
}
export default CartContainer;