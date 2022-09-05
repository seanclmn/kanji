const mongoose = require('mongoose')
const Schema = mongoose.Schema;


// const KanjiSchema = new mongoose.Schema({
// 	strokes: Number,
// 	grade: Number,
// 	freq: Number,
// 	jlpt_old: Number,
// 	jlpt_new: Number,
// 	meanings: [String],
// 	readings_on: [String],
// 	readings_kun: [String],
// 	wk_level: Number,
// 	wk_meanings: [String],
// 	wk_readings_on: [String],
// 	wk_readings_kun: [String],
// 	wk_radicals: [String],
// 	kanji: String
// })

const KanjiSchema = new Schema({},{ strict: false})
// const Kanji = mongoose.model('Kanji',KanjiSchema,'kanji')
// module.exports = {Kanji}

module.exports = mongoose.model('kanji',KanjiSchema)
