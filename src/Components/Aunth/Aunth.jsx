import { useEffect, useState } from 'react'
import Auntification from '../../Pages/Auntification/Auntification.jsx'
import Register from '../../Pages/Register/Register.jsx'
import trigger from '../../Events/triggers.json'
import classes from './Aunth.module.css'
import './Aunth.scss'
const Aunth = ({ setResponse }) => {
	const [aunthState, setAunthState] = useState(0)
	const [error, setError] = useState('')
	useEffect(() => {
		const discManyHandler = () => {
			setError('Слишком много попыток входа ваш ID заблокирован на 10 минут')
		}
		document.addEventListener(trigger.TriggerDisconnectMany, discManyHandler)
		return () => {
			document.removeEventListener(
				trigger.TriggerDisconnectMany,
				discManyHandler
			)
		}
	}, [])
	const OpenRegister = () => {
		setAunthState(1)
	}
	const OpenAunth = () => {
		setAunthState(0)
	}
	return (
		<div className={classes.container}>
			<div className={classes.containerBackground}>
				<div className={classes.loginContainer}>
					<div className={classes.centerItemsTop}>
						<button
							className={aunthState === 1 ? classes.btn : classes.btnActive}
							onClick={OpenAunth}
						>
							Вход
						</button>
						<button
							className={aunthState === 0 ? classes.btn : classes.btnActive}
							onClick={OpenRegister}
						>
							Регистрация
						</button>
					</div>
					{aunthState === 0 && (
						<Auntification
							{...{ error, setError, setResponse }}
							butClass={classes.centerItemsBottom}
							className={classes.forms}
							conntentLogin={classes.conntentLogin}
						/>
					)}
					{aunthState === 1 && (
						<Register
							{...{ error, setError }}
							butClass={classes.centerItemsBottom}
							className={classes.forms}
						/>
					)}
				</div>
			</div>
			<div className={classes.bluroverlay}></div>
		</div>
	)
}

export default Aunth
