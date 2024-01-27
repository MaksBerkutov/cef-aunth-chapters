import React from 'react'

const Active = ({
	cn,
	currentAccount,
	element,
	names,
	trigerStart,
	triggerDelete,
}) => {
	return (
		<div className='choice-player-card-container'>
			<div className='choice-player-card-container__image'></div>

			<div
				className={cn(
					'choice-player-card-prevent',
					currentAccount === element.Id && 'choice-player-card-prevent_disabled'
				)}
			>
				<div className='choice-player-card-prevent__name'>{`${element.FirstName} ${element.LastName}`}</div>
				<div className='choice-player-card-prevent__desc'>подробнее</div>
			</div>
			<div
				className={cn(
					'choice-player-card-container-hide',
					currentAccount === element.Id &&
						'choice-player-card-container-hide_active'
				)}
			>
				<div className='choice-player-card-container-level'>
					<div className='choice-player-card-container-level-number'>
						{element.Lvl}
						<div className='choice-player-card-container-level-number__text'>
							level
						</div>
					</div>
				</div>
				<div className='choice-player-card-container-box'>
					<div className='choice-player-card-container-box__name'>
						{`${element.FirstName} ${element.LastName}`}
					</div>
					<div className='choice-player-card-container-box-column'>
						<div className='choice-player-card-container-box-column__title'>
							Фракция
						</div>
						<div className='choice-player-card-container-box-column__text'>
							{element.Fraction}
						</div>
					</div>
					<div className='choice-player-card-container-box-row'>
						<div className='choice-player-card-container-box-column'>
							<div className='choice-player-card-container-box-column__title'>
								На счету
							</div>
							<div className='choice-player-card-container-box-column__text'>
								$ {element.Card}
							</div>
						</div>
						<div className='choice-player-card-container-box-column'>
							<div className='choice-player-card-container-box-column__title'>
								Наличные
							</div>
							<div className='choice-player-card-container-box-column__text'>
								$ {element.Money}
							</div>
						</div>
					</div>
					<div className='choice-player-card-container-box-grid'>
						{Object.entries(element.Condition).map(([key, value]) => {
							return (
								<div
									key={key}
									className='choice-player-card-container-box-grid-column'
								>
									<div className='choice-player-card-container-box-grid-column-title'>
										<div className='choice-player-card-container-box-grid-column-title__name'>
											{names[key]}
										</div>
										<div className='choice-player-card-container-box-grid-column-title__number'>
											{value}%
										</div>
									</div>
									<div
										className='choice-player-card-container-box-grid-column-line'
										style={{ '--precent': value + '%' }}
									></div>
								</div>
							)
						})}
					</div>
				</div>
				<div className='choice-player-card-container-footer'>
					<div
						className='choice-player-card-container-footer__choice'
						onClick={trigerStart}
					>
						Выбрать
					</div>
					<div
						className='choice-player-card-container-footer__delete'
						onClick={triggerDelete}
					>
						Удалить
					</div>
				</div>
			</div>
		</div>
	)
}

export default Active
