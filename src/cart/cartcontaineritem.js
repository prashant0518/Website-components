import { useGlobalContext } from "./cart";
import { BiCaretUp, BiCaretDown } from 'react-icons/bi';
import { useEffect, useState } from "react";
const CartContainerItem = ({id,price,title,img,amount}) => {
    const {  removeitem, change,increase } = useGlobalContext();
    
    return <div className="container">
        <div className="row">
            <div className="col mt-2">



                    <section className={`d-flex justify-content-around  `} key={id}>
                        <div className="d-flex extra">
                            <img src={img} className="img-fluid images me-5"></img>
                            <div>
                                <h4>{title}</h4>
                                <p className="mb-0 text-muted">${price}</p>
                                <button type="button" className="btn px-0 text-info" onClick={() => removeitem(id)}>remove</button>
                            </div>
                        </div>
                        <div >
                            <button type="button" className="btn fs-4 text-info" onClick={() => increase(id)}>
                                <span>
                                    <BiCaretUp />
                                </span>
                            </button>
                            <p className="text-center mb-0 fs-4">{amount}</p>
                            <button type="button " className="btn text-info fs-4 " onClick={() => change(id, 'dec')} >
                                <span>
                                    <BiCaretDown />
                                </span>
                            </button>
                        </div>

                    </section>

               
            </div>
        </div>
    </div>
}
export default CartContainerItem;