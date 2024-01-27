import useRegister from './useRegister.jsx'
import { RegisterTrigger } from '../../Events/Auntification/AuntificationTriiger'

const Register = ({ conntentLogin, butClass, error, className, setError }) => {
	const [
		email,
		login,
		password,
		passwordConfirm,
		emailChange,
		loginChange,
		passwordChange,
		passwordConfirmChange,
	] = useRegister(setError)
	const onClick = () => {
		setError(RegisterTrigger(login, email, password, passwordConfirm))
	}
	return (
		<>
			<div className={conntentLogin}>
				<div className={className}>
					<div class='form__group field' style={{ marginBottom: '15px' }}>
						<input
							type='input'
							class='form__field'
							onChange={loginChange}
							value={login}
							placeholder=' '
							required
						/>
						<label class='form__label'>Логин</label>
					</div>
					<div class='form__group field' style={{ marginBottom: '15px' }}>
						<input
							type='password'
							class='form__field'
							onChange={passwordChange}
							value={password}
							placeholder=' '
							required
						/>
						<label class='form__label'>Пароль</label>
					</div>
					<div class='form__group field' style={{ marginBottom: '15px' }}>
						<input
							type='password'
							class='form__field'
							value={passwordConfirm}
							onChange={passwordConfirmChange}
							placeholder=' '
							required
						/>
						<label class='form__label'>Повторите пароль</label>
					</div>
					<div class='form__group field' style={{ marginBottom: '15px' }}>
						<input
							type='email'
							class='form__field'
							value={email}
							onChange={emailChange}
							placeholder=' '
							required
						/>
						<label class='form__label'>Email</label>
					</div>
				</div>
			</div>

			<div className={butClass}>
				<div className='text-danger mt-2'>{error}</div>

				<button className='space-btn' onClick={onClick}>
					<span>Регистрация</span>
				</button>
			</div>
		</>
	)
}

export default Register
