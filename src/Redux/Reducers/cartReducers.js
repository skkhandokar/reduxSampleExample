import { ADD_TO_CART, REMOVE_CART } from "../Actions/cartAction";


const initialState ={

    cart :[],
    products: [ { name: "lenovo laptop", id: 1 },
    { name: "hp laptop", id: 2 },
    { name: "dell laptop", id: 3 },
    { name: "asus laptop", id: 4 },
    { name: "samsung laptop", id: 5 },
    { name: "walton laptop", id: 6 }]
}



export const cartReducers =(state=initialState,action) =>{

    switch (action.type){

        case ADD_TO_CART:
          
            const newItem={
                productId:action.id,
                productName:action.name,
                cartId:state.cart.length +1
            }
            const newCartAdd=[...state.cart,newItem];
            return{
                ...state, cart:newCartAdd };
          

        case REMOVE_CART:
            const id=action.id;
            const cart=[...state.cart];
            const newCart = cart.filter(item => item.cartId !==id);
            return {
              ...state, cart:newCart 
            }
            
        default :
        return state;
    }

}