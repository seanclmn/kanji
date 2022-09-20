import {Button, TextInput} from '@mantine/core'
import { useRef,useState } from 'react';
import {FetchKanji,DataResult} from '../hooks/FetchKanji'

const KanjiDictionary = () => {
	const [textInputValue,setTextInputValue]=useState('')
	const [searchKanji,setSearchKanji]=useState('')
	const ref = useRef<HTMLInputElement>(null);

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

			<div>
				<p>
					Kanji: {newKanji && newKanji[0].kanji}
				</p>
				<ul>
					Meanings: {newKanji && newKanji[0].meanings.map((meaning,index)=><li key={index}>{meaning}</li>)}
				</ul>
			</div>
		</div>


	)

}

export default KanjiDictionary
