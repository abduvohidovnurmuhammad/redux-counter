import { createSlice } from '@reduxjs/toolkit';

 const  initialState = {
    count : 0 ,


 }


const counter = createSlice({
    name:"counter",
    initialState,
    reducers:{
      icrement:(state,action)=>{
         state.count++;
      },
      decrement:(state,action)=>{
        state.count--
      }
    }
  
})
export const {icrement,decrement} = counter.actions
export default counter.reducer;


