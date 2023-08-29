import {createSlice} from '@reduxjs/toolkit'

interface intialState{
    IP:string
    status:number
}

const initialState:intialState = {
    IP:'---.---.---.---',
    status:0

}

const infoSlice = createSlice({
    name:'InfoSlice',
    initialState,
    reducers:{
        setOnline:(state,action) => {
            state.IP = action.payload.IP
            state.status = action.payload.status
        }
    }
})

export default infoSlice.reducer
export const {setOnline} = infoSlice.actions