const express = require('express')
const cors = require('cors')
const router = express.Router()
const app = express()

const Kanji = require('../../models/kanjimodel')


// MISC FUNCTIONS



// Shuffle an Array
const shuffle = (array) => {
	let currentIndex = array.length,  randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
}

// Pick random element of an array

const randomElement = (array) => array[Math.floor(Math.random()*array.length)]; 




// ROUTER

router.get('/test', (req,res) => res.send('this is a test'))

router.get('/fullkanjilist', (req,res) => {
	Kanji.find()
		.then(kanji => res.json(kanji))
		.then(res => console.log(res.data))
		.catch(err => res.status(404).json({nokanjifound: "No kanji were found"}))
})

router.get('/fullkanjilist/grade/:grade', (req,res)=>{
	Kanji.find({"grade": req.params.grade})
		.then(kanji => res.json(kanji))
		.catch(err => console.log(err.message))
})

router.get('/fullkanjilist/:kanji', (req,res)=>{
	Kanji.find({"kanji":req.params.kanji})
		.then(kanji=>res.json(kanji)[0])
		.catch(err => console.log(err))

})

router.get('/kanjiquestions/:grade/:length',(req,res)=>{
	const createIds = (length) => {
		const questionsLength = req.params.length
		var indices = []
		for(let i=0;i<questionsLength;i++){
			indices.push(Math.floor(Math.random()*length))
		}
		return(indices)
	}

	const formatQuestion = (kanjiList,kanjiObject) => {
		const index = kanjiList.indexOf(kanjiObject)
		var incorrectKanji = kanjiList
		incorrectKanji.splice(index,1)
		var options = []

		for(let i = 0;i<3;i++){
			randomIncorrectKanjiIndex = Math.floor(Math.random()*kanjiList.length)
			options.push(
				{optionName: incorrectKanji[randomIncorrectKanjiIndex].kanji, correct: false}
			)
			incorrectKanji.splice(randomIncorrectKanjiIndex,1)
		}
		options.push({optionName: kanjiObject.kanji, correct: true})

		const randomQuestionType = randomElement(['readings_on','readings_kun','meanings'].filter((questionType)=>kanjiObject[questionType].length>0))
		return({question: [randomQuestionType,randomElement(kanjiObject[randomQuestionType])], options: shuffle(options)})
	}

	const createQuestions = (kanjiList) => {
		const filteredKanjiList = createIds(kanjiList.length).map(index=>kanjiList[index])
		return(filteredKanjiList.map(kanji=>formatQuestion(kanjiList,kanji)))

	}
	
	Kanji.find({"grade": req.params.grade})
		.then(kanji => res.json(createQuestions(kanji)))
		.catch(err => console.log(err.message))

})

module.exports = router 
