import { useState } from 'react'
import { BsArrowLeftSquareFill } from 'react-icons/bs'
import { BsArrowRightSquareFill } from 'react-icons/bs'
import style from './List.module.css'
import triggers from '../../Events/triggers.json'

const List = ({ id, num }) => {
	const [index, setIndex] = useState(0)

	const left = () => {
		setIndex(prevIndex => Math.max(prevIndex - 1, 0))
		send()
	}

	const right = () => {
		
		setIndex(prevIndex => Math.min(prevIndex + 1, num.length - 1))
		send()
	}

	const send = () => {
		const value = num[index]
		// Вы можете выполнить любые необходимые действия с использованием value
		mp.trigger(triggers.TriigerUpdateCustomizationPerson, id, index)
	}
	if (num === undefined) return
	return (
		<div id={id} className={style.ListContainer}>
			<BsArrowLeftSquareFill onClick={left} className={style.ArrowButton} />
			<div className={style.Text}>{num[index]}</div>
			<BsArrowRightSquareFill onClick={right} className={style.ArrowButton} />
		</div>
	)
}

export default List
