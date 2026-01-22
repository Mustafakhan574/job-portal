import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
          name:"company",
          initialState:{
                    posts:[],
                    responses : [],
          },
          reducers:{
              setposts:(state,action)=>{
                state.posts = action.payload;    
              },
              setresponses:(state,action)=>{
                state.responses = action.payload;    
              }         
          }

})
export const {setposts,setresponses} = companySlice.actions;
export default companySlice.reducer;