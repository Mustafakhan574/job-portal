import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
          name:"user",
          initialState:{
                    userdata:[],
                    copyuserdata :[],
                    postid:"",
                    applyposts:[],
          },
          reducers:{
              setuserdata:(state,action)=>{
                state.userdata = action.payload;
                state.copyuserdata = [...action.payload]   
              },
              setcopyuserdata:(state,action)=>{
                state.copyuserdata = action.payload    
              },
              setpostid :(state,action)=>{
                state.postid = action.payload
              },
              setapplyposts :(state,action)=>{
                state.applyposts = action.payload
              }        
          }

})
export const {setuserdata,setpostid,setapplyposts,setcopyuserdata} = userSlice.actions;
export default userSlice.reducer;