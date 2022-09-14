import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'

export interface initialStateProps {
  userData: userData
}

export interface userData {
  userName: string
  kanjiTopScores: [number,number,number,number,number,number]
}

export interface ChangeScoreProps {
  level: number
  newScore: number
}



const initialState: initialStateProps = {
  userData: {
    userName: "sean",
    kanjiTopScores: [0,0,0,0,0,0]

  },
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    changeScore: (state, action: PayloadAction<ChangeScoreProps>) =>{
      const currentScore = state.userData.kanjiTopScores[action.payload.level-1]
      if(action.payload.newScore > currentScore){
        state.userData.kanjiTopScores[action.payload.level-1] = action.payload.newScore
      }
    }
  }
})

export const {changeScore} = userDataSlice.actions
 
export const getUserData = (state: RootState) => state


export default userDataSlice.reducer