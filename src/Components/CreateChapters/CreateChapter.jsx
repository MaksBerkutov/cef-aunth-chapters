import React, { useEffect, useState } from 'react'
import './style.css'
import './character.css'
import List from '../List/List.jsx'
import triggers from '../../Events/triggers.json'
import data from './data.json'
import Slider from '../Slider/Slider.jsx'
import trigger from '../../Events/triggers.json'

const CreateChapter = ({ createChpaters, setChapters, setCreateMode }) => {
	useEffect(() => {
		//mp.trigger(triggers.TriggerCreateCamera)
		const updChapter = ({ detail }) => {
			const chapter = JSON.parse(detail.message)
			setChapters(old => {
				var dump = old
				dump[createChpaters.index] = JSON.parse(chapter)
				return dump
			})
		}
		document.addEventListener(
			trigger.TriggerCreatedChapterSucssesful,
			updChapter
		)

		return () => {
			document.removeEventListener(
				trigger.TriggerCreatedChapterSucssesful,
				updChapter
			)
		}
	}, [])
	const [gender, setGender] = useState(true)
	const updateGender = state => {
		mp.trigger(triggers.TriggerUpdateGender, state)
	}
	const exitClick = () => {
		setCreateMode(-1)
	}
	const clickMale = () => {
		setGender(true)
		updateGender(true)
	}
	const clickFemale = () => {
		setGender(false)
		updateGender(false)
	}
	const saveClick = () => {
		mp.trigger(
			triggers.TriggerCreatePerson,
			JSON.stringify(createChpaters.element),
			'SERHII',
			'KHOLOD'
		)
		setCreateMode(-1)
		mp.trigger(triggers.TriggerRemoveCamera)
	}

	return (
		<div className='editor'>
			<div className='containers'>
				<h1>Создание персонажа</h1>
				<div className='tabs'>
					<div id='content-1'>
						<div className='element'>
							<label>Выберите пол:</label>
							<div className='switch'>
								<div onClick={clickMale} className={gender ? 'btn on' : 'btn'}>
									Мужской
								</div>
								<div
									onClick={clickFemale}
									className={!gender ? 'btn on' : 'btn'}
								>
									Женский
								</div>
							</div>
						</div>
						<div className='element'>
							<label>Отец:</label>
							<List id='father' num={data.father}></List>
						</div>
						<div className='element'>
							<label>Мать:</label>
							<List id='mother' num={data.mother}></List>
						</div>
						<div className='element'>
							<label>Схожесть:</label>
							<Slider step='0.1' max='1.0' min='0' value={0.5} id='similar' />
							<div className='element'>
								<label>Цвет кожи:</label>
								<Slider step='0.1' max='1.0' min='0' value={0.5} id='skin' />
							</div>
						</div>
					</div>
					<div id='content-2'>
						<div className='wrapper'>
							<div className='wrap-1'>
								<input type='radio' id='tab-1' name='tabs' />
								<label for='tab-1'>
									<div>Нос</div>
									<div className='cross'></div>
								</label>
								<div className='content'>
									<div className='element'>
										<label>Ширина носа:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='noseWidth'
										/>
									</div>
									<div className='element'>
										<label>Высота носа:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='noseHeight'
										/>
									</div>
									<div className='element'>
										<label>Длина кончика носа:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='noseTipLength'
										/>
									</div>
									<div className='element'>
										<label>Глубина моста носа:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='noseDepth'
										/>
									</div>
									<div className='element'>
										<label>Высота кончика носа:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='noseDepth'
										/>
									</div>
									<div className='element'>
										<label>Поломаность носа:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='noseBroke'
										/>
									</div>
								</div>
							</div>

							<div className='wrap-2'>
								<input type='radio' id='tab-2' name='tabs' />
								<label for='tab-2'>
									<div>Глаза и Щеки</div>
									<div className='cross'></div>
								</label>
								<div className='content'>
									<div className='element'>
										<label>Высота бровей:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='eyebrowHeight'
										/>
									</div>
									<div className='element'>
										<label>Глубина бровей:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='eyebrowDepth'
										/>
									</div>
									<div className='element'>
										<label>Высота скул:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='cheekboneHeight'
										/>
									</div>
									<div className='element'>
										<label>Ширина скул:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='cheekboneWidth'
										/>
									</div>
									<div className='element'>
										<label>Глубина щеки:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='cheekDepth'
										/>
									</div>
									<div className='element'>
										<label>Размер глаз:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='eyeScale'
										/>
									</div>
								</div>
							</div>
							<div className='wrap-3'>
								<input type='radio' id='tab-3' name='tabs' />
								<label for='tab-3'>
									<div>Остальное</div>
									<div className='cross'></div>
								</label>
								<div className='content'>
									<div className='element'>
										<label>Толщина губ:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='lipThickness'
										/>
									</div>
									<div className='element'>
										<label>Ширина челюсти:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='jawWidth'
										/>
									</div>
									<div className='element'>
										<label>Форма челюсти:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='jawShape'
										/>
									</div>
									<div className='element'>
										<label>Высота подбородка:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='chinHeight'
										/>
									</div>
									<div className='element'>
										<label>Глубина подбородка:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='chinDepth'
										/>
									</div>
									<div className='element'>
										<label>Ширина подбородка:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='chinWidth'
										/>
									</div>
									<div className='element'>
										<label>Подбородочный отступ:</label>
										<Slider
											step='0.1'
											min='-1'
											max='1'
											value={0}
											id='chinIndent'
										/>
									</div>
									<div className='element'>
										<label>Обхват шеи:</label>
										<Slider step='0.1' min='-1' max='1' value={0} id='neck' />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id='content-3'>
						<div v-if='!isSurgery'>
							<h3>Внешность</h3>
							<div className='element'>
								<label>Волосы:</label>
								{gender ? (
									<List id='hairM' num={data.hairM} />
								) : (
									<List id='hairF' num={data.hairF}></List>
								)}
							</div>
							<div className='element'>
								<label>Брови:</label>
								{gender ? (
									<List id='eyebrowsM' num={data.eyebrowsM} />
								) : (
									<List id='eyebrowsF' num={data.eyebrowsF}></List>
								)}
							</div>
							{gender && (
								<div className='element'>
									<label>Бородка:</label>
									<List id='beard' num={data.beard}></List>
								</div>
							)}

							<div className='element'>
								<label>Цвет волос:</label>
								<List id='hairColor' num={data.hairColor}></List>
							</div>
							<div className='element'>
								<label>Цвет глаз:</label>
								<List id='eyeColor' num={data.eyeColor}></List>
							</div>
						</div>
					</div>
					<div className='tabs__links'>
						<a href='#content-1' className='button1'>
							<img src='https://imgur.com/5FLIBOY.png' className='img' alt='' />
						</a>
						<a href='#content-2' className='button1'>
							<img src='https://imgur.com/LEMEQvY.png' className='img' alt='' />
						</a>
						<a href='#content-3' className='button1'>
							<img src='https://imgur.com/BIFoM5Y.png' className='img' alt='' />
						</a>
					</div>
				</div>
				<div className='buttons'>
					<button onClick={saveClick}>Сохранить</button>
					<button onClick={exitClick}>Выход</button>
				</div>
			</div>
		</div>
	)
}

export default CreateChapter
