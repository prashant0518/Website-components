import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import Navbar from "./navbar1";
import CartContainer from "./cartcontainer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();
const initialState ={
    total:0,
    amount:0,
    cart:[],
    loading:false
}
const Cart =()=>{

    const [state,dispatch] = useReducer(reducer,initialState) ;
    const fetchData =async ()=>{
      dispatch({type:"Loading"})
     const resp =await fetch(url);
     const cart = await resp.json();
     dispatch({type:"Display",payload:cart});

    }
    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{
      dispatch({type:"Total"})
    },[state.cart]);
    const clearcart =()=>{
        dispatch({type:"Clear_Cart"});
    }
    const removeitem =(id)=>{
        dispatch({type:"Remove_Item",payload:id});
      
    }
    const change=(id,type)=>{
       dispatch({type:"Change",payload:{id,type}})
    }
    const increase =(id)=>{
        dispatch({type:"Increase",payload:id})
    }
if(state.loading){
   return <div className="d-flex justify-content-center  align-items-center" style={{height:"60rem"}}>
       <div className="spinner-border me-1 "></div>
       <h2 className="fs-1">Loading...</h2>
        </div>
}
return <div className="container-fluid px-0">
    <div className="row">
        <div className="col">
            <AppContext.Provider value={{...state,clearcart,removeitem,change,increase}}>
            <Navbar />
            <CartContainer />
            </AppContext.Provider>
        </div>
    </div>

</div>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export default Cart;