import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'

export interface initialStateProps {
  kanji: string
}

const initialState: initialStateProps = {kanji: "川"}

export const kanjiSlice = createSlice({
  name: 'kanji',
  initialState,
  reducers: {
    changeKanji: (state, action: PayloadAction<string>) =>{
      state.kanji = action.payload
    }
  }
})

export const changeKanji = kanjiSlice.actions
 
export const selectKanji = (state: RootState) => state.kanji


export default kanjiSlice.reducer