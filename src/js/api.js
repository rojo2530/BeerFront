/* eslint-disable no-undef */
const API_KEY = 'WKREAEX-Q5X431A-M72F0SE-FFV2YQZ';
const LIMIT = 10;
const API_URL = 'https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers';

/*
https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers y este endpoint https://web-bootcamp-exercise-beer-api-nijliozdcg.now.sh/api/v1/beers?search='' 
son equivalentes
*/

axios.defaults.headers.common['X-API-KEY'] = API_KEY;

const api = () => {
	const beersAPIEndpoint = `${API_URL}?limit=${LIMIT}`;
	const searchBeersAPIEndpoint = `${beersAPIEndpoint}&search=`;
	return {
		getAllBeers: async text => {
			try {
				const requestUrl = typeof(text) !== 'undefined' ? `${API_URL}?search=${text}` : API_URL;  //Buscamos sin limit , aq filtre por texto
				const beers = await axios({
					method: 'get',
					url: requestUrl,
				});
				return beers.data.beers;
			} catch (err) {
				console.error('Error!!!!: ',err);
				throw err;
			}
		},
		getBeers: async text => {
			try {
				console.log(text);
				const requestUrl = typeof(text) !== 'undefined' ? `${searchBeersAPIEndpoint}${text}` : beersAPIEndpoint;
				const beers = await axios({
					method: 'get',
					url: requestUrl,
				});
				return beers.data.beers;
			} catch(err) {
				console.error('Error!!!!: ',err);
				throw err;
			}
		},
		// getBeersFilter: async text => {
		// 	try {
		// 		const beers = await axios({
		// 			method: 'get',
		// 			url: `${searchBeersAPIEndpoint}${text}`,
		// 			headers: {'X-API-KEY': API_KEY}
		// 		});
		// 		return beers.data.beers;
		// 	} catch (err) {
		// 		console.error(err);
		// 		throw err;
		// 	}
		// },
		getBeerId: async id => {
			try {
				const beer = await axios({
					method: 'get',
					url: `${API_URL}/${id}`,
				});
				return beer.data.beer; 
			} catch (err) {
				console.error(err);
				throw err;
			}
		},
		createBeerComment: async (id, text) => {
			try {
				const response = await axios({
					method: 'post',
					url: `${API_URL}/${id}/comment`,
					data:{
						comment: text
					}
				});
				return response;
			} catch (err) {
				console.log(err);
			}
		},
		addBeerLike: async id => {
			try {
				const response = await axios({
					method: 'post',
					url: `${API_URL}/${id}/like`,
				});
				return response;
			} catch (err) {
				console.log(err);
			}
		},
	};
};

export default api;

