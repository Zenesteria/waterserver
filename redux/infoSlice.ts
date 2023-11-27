import {createSlice} from '@reduxjs/toolkit'

interface intialState{
    IP:string
    status:0|1
    "Water Quality Index":number
    Turbidity:number
    "Total Dissolved Solids":number
    Temperature:number
}

const initialState:intialState = {
    IP:'---.---.---.---',
    status:0,
    "Water Quality Index":0,
    Turbidity:0,
    "Total Dissolved Solids":0,
    Temperature:0

}

const infoSlice = createSlice({
    name:'InfoSlice',
    initialState,
    reducers:{
        setOnline:(state,action) => {
            state.IP = action.payload.IP
            state.status = action.payload.status
        },
        setData:(state,action) => {
            const {Temperature, Turbidity} = action.payload
            state.Temperature = Temperature,
            state.Turbidity = Turbidity
            state['Total Dissolved Solids'] = action.payload['Total Dissolved Solids']
            state['Water Quality Index'] = action.payload['Water Quality Index']
        }
    }
})

export default infoSlice.reducer
export const {setOnline, setData} = infoSlice.actions