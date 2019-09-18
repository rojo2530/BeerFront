import api from './api.js';

const { addBeerLike } = api();

const addLikesListener = id => {
	const btnCounter = document.querySelector('.btn-counter');
	const spanCounter = document.querySelector('#likes-counter');
	btnCounter.addEventListener('click', async evt => {
		try {
			evt.preventDefault();
			btnCounter.classList.add('is-loading');
			console.log(evt.target);
			const response = await addBeerLike(id);
			spanCounter.innerText++;
			//No uso el evt, aquí porque se puede hacer click en el span tb
		} catch (err) {
			console.error(err);
		} finally {
			btnCounter.classList.remove('is-loading');
		}
	});
};

export default addLikesListener;