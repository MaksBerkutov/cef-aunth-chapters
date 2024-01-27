import { useMemo } from 'react'
import cn from 'classnames'
import Active from './Cads/Active.jsx'
import NoActive from './Cads/NoActive.jsx'
import trigger from '../../../Events/triggers.json'

import './Card.scss'

const Card = ({
	index,
	element,
	setCurrentAccount,
	currentAccount,
	setCreateMode,
}) => {
	const names = useMemo(
		() => ({
			Food: 'Еда',
			Water: 'Вода',
			Health: 'Здоровье',
			Endurance: 'Выносливость',
		}),
		[]
	)
	const trigerStart = () => {
		mp.trigger(trigger.TriggerSpawnUsers, JSON.stringify(element)) //Spawn
	}
	const triggerDelete = () => {
		mp.trigger('', element.Id) //Delete trigger
	}
	const createDonate = () => {
		mp.trigger('') //BuyDonateTrigger
	}
	const createPlayer = () => {
		setCreateMode({ element, index })
	}
	return (
		<div
			className='choice-player-card'
			onClick={() => setCurrentAccount(element.Id)}
		>
			{element.Type === 'active' && (
				<Active
					{...{
						cn,
						currentAccount,
						element,
						names,
						trigerStart,
						triggerDelete,
					}}
				/>
			)}
			{(element.Type === null || element.Type === 'donate') && (
				<NoActive {...{ element, createDonate, createPlayer }} />
			)}
		</div>
	)
}

export default Card
