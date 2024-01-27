import { useState } from 'react'
import triggers from '../../Events/triggers.json'

const Slider = ({ id, min, max, step, value }) => {
	const [defvalue, setValue] = useState(value)
	const valueChange = e => {
		e.preventDefault()
		const newValue = e.target.value
		setValue(newValue)
		mp.trigger(triggers.TriigerUpdateCustomizationPerson, id, defvalue)
	}
	return (
		<>
			<div className='slider'>
				<input
					id='similar'
					type='range'
					value={defvalue}
					step={step}
					min={min}
					max={max}
					onChange={valueChange}
				/>
			</div>

			<output id='similar'>{defvalue}</output>
		</>
	)
}

export default Slider
