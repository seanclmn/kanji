import {Button, TextInput} from '@mantine/core'
import { useRef,useState } from 'react';
import {FetchKanji,DataResult} from '../hooks/FetchKanji'

const KanjiDictionary = () => {
	const [textInputValue,setTextInputValue]=useState('')
	const [searchKanji,setSearchKanji]=useState('')
	const ref = useRef<HTMLInputElement>(null);

	// const newKanji = FetchKanji(textInputValue).kanjiData
	// console.log(newKanji)
	const newKanji = FetchKanji(searchKanji).kanjiData

	const submitKanji = () => {
		setSearchKanji(textInputValue)
	}


	return(
		<div>
			<div 
				className='
					flex 
					flex-row 
					justify-around 
					items-center 
					w-[80%]
					mx-auto
					'
				>
				<TextInput 
					placeholder="Type in your kanji" 
					className='grow mr-1'
					ref={ref}
					onChange={(e)=>setTextInputValue(e.target.value)}
				/>
				<Button
					onClick={submitKanji}
					>Look up</Button>
			</div>
			<p>this is a dictionary. boi.</p>
		</div>


	)

}

export default KanjiDictionary
