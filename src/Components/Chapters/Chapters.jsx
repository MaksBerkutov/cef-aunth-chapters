import { useEffect, useState } from 'react'
import ChoicePlayerStore from './Store/Store.jsx'
import Card from './Card/Card.jsx'
import './Chapters.scss'

const Chapters = ({ setCreateMode, chapters }) => {
	const [currentAccount, setCurrentAccount] = useState(null)
	const store = new ChoicePlayerStore()
	if (chapters !== null) store.setDataPlayers(chapters)
	const [classState, setClass] = useState('choice-player')

	useEffect(() => {
		return () => {}
	}, [store])

	useEffect(() => {
		const timeout = setTimeout(
			() => setClass(old => old + ' choice-player_active'),
			200
		)

		return () => clearTimeout(timeout)
	}, [])
	return (
		<div className='containerChapter'>
			<div className={classState}>
				{store.players.map((element, index) => {
					return (
						<Card
							key={element.id}
							{...{
								index,
								element,
								setCurrentAccount,
								currentAccount,
								setCreateMode,
							}}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default Chapters
