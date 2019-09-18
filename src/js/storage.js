const searchInput = document.querySelector('#search');
const inputDate = document.querySelector('#search-date');

const filters = {
	name: 'name',
	date: 'date'
};

export const saveFilter = () => {
	localStorage.setItem(filters.name, searchInput.value);
	localStorage.setItem(filters.date, inputDate.value);
};

const restoreFilter = () => {
	searchInput.value = localStorage.getItem('name');
	inputDate.value = localStorage.getItem('date');
};

restoreFilter();