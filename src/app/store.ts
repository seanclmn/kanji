import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		kanjis: newReducer

	}
	
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {kanjis: KanjisState}
export type AppDispatch = typeof store.dispatch
