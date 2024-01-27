import { useEffect, useState } from 'react'
import trigger from '../../Events/triggers.json'

const useAuntification = (setResponse, setError) => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	useEffect(() => {
		const errAunthHandler = ({ detail }) => {
			setError(detail.message)
		}
		
		const getChaptershHandler = ({ detail }) => {
			const chapters = JSON.parse(detail.message)
			setError(detail)
			setResponse(chapters)
		}
		document.addEventListener(trigger.TriigerGetChapters, getChaptershHandler)
		document.addEventListener(
			trigger.TriggerErrorAuntification,
			errAunthHandler
		)


		return () => {
			document.removeEventListener(
				trigger.TriggerErrorAuntification,
				errAunthHandler
			)
			document.removeEventListener(
				trigger.TriigerGetChapters,
				getChaptershHandler
			)
		}
	}, [])

	const loginChange = e => {
		e.preventDefault()
		console.log(e.target.value)

		setLogin(e.target.value)
	}
	const passwordChange = e => {
		e.preventDefault()
		setPassword(e.target.value)
	}
	return [login, password, loginChange, passwordChange]
}

export default useAuntification
