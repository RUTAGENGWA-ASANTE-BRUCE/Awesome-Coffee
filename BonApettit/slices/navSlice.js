import {createSlice} from "@reduxjs/toolkit"

const initialState={
    choosenCoffee:null,
    choosenBugger:null,
    choosenSteak:null,
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
    },
    setChoosenSteak:(state,action)=>{
        state.choosenSteak=action.payload
}
    }
})

export const {setChoosenCoffee,setChoosenBugger,setChoosenSteak} =navSlice.actions;

//selectors

export const selectChoosenCoffee=(state)=>state.nav.choosenCoffee
export const selectChoosenBugger=(state)=>state.nav.choosenBugger
export const selectChoosenSteak=(state)=>state.nav.choosenSteak

export default navSlice.reducer;