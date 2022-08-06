import {configureStore} from '@reduxjs/toolkit'
import changeScore from '../features/kanji/kanjiSlice'

export const store = configureStore({
	reducer: {
		userData: changeScore

	}
	
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {kanjis: KanjisState}
export type AppDispatch = typeof store.dispatch
