import {createSlice} from "@reduxjs/toolkit"

const initialState={
    choosenCoffee:null,
    choosenBugger:null
}
export const navSlice=createSlice({
    name:"nav",
    initialState,
    reducers:{
        setChoosenCoffee:(state,action)=>{
                state.choosenCoffee=action.payload
        },
        setChoosenBugger:(state,action)=>{
            state.choosenBugger=action.payload
    }
    }
})

export const {setChoosenCoffee,setChoosenBugger} =navSlice.actions;

//selectors

export const selectChoosenCoffee=(state)=>state.nav.choosenCoffee
export const selectChoosenBugger=(state)=>state.nav.choosenBugger

export default navSlice.reducer;