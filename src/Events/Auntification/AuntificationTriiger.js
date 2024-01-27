import trigger from '../triggers.json'
export function AuntificateTrigger(login, password) {
	if (login.length === 0 && password.length === 0)
		return 'Пароль или Логин не может быть пустым'

	if (login) mp.trigger(trigger.TriggerLogin, login, password)
}
function validate(login, email, password, confim) {
	var usernameRegex = /^[a-zA-Z0-9]+$/

	if (confim !== password) return 'Пароли не совпадают'
	if (!usernameRegex.test(login)) {
		return 'Некорректный логин'
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	if (!emailRegex.test(email)) {
		return 'Некорректный адрес электронной почты'
	}
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/

	if (!passwordRegex.test(password)) {
		return 'Некорректный пароль'
	}
}

export function RegisterTrigger(login, email, password, confim) {
	const err = validate(login, email, password, confim)
	if (err === undefined) {
		mp.trigger(trigger.TriggerRegister, login, password, email)
		return ''
	} else return err
}
