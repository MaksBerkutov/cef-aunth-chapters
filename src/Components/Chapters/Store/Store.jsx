export default class ChoicePlayerStore {
	constructor() {}

	players = [
		{
			Type: 'active',
			Id: 12521,
			FirstName: 'LEECOM',
			LastName: 'PANY',
			Lvl: 1,
			AdminLvl: 1,
			Fraction: 'CityHall',
			Card: '2074991',
			Money: '2074991',
			Condition: {
				Food: 50,
				Water: 50,
				Health: 50,
				Endurance: 50,
			},
		},
		{
			Type: null,
		},
		{
			Type: 'donate',
		},
	]

	setDataPlayers(obj) {
		this.players = obj
	}

	changePlayer(obj) {
		this.players[obj.slot] = obj.data
	}
}
