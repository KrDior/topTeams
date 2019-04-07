const axios = require('axios');

const amount = 5;
async function requestTopTeams(amount) {
	const response = await axios.get(`https://www.sports.ru/epl/table/`);
    const body = response.data;
	return body;
}

requestTopTeams(amount).then((body) => {
    console.log(body);
})