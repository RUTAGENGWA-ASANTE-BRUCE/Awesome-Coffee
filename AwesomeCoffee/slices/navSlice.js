import {createSlice} from "@reduxjs/toolkit"

const initialState={
    choosenCoffee:null,
}
export const navSlice=createSlice({
    name:"nav",
    initialState,
    reducers:{
        setChoosenCoffee:(state,action)=>{
                state.choosenCoffee=action.payload
        }
    }
})

export const {setChoosenCoffee} =navSlice.actions;

//selectors

export const selectChoosenCoffee=(state)=>state.nav.choosenCoffee

export default navSlice.reducer;