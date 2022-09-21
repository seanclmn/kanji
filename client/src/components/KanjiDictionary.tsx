import {Button, TextInput, Title} from '@mantine/core'
import { useRef,useState } from 'react';
import {FetchKanji,DataResult} from '../hooks/FetchKanji'

interface newKanji {
	newKanji: DataResult[]
}

const KanjiDictionary = () => {
	const [textInputValue,setTextInputValue]=useState('')
	const [searchKanji,setSearchKanji]=useState('')
	const ref = useRef<HTMLInputElement>(null);
	const newKanji = FetchKanji(searchKanji).kanjiData

	const submitKanji = () => {
		console.log("NEW VALUE PUSHED")
		setSearchKanji(textInputValue)
		console.log(newKanji)
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

			<div
				className='
					w-[70%]
					mx-auto
					'
				
				>
				{newKanji && newKanji.length>0 && <KanjiInformation newKanji={newKanji}/>}
				{searchKanji.length===0 && <KanjiPrimer/>}
				{newKanji && newKanji.length===0 && <NoKanjiResult/>}

			</div>
		</div>
	)
}

const KanjiInformation = ({newKanji}:newKanji)=>{
	return(
		<div>
			<Title className='text-center'>
				Kanji: {newKanji[0].kanji}
			</Title>

			<div className='grid grid-cols-2'>
				<div className='text-center mx-auto w-[200px]'>
					<p>Meanings: </p>
					<ul className='text-left'>
						{newKanji[0].meanings.map((meaning,index)=><li key={index}>{meaning}</li>)}
					</ul>
				</div>

				<div className='text-center mx-auto w-[200px]'>
					<p>On Readings</p>
					<ul className='text-left'>
						{newKanji[0].readings_on.map((meaning,index)=><li key={index}>{meaning}</li>)}
					</ul>
				</div>

				<div className='text-center mx-auto w-[200px]'>
					<p>Kun Readings</p>
					<ul className='text-left'>
						{newKanji[0].readings_kun.map((meaning,index)=><li key={index}>{meaning}</li>)}
					</ul>
				</div>

				<div className='text-center mx-auto w-[200px]'>
					<p>Kun Readings</p>
					<ul className='text-left'>
						{newKanji[0].readings_kun.map((meaning,index)=><li key={index}>{meaning}</li>)}
					</ul>
				</div>
			</div>


		</div>
	)
}

export const KanjiPrimer = ()=>{
	return(
		<div>
			<p>Simply type in <b>one</b> kanji and you will see:</p>
			<ul>
				<li>A list of meanings</li>
				<li>A list of on readings</li>
				<li>A list of kun readings</li>
			</ul>
		</div>
	)
}

export const NoKanjiResult = () => {
	return(
		<div>
			<p>
				no result...
			</p>
		</div>
	)
}



export default KanjiDictionary
