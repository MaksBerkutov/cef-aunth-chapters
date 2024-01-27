import React from 'react'

const NoActive = ({ element, createDonate, createPlayer }) => {
	return (
		<div className='choice-player-card-null'>
			<div className='choice-player-card-null__img'></div>
			<div className='choice-player-card-null__text'>
				{element.type === 'donate' ? 'Слот недоступен' : 'Слот пустой'}{' '}
			</div>
			<div className='choice-player-card-null__desc'>
				{element.type === 'donate'
					? 'Чтобы разблокировать дополнительный слот приобретите его в магазине'
					: 'Нажмите кнопку создать, чтобы перейти в раздел создания персонажа'}
			</div>
			<div
				className='choice-player-card-null__button'
				onClick={() =>
					element.type === 'donate' ? createDonate() : createPlayer()
				}
			>
				{element.type === 'donate' ? 'Выбрать' : 'Создать'}
			</div>
		</div>
	)
}

export default NoActive
