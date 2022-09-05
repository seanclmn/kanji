const express = require('express')
const router = express.Router()

const Kanji = require('../../models/kanjimodel')

router.get('/test', (req,res) => res.send('this is a test'))

router.get('/', (req,res) => {
	Kanji.find()
		.then(kanji => res.json(kanji))
		.then(res => console.log(res.data))
		.catch(err => res.status(404).json({nokanjifound: "No kanji were found"}))
})

module.exports = router 
