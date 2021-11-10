const reducer =(state,action)=>{
if(action.type==="Loading"){
    return {...state,loading:true}
}
if(action.type==="Display"){
    return {...state,loading:false,cart:action.payload}
}
if(action.type==="Clear_Cart"){
    return {...state,cart:[]}
}
if(action.type==="Remove_Item"){
    return {...state,cart:state.cart.filter((item)=>item.id!==action.payload)}
}
if(action.type==="Change"){
   let cartItem = state.cart.map((item,index)=>{
     if(item.id==action.payload.id){
        if(action.payload.type=='inc'){
           
            return {...item,amount:item.amount+1}
        }
        if(action.payload.type=='dec'){
        
             return {...item,amount:item.amount-1}
         }
         
     }
     return item;

   }).filter((item)=>item.amount!==0)
return{...state,cart:cartItem}
}
if(action.type==="Total"){
 const {total,amount} = state.cart.reduce((cartTotal,item)=>{
const {price,amount} =item;
cartTotal.amount+=amount;
let sum = price*amount;
cartTotal.total+=sum;
return cartTotal;
 },{
     total:0,
     amount:0
 }
 )
 let newTotal=total.toFixed(2); 
 
    return {...state,total:newTotal,amount}
}
if(action.type==="Increase"){
    let tempCart = state.cart.map((item)=>{
        if(item.id==action.payload){
            return{...item,amount:item.amount+1}
        }
        return item;
    })
    return {...state,cart:tempCart}
}
return state;
}

export default reducer;