import { Card, Button, Elevation  } from '@blueprintjs/core'

interface Props {
	kanji: string
}

export const KanjiCard = ({kanji}: Props) => {
	return(
		<div>

			<Card interactive={true} elevation={Elevation.TWO}>
    		<h5>{kanji}</h5>
    		<Button>Submit</Button>
			</Card>
			<p>KanjiCard</p>
		</div>)

}
