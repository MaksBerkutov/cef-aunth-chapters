import { useEffect, useState } from 'react'
import trigger from '../../Events/triggers.json'

const useRegister = setError => {
	const [email, setEmail] = useState('')
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	useEffect(() => {
		const errAunthHandler = ({ detail }) => {
			setError(detail.message)
		}
		
		document.addEventListener(trigger.TriggerErrorRegister, errAunthHandler)
		document.addEventListener(trigger.TriggerSuscssesfulReg, errAunthHandler)
		return () => {

			document.removeEventListener(
				trigger.TriggerErrorRegister,
				errAunthHandler
			)
			document.removeEventListener(
				trigger.TriggerSuscssesfulReg,
				errAunthHandler
			)
		}
	}, [])
	const emailChange = e => {
		e.preventDefault()
		setEmail(e.target.value)
	}
	const loginChange = e => {
		e.preventDefault()
		setLogin(e.target.value)
	}
	const passwordChange = e => {
		e.preventDefault()
		setPassword(e.target.value)
	}
	const passwordConfirmChange = e => {
		e.preventDefault()
		setPasswordConfirm(e.target.value)
	}
	return [
		email,
		login,
		password,
		passwordConfirm,
		emailChange,
		loginChange,
		passwordChange,
		passwordConfirmChange,
	]
}

export default useRegister
