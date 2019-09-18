/* eslint-disable no-undef */
import { renderBeersDom } from './beers.js';
import renderDetailDom from './detail.js';

page('/', () => {
	console.log('Home page');
	renderBeersDom();
});

page('/detail/:id', ctx => {
	console.log('Detail', ctx.params.id);
	renderDetailDom(ctx.params.id);
});

page();