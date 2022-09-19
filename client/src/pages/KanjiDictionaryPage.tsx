import {Outlet} from 'react-router'
import KanjiDictionary from '../components/KanjiDictionary'
const KanjiDictionaryPage = () => {

	return(
		<div className="w-[100%] h-[95vh] bg-white pt-5">
			<KanjiDictionary/>	
		</div>
	)

}

export default KanjiDictionaryPage
