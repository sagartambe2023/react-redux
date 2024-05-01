import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartList: []
}

const cartSlice = createSlice({
    name: "cartList",
    initialState,
    reducers: {
        //actions
        addCart: (state, action) => {
            state.cartList = [...state.cartList, action.payload ];
            console.log(state.cartList)
        },
        
        deleteCart: (state, action) => {
           
            state.cartList = state.cartList.filter((expend) => {
                console.log(expend.id)
                return expend.id !== action.payload
            })
            console.log("payload id", action.payload)
        },
        totalQuantity:(state,action)=>{

        },
        totalAmount:(state,action)=>{

        }
    }
})

export const { addCart, deleteCart, totalQuantity,  totalAmount} = cartSlice.actions;

export default cartSlice.reducer