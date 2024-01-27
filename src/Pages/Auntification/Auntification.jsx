import React from 'react'
import useAuntification from './useAuntification.jsx'
import { AuntificateTrigger } from '../../Events/Auntification/AuntificationTriiger'

const Auntification = ({
	butClass,
	error,
	className,
	setResponse,
	setError,
	conntentLogin,
}) => {
	const [login, password, loginChange, passwordChange] = useAuntification(
		setResponse,
		setError
	)
	const onClick = () => {
		setError(AuntificateTrigger(login, password))
	}
	return (
		<>
			<div className={conntentLogin}>
				<div className={className}>
					<div class='form__group field' style={{ marginBottom: '15px' }}>
						<input
							type='input'
							class='form__field'
							value={login}
							onChange={loginChange}
							placeholder=' '
							required
						/>
						<label class='form__label'>Логин</label>
					</div>

					<div class='form__group field'>
						<input
							placeholder=' '
							type='password'
							class='form__field'
							value={password}
							onChange={passwordChange}
							required
						/>
						<label class='form__label'>Пароль</label>
					</div>
				</div>
			</div>

			<div className={butClass}>
				<div className='text-danger mt-2'>{error}</div>

				<button className='space-btn' onClick={onClick}>
					<span>Войти</span>
				</button>
			</div>
		</>
	)
}

export default Auntification
