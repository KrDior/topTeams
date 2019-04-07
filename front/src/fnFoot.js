const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const leagues = ['la-liga', 'epl', 'seria-a', 'bundesliga'];

function getTopTeams(elem, amount) {

	const teams = [];
	for (let i = 0; i < amount; i++) {
		const name = teamName(elem, i);
		const score = teamScore(elem, i);
		const games = teamGames(elem, i);
		teams.push({
			name,
			games,
			score
		});
	}
	return teams;
}

function teamName(elem, i) {
	return elem.querySelector(`tbody tr:nth-child(${i + 1}) td:nth-child(2) div a`).innerHTML;
}

function teamScore(elem, i) {
	return elem.querySelector(`tbody tr:nth-child(${i + 1}) td:nth-child(9)`).innerHTML;
}

function teamGames(elem, i) {
	return elem.querySelector(`tbody tr:nth-child(${i + 1}) td:nth-child(3)`).innerHTML;
}

async function requestTopTeams(league, amount) {
	const { data: body } = await axios.get(`https://www.sports.ru/${league}/table/`);
	// const elem = document.createElement('div');
	// elem.innerHTML = body;
	// const top = getTopTeams(elem, amount);
	const dom = new JSDOM(body);
    const top = getTopTeams(dom.window.document, amount);
	return top;
}

async function footballInfo() {

	let res = [];

	for (const league of leagues) {
		const top = await requestTopTeams(league, 5);
		res.push(league, top);
	}
	return res;
}


// footballInfo()
// 	.then((result) => {
// 		console.log('OUT', result);
// 	});


module.exports = footballInfo;
