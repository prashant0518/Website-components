import {BsCartFill} from 'react-icons/bs'
import './cart.css';
import { useGlobalContext } from './cart';
const Navbar =()=>{

  const {amount} = useGlobalContext();
    return <div className="container-fluid px-0">
        <div className="row">
            <div className="col mt-2 ">
                <nav className="navbar navbar-dark bg-info">
                    <a className="navbar-brand" href="#"><i className="fs-1 text-white ms-4 ">Cart</i></a>
                   
                    <span className="cart-icon me-5 fs-1"><BsCartFill /></span>
                    <div className=" bg-danger rounded-circle circ text-white fw-bold fs-4">{amount}</div>
                  
                </nav>
            </div>
        </div>
    </div>
}

export default Navbar;