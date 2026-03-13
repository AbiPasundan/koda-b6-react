import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    menu: [],
    user: [],
}

export const fetchData = createAsyncThunk(
  "data/fetch",
  async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json"
    )
    return res.json()
  }
)

const getAllData = createSlice({
    name: 'getAllData',
    initialState,
    reducers: {
        setUsers: (state, actions) => {
            state.menu = actions.payload
        },
        setMenu: (state, actions) => {
            state.menu = actions.payload
        },
    },
})

export const { setUsers, setMenu } = getAllData.actions
export default getAllData.reducer
