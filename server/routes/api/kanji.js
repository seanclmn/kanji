const express = require('express')
const router = express.Router()

const Kanji = require('../../models/kanjimodel')

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

router.get('/kanjiquestions/:grade/:length',(req,res)=>{
	const createIds = (length) => {
		const questionsLength = req.params.length
		var indices = []
		for(let i=0;i<questionsLength;i++){
			indices.push(Math.floor(Math.random()*length))
		}
		return(indices)
	}
	
	Kanji.find({"grade": req.params.grade})
		.then(kanji => res.json(createIds(kanji.length).map(index=>kanji[index])))
		.catch(err => console.log(err.message))

})

module.exports = router 
